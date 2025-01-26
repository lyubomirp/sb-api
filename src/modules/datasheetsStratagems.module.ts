import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatasheetsStratagems } from '../entities/datasheetsStratagems';
import { DatasheetsStratagemsService } from '../services/datasheetsStratagems.service';
import { DatasheetsModule } from './datasheets.module';
import { DatasheetsStratagemsController } from '../controllers/datasheets-stratagems.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([DatasheetsStratagems]),
    DatasheetsModule,
  ],
  exports: [DatasheetsStratagemsService],
  providers: [DatasheetsStratagemsService],
  controllers: [DatasheetsStratagemsController],
})
export class DatasheetsStratagemsModule {}
