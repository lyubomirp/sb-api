import { Injectable } from '@nestjs/common';
import { BaseService } from './base.service';
import { Stratagems } from '../entities/stratagems';

@Injectable()
export class StratagemsService extends BaseService(Stratagems) {}
