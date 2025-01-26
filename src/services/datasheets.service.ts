import { Injectable } from '@nestjs/common';
import { BaseService } from './base.service';
import { Datasheets } from '../entities/datasheets';
import { Factions } from '../entities/factions';

@Injectable()
export class DatasheetsService extends BaseService(Datasheets) {
  async findByFaction(faction: Factions) {
    return await this.repository.findBy({ faction });
  }

  async findOne(id: string, relations?: string[]) {
    return await this.repository.findOne({
      where: { id },
      relations,
    });
  }
}
