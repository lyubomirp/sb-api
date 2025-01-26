import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Datasheets } from './datasheets';

@Entity()
export class DatasheetsLeader {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ManyToOne(
    () => Datasheets,
    (datasheet) => datasheet.datasheetLeaders,
  )
  leader: Datasheets;

  @ManyToOne(
    () => Datasheets,
    (datasheet) => datasheet.datasheetAttached,
  )
  attached: Datasheets;
}
