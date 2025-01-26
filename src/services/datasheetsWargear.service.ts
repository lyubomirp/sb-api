import { Injectable } from '@nestjs/common';
import { BaseService } from './base.service';
import { DatasheetsWargear } from '../entities/datasheetsWargear';
import { Datasheets } from '../entities/datasheets';
import { DatasheetsModelsCost } from '../entities/datasheetsModelsCost';

@Injectable()
export class DatasheetsWargearService extends BaseService(
  DatasheetsWargear,
) {
  createMany = async (data: DatasheetsWargear[]): Promise<void> => {
    const datasheetRepo = this.dataSource.getRepository('Datasheets');

    const datasheetIds = await datasheetRepo
      .find()
      .then((sheet: any) => sheet.map((s) => s.id));

    await super.createMany(
      data.filter((entry) => datasheetIds.includes(entry.datasheet)),
    );
  };
}
