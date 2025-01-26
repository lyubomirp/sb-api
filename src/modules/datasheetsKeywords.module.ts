import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatasheetsKeywords } from '../entities/datasheetsKeywords';
import { DatasheetsKeywordsService } from '../services/datasheetsKeywords.service';

@Module({
  imports: [TypeOrmModule.forFeature([DatasheetsKeywords])],
  exports: [DatasheetsKeywordsService],
  providers: [DatasheetsKeywordsService],
  controllers: [],
})
export class DatasheetsKeywordsModule {}
