import { Injectable } from '@nestjs/common';
import * as fs from 'node:fs';
import { xml2json } from 'xml-js';

@Injectable()
export class AppService {
  constructor() {}

  getHello(): any {
    const repoDir = `${process.cwd()}/wh40k-10e`;

    fs.readdirSync(repoDir).map((file) => {
      if (file.endsWith('.cat')) {
        const fileData = fs.readFileSync(
          `${repoDir}/${file}`,
          'utf-8',
        );
        const result = xml2json(fileData, {
          compact: true,
          spaces: 4,
        });

        if (!fs.existsSync('parsed')) {
          fs.mkdirSync('parsed');
        }

        fs.writeFileSync(
          `${process.cwd()}/parsed/${file.replace('.cat', '.json')}`,
          result,
          { flag: 'w', encoding: 'utf-8' },
        );
      }
    });
  }
}
