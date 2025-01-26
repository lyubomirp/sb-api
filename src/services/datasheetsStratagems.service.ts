import { Injectable } from '@nestjs/common';
import { BaseService } from './base.service';
import { DatasheetsStratagems } from '../entities/datasheetsStratagems';

@Injectable()
export class DatasheetsStratagemsService extends BaseService(
  DatasheetsStratagems,
) {}
