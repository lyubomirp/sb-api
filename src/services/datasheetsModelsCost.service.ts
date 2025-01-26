import { Injectable } from '@nestjs/common';
import { BaseService } from './base.service';
import { DatasheetsModelsCost } from '../entities/datasheetsModelsCost';
import { Datasheets } from '../entities/datasheets';

@Injectable()
export class DatasheetsModelsCostService extends BaseService(
  DatasheetsModelsCost,
) {}
