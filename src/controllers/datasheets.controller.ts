import { Controller, Get, Param } from '@nestjs/common';
import { DatasheetsService } from '../services/datasheets.service';
import { FactionsService } from '../services/factions.service';

@Controller()
export class DatasheetsController {
  constructor(
    private readonly datasheetsService: DatasheetsService,
    private readonly factionService: FactionsService,
  ) {}
  @Get('/datasheets/:factionId')
  async index(@Param('factionId') factionId: string): Promise<any> {
    const faction = await this.factionService.findOne(factionId);

    if (!faction) {
      return 'nope';
    }

    return await this.datasheetsService.findByFaction(faction);
  }

  @Get('/datasheets/single/:datasheetId')
  async getOne(
    @Param('datasheetId') datasheetId: string,
  ): Promise<any> {
    const datasheet =
      await this.datasheetsService.findOne(datasheetId);

    if (!datasheet) {
      return 'nope';
    }

    return datasheet;
  }
}
