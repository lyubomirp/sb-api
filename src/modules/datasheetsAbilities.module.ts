import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatasheetsAbilities } from '../entities/datasheetsAbilities';
import { DatasheetsAbilitiesService } from '../services/datasheetsAbilities.service';
import { DatasheetsModule } from './datasheets.module';
import { DatasheetsAbilitiesController } from '../controllers/datasheets-abilities.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([DatasheetsAbilities]),
    DatasheetsModule,
  ],
  exports: [DatasheetsAbilitiesService],
  providers: [DatasheetsAbilitiesService],
  controllers: [DatasheetsAbilitiesController],
})
export class DatasheetsAbilitiesModule {}
