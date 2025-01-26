import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatasheetsEnhancements } from '../entities/datasheetsEnhancements';
import { DatasheetsEnhancementsService } from '../services/datasheetsEnhancements.service';

@Module({
  imports: [TypeOrmModule.forFeature([DatasheetsEnhancements])],
  exports: [DatasheetsEnhancementsService],
  providers: [DatasheetsEnhancementsService],
  controllers: [],
})
export class DatasheetsEnhancementsModule {}
