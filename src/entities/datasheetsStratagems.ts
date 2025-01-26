import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Datasheets } from './datasheets';
import { Stratagems } from './stratagems';

@Entity()
export class DatasheetsStratagems {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ManyToOne(
    () => Datasheets,
    (datasheet) => datasheet.datasheetStratagems,
  )
  datasheet: Datasheets;

  @ManyToOne(
    () => Stratagems,
    (stratagem) => stratagem.datasheetStratagems,
  )
  stratagem: Stratagems;
}
