import { Controller, Get, Param } from '@nestjs/common';
import { DatasheetsModelsService } from '../services/datasheetsModels.service';
import { DatasheetsService } from '../services/datasheets.service';

@Controller()
export class DatasheetsModelsController {
  constructor(
    private readonly datasheetsModelsService: DatasheetsModelsService,
    private readonly datasheetsService: DatasheetsService,
  ) {}

  @Get('/datasheets-models/:datasheetId')
  async index(
    @Param('datasheetId') datasheetId: string,
  ): Promise<any> {
    const datasheet =
      await this.datasheetsService.findOne(datasheetId);

    if (!datasheet) {
      return 'nope';
    }

    return await this.datasheetsModelsService.findByDatasheet(
      datasheet,
    );
  }
}
