import { Injectable } from '@nestjs/common';
import { BaseService } from './base.service';
import { DatasheetsEnhancements } from '../entities/datasheetsEnhancements';

@Injectable()
export class DatasheetsEnhancementsService extends BaseService(
  DatasheetsEnhancements,
) {}
