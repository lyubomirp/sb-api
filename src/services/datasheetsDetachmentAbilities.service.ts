import { Injectable } from '@nestjs/common';
import { BaseService } from './base.service';
import { DatasheetsDetachmentAbilities } from '../entities/datasheetsDetachmentAbilities';

@Injectable()
export class DatasheetsDetachmentAbilitiesService extends BaseService(
  DatasheetsDetachmentAbilities,
) {}
