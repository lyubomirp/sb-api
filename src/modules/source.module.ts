import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Source } from '../entities/source';
import { SourceService } from '../services/source.service';

@Module({
  imports: [TypeOrmModule.forFeature([Source])],
  exports: [SourceService],
  providers: [SourceService],
  controllers: [],
})
export class SourceModule {}
