import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatasheetsModels } from '../entities/datasheetsModels';
import { DatasheetsModelsService } from '../services/datasheetsModels.service';
import { DatasheetsModule } from './datasheets.module';
import { DatasheetsModelsController } from '../controllers/datasheets-models.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([DatasheetsModels]),
    DatasheetsModule,
  ],
  exports: [DatasheetsModelsService],
  providers: [DatasheetsModelsService],
  controllers: [DatasheetsModelsController],
})
export class DatasheetsModelsModule {}
