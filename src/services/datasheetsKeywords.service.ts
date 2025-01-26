import { Injectable } from '@nestjs/common';
import { BaseService } from './base.service';
import { DatasheetsKeywords } from '../entities/datasheetsKeywords';

@Injectable()
export class DatasheetsKeywordsService extends BaseService(
  DatasheetsKeywords,
) {}
