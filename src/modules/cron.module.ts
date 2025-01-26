import { Module } from '@nestjs/common';
import { CronService } from '../services/cron.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { LastUpdateModule } from './lastUpdate.module';

@Module({
  imports: [HttpModule, ConfigModule, LastUpdateModule],
  exports: [],
  providers: [CronService],
  controllers: [],
})
export class CronModule {}
