import { Controller, Get } from '@nestjs/common';

@Controller()
export class AbilityController {
  constructor() {}
  @Get('abilities')
  async index(): Promise<any> {
    return 'nema';
  }
}
