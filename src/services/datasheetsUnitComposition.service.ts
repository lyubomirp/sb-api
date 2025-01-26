import { Injectable } from '@nestjs/common';
import { BaseService } from './base.service';
import { DatasheetsUnitComposition } from '../entities/datasheetsUnitComposition';

@Injectable()
export class DatasheetsUnitCompositionService extends BaseService(
  DatasheetsUnitComposition,
) {}
