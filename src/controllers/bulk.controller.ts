import { Controller, Get } from '@nestjs/common';
import * as csv from '@fast-csv/parse';
import * as fs from 'fs';
import * as _ from 'lodash';
import { ModuleRef } from '@nestjs/core';

@Controller()
export class BulkController {
  constructor(protected moduleRef: ModuleRef) {}

  sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  readCsv(path, options): Promise<any[]> {
    return new Promise((resolve, reject) => {
      const res = [];

      csv
        .parseFile(path, options)
        .on('error', reject)
        .on('data', (row) => {
          res.push(
            Object.keys(row).reduce((attrs, key) => {
              if (key && row[key]) {
                let tempKey = key;

                if (tempKey.endsWith('_id')) {
                  tempKey = tempKey.split('_')[0];
                }

                return {
                  ...attrs,
                  [_.camelCase(tempKey)]: row[key].replaceAll(
                    /<[^>]*>/g,
                    '\n',
                  ),
                };
              }

              return attrs;
            }, {}),
          );
        })
        .on('end', () => {
          resolve(res);
        });
    });
  }

  @Get('bulk')
  async index(): Promise<any> {
    const dir = `${process.cwd()}/data`;

    const files = fs
      .readdirSync(`${dir}`)
      .map((fileName) => {
        const path = `${dir}/${fileName}`;

        return {
          ord: Number.parseInt(fileName.split('.')[0]),
          name: fileName,
          path: path,
        };
      })
      .sort((a, b) => a.ord - b.ord);

    for (const { name, path } of files) {
      if (name.endsWith('.csv')) {
        // [0] - order
        // [1] - name
        // [2] - extension
        const fileName = name.split('.')[1];

        if (name) {
          let data: any[] = await this.readCsv(path, {
            delimiter: '|',
            headers: true,
            ignoreEmpty: true,
          });

          if (fileName === 'Datasheets_abilities') {
            data = data.filter(
              (entry) => entry.ability !== '000006707',
            );
          }

          if (
            fileName === 'Datasheets_detachment_abilities' ||
            fileName === 'Datasheets_enhancements' ||
            fileName === 'Datasheets_stratagems'
          ) {
            data = data.filter(
              (entry) =>
                !['000002495', '000001259'].includes(entry.datasheet),
            );
          }

          if (data) {
            await this.moduleRef
              .get(`${_.camelCase(fileName)}Service`)
              .createMany(data);
            console.log('starting sleeps ');
            await this.sleep(5000);
            console.log('ending sleep');
          }
        }
      }
    }

    return 123;
  }
}
