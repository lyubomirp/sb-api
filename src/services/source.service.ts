import { Injectable } from '@nestjs/common';
import { BaseService } from './base.service';
import { Source } from '../entities/source';

@Injectable()
export class SourceService extends BaseService(Source) {}
