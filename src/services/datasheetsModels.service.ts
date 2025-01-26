import { Injectable } from '@nestjs/common';
import { BaseService } from './base.service';
import { DatasheetsModels } from '../entities/datasheetsModels';

@Injectable()
export class DatasheetsModelsService extends BaseService(
  DatasheetsModels,
) {}
