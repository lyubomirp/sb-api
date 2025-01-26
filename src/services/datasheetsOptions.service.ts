import { Injectable } from '@nestjs/common';
import { BaseService } from './base.service';
import { DatasheetsOptions } from '../entities/datasheetsOptions';

@Injectable()
export class DatasheetsOptionsService extends BaseService(
  DatasheetsOptions,
) {}
