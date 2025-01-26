import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LastUpdate } from '../entities/lastUpdate';
import { LastUpdateService } from '../services/lastUpdate.service';

@Module({
  imports: [TypeOrmModule.forFeature([LastUpdate])],
  exports: [LastUpdateService],
  providers: [LastUpdateService],
  controllers: [],
})
export class LastUpdateModule {}
