import { Controller, Get } from '@nestjs/common';
import { AppService } from '../services/app.service';
import { fsReadFile } from 'ts-loader/dist/utils';
import { Abilities } from '../entities/abilities';
import { AbilitiesService } from '../services/abilities.service';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  async getHello(): Promise<any> {
    // this.appService.getHello();
    // cd('/data');
    // exec('git clone https://github.com/BSData/wh40k-10e.git');
    const res = '';

    return '';
  }
}
