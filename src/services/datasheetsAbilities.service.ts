import { Injectable } from '@nestjs/common';
import { BaseService } from './base.service';
import { DatasheetsAbilities } from '../entities/datasheetsAbilities';

@Injectable()
export class DatasheetsAbilitiesService extends BaseService(
  DatasheetsAbilities,
) {}
