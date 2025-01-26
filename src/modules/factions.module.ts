import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Factions } from '../entities/factions';
import { FactionsService } from '../services/factions.service';
import { FactionController } from '../controllers/faction.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Factions])],
  exports: [FactionsService],
  providers: [FactionsService],
  controllers: [FactionController],
})
export class FactionsModule {}
