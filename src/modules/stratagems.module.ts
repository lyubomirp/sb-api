import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Stratagems } from '../entities/stratagems';
import { StratagemsService } from '../services/stratagems.service';

@Module({
  imports: [TypeOrmModule.forFeature([Stratagems])],
  exports: [StratagemsService],
  providers: [StratagemsService],
  controllers: [],
})
export class StratagemsModule {}
