import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatasheetsWargear } from '../entities/datasheetsWargear';
import { DatasheetsWargearService } from '../services/datasheetsWargear.service';
import { DatasheetsWargearController } from '../controllers/datasheets-wargear.controller';
import { DatasheetsModule } from './datasheets.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([DatasheetsWargear]),
    DatasheetsModule,
  ],
  exports: [DatasheetsWargearService],
  providers: [DatasheetsWargearService],
  controllers: [DatasheetsWargearController],
})
export class DatasheetsWargearModule {}
