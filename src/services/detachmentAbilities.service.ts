import { Injectable } from '@nestjs/common';
import { BaseService } from './base.service';
import { DetachmentAbilities } from '../entities/detachmentAbilities';

@Injectable()
export class DetachmentAbilitiesService extends BaseService(
  DetachmentAbilities,
) {}
