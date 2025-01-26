import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import * as fs from 'fs';
import * as csv from '@fast-csv/parse';
import { LastUpdateService } from './lastUpdate.service';

@Injectable()
export class CronService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
    private readonly lastUpdateService: LastUpdateService,
  ) {}
  shouldUpdate = false;

  @Cron('45 * * * * *')
  async handleLastUpdate() {
    const fileName = 'Last_update.csv';
    const dir = `${process.cwd()}`;

    if (!fs.existsSync(`${dir}/temp/`)) {
      fs.mkdir(`${dir}/temp/`, (err) => {
        if (err) {
          return console.error(err);
        }
        console.log('Directory created successfully!');
      });
    }

    const writeStream = fs.createWriteStream(
      `${dir}/temp/${fileName}`,
      {
        flags: 'a+',
      },
    );

    console.log('Fetching file');

    this.httpService
      .get(`${this.configService.get('api_url')}/${fileName}`)
      .subscribe((value) => {
        writeStream.write(value.data);
        console.log('File writing completed');

        console.log('Begin parsing');
        csv
          .parseFile(`${dir}/temp/${fileName}`, {
            delimiter: '|',
            headers: true,
            ignoreEmpty: true,
          })
          .on('error', (err) =>
            console.error('File parse failed', err),
          )
          .on('data', async (row) => {
            console.log('Data received');
            const lastUpdateApi = row['last_update'];
            const lastUpdateLocal = await this.lastUpdateService
              .findLatest()
              .then((data: any) => data.map((s) => s));

            console.log(
              new Date(lastUpdateApi) >
                new Date(lastUpdateLocal[0].lastUpdate),
            );

            console.log(new Date(lastUpdateApi));
            console.log(new Date(lastUpdateLocal[0].lastUpdate));

            if (lastUpdateLocal.length > 0) {
              if (
                new Date(lastUpdateApi) >
                new Date(lastUpdateLocal[0].lastUpdate)
              ) {
                console.log('Beginning update');
                this.shouldUpdate = true;
                const updateResult =
                  await this.lastUpdateService.updateOne(
                    lastUpdateLocal[0].id,
                    {
                      lastUpdate: lastUpdateApi,
                    },
                  );
                console.log('res', updateResult);
                if (updateResult && updateResult.affected === 1) {
                  console.log('Update completed. Moving file');

                  fs.renameSync(
                    `${dir}/temp/${fileName}`,
                    `${dir}/data/19.${fileName}`,
                  );

                  console.log('File move completed!');
                  return;
                }

                console.error('File update failed');
                return;
              } else {
                console.log('Already at latest update!');
                this.shouldUpdate = false;
                return;
              }
            }

            console.log('Missing last_update entry. Creating');

            await this.lastUpdateService.create({
              lastUpdate: lastUpdateApi,
            });

            console.log('Last_update created! Moving file');

            fs.renameSync(
              `${dir}/temp/${fileName}`,
              `${dir}/data/19.${fileName}`,
            );

            console.log('File move completed!');

            this.shouldUpdate = true;
          });
      });
  }

  // @Cron(CronExpression.EVERY_5_HOURS)
  // handleShouldUpdate() {
  //   this.shouldUpdate = true;
  // }
}
