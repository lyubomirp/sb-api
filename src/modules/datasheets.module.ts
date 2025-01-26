import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Datasheets } from '../entities/datasheets';
import { DatasheetsService } from '../services/datasheets.service';
import { DatasheetsController } from '../controllers/datasheets.controller';
import { FactionsModule } from './factions.module';

@Module({
  imports: [TypeOrmModule.forFeature([Datasheets]), FactionsModule],
  exports: [DatasheetsService],
  providers: [DatasheetsService],
  controllers: [DatasheetsController],
})
export class DatasheetsModule {}
