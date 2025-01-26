import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatasheetsOptions } from '../entities/datasheetsOptions';
import { DatasheetsOptionsService } from '../services/datasheetsOptions.service';
import { DatasheetsOptionsController } from '../controllers/datasheets-options.controller';
import { DatasheetsModule } from './datasheets.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([DatasheetsOptions]),
    DatasheetsModule,
  ],
  exports: [DatasheetsOptionsService],
  providers: [DatasheetsOptionsService],
  controllers: [DatasheetsOptionsController],
})
export class DatasheetsOptionsModule {}
