import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatasheetsLeader } from '../entities/datasheetsLeader';
import { DatasheetsLeaderService } from '../services/datasheetsLeader.service';
import { DatasheetsLeaderController } from '../controllers/datasheets-leader.controller';
import { DatasheetsModule } from './datasheets.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([DatasheetsLeader]),
    DatasheetsModule,
  ],
  exports: [DatasheetsLeaderService],
  providers: [DatasheetsLeaderService],
  controllers: [DatasheetsLeaderController],
})
export class DatasheetsLeaderModule {}
