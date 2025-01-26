import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatasheetsUnitComposition } from '../entities/datasheetsUnitComposition';
import { DatasheetsUnitCompositionService } from '../services/datasheetsUnitComposition.service';
import { DatasheetsUnitCompositionController } from '../controllers/datasheets-unit-composition.controller';
import { DatasheetsModule } from './datasheets.module';
import { DatasheetsModelsCostModule } from './datasheetsModelsCost.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([DatasheetsUnitComposition]),
    DatasheetsModule,
    DatasheetsModelsCostModule,
  ],
  exports: [DatasheetsUnitCompositionService],
  providers: [DatasheetsUnitCompositionService],
  controllers: [DatasheetsUnitCompositionController],
})
export class DatasheetsUnitCompositionModule {}
