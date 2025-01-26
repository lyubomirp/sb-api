import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Datasheets } from './datasheets';
import { Enhancements } from './enhancements';

@Entity()
export class DatasheetsEnhancements {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ManyToOne(
    () => Datasheets,
    (datasheet) => datasheet.datasheetEnhancements,
  )
  datasheet: Datasheets;

  @ManyToOne(
    () => Enhancements,
    (enhancement) => enhancement.datasheetEnhancements,
  )
  enhancement: Enhancements;
}
