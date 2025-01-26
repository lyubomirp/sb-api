import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatasheetsModelsCost } from '../entities/datasheetsModelsCost';
import { DatasheetsModelsCostService } from '../services/datasheetsModelsCost.service';

@Module({
  imports: [TypeOrmModule.forFeature([DatasheetsModelsCost])],
  exports: [DatasheetsModelsCostService],
  providers: [DatasheetsModelsCostService],
  controllers: [],
})
export class DatasheetsModelsCostModule {}
