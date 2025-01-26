import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatasheetsDetachmentAbilities } from '../entities/datasheetsDetachmentAbilities';
import { DatasheetsDetachmentAbilitiesService } from '../services/datasheetsDetachmentAbilities.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([DatasheetsDetachmentAbilities]),
  ],
  exports: [DatasheetsDetachmentAbilitiesService],
  providers: [DatasheetsDetachmentAbilitiesService],
  controllers: [],
})
export class DatasheetsDetachmentAbilitiesModule {}
