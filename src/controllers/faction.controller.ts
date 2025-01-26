import { Controller, Get } from '@nestjs/common';
import { FactionsService } from '../services/factions.service';

@Controller()
export class FactionController {
  constructor(private readonly factionService: FactionsService) {}
  @Get('/factions')
  async index(): Promise<any> {
    return await this.factionService.findAll();
  }
}
