import { Injectable } from '@nestjs/common';
import { BaseService } from './base.service';
import { LastUpdate } from '../entities/lastUpdate';

@Injectable()
export class LastUpdateService extends BaseService(LastUpdate) {
  async findLatest(): Promise<LastUpdate> {
    return this.repository.query(
      'SELECT * FROM last_update ORDER BY last_update.id DESC LIMIT 1',
    );
  }
}
