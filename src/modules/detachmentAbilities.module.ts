import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetachmentAbilities } from '../entities/detachmentAbilities';
import { DetachmentAbilitiesService } from '../services/detachmentAbilities.service';

@Module({
  imports: [TypeOrmModule.forFeature([DetachmentAbilities])],
  exports: [DetachmentAbilitiesService],
  providers: [DetachmentAbilitiesService],
  controllers: [],
})
export class DetachmentAbilitiesModule {}
