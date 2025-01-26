import { Injectable } from '@nestjs/common';
import { Abilities } from '../entities/abilities';
import { BaseService } from './base.service';

@Injectable()
export class AbilitiesService extends BaseService(Abilities) {}
