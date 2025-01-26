import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Datasheets } from './datasheets';

@Entity()
export class DatasheetsWargear {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  line: string;

  @Column()
  lineInWargear: string;

  @Column({ nullable: true })
  dice: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  range: string;

  @Column()
  type: string;

  @Column()
  a: string;

  @Column()
  bsWs: string;

  @Column()
  s: string;

  @Column()
  ap: string;

  @Column()
  d: string;

  @ManyToOne(
    () => Datasheets,
    (datasheet) => datasheet.datasheetWargear,
  )
  datasheet: Datasheets;
}
