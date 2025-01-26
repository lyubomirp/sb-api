import { Controller, Get, Param } from '@nestjs/common';
import { DatasheetsService } from '../services/datasheets.service';
import { DatasheetsOptionsService } from '../services/datasheetsOptions.service';

@Controller()
export class DatasheetsOptionsController {
  constructor(
    private readonly datasheetsOptionsService: DatasheetsOptionsService,
    private readonly datasheetsService: DatasheetsService,
  ) {}

  @Get('/datasheets-options/:datasheetId')
  async index(
    @Param('datasheetId') datasheetId: string,
  ): Promise<any> {
    const datasheet =
      await this.datasheetsService.findOne(datasheetId);

    if (!datasheet) {
      return 'nope';
    }

    return await this.datasheetsOptionsService.findByDatasheet(
      datasheet,
    );
  }
}
