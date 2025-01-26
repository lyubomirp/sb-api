import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Enhancements } from '../entities/enhancements';
import { EnhancementsService } from '../services/enhancements.service';

@Module({
  imports: [TypeOrmModule.forFeature([Enhancements])],
  exports: [EnhancementsService],
  providers: [EnhancementsService],
  controllers: [],
})
export class EnhancementsModule {}
