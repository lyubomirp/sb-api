import { Injectable } from '@nestjs/common';
import { BaseService } from './base.service';
import { Enhancements } from '../entities/enhancements';

@Injectable()
export class EnhancementsService extends BaseService(Enhancements) {}
