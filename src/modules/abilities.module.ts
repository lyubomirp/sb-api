import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Abilities } from '../entities/abilities';
import { AbilitiesService } from '../services/abilities.service';
import { AbilityController } from '../controllers/ability.controller';
import { HttpModule } from '@nestjs/axios';
import { EntityManager } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Abilities]),
    HttpModule,
    EntityManager,
  ],
  exports: [TypeOrmModule],
  providers: [AbilitiesService],
  controllers: [AbilityController],
})
export class AbilitiesModule {}
