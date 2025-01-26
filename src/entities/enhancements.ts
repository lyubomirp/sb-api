import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { Factions } from './factions';
import { DatasheetsEnhancements } from './datasheetsEnhancements';

@Entity()
export class Enhancements {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column({ type: 'text' })
  legend: string;

  @Column()
  description: string;

  @Column()
  cost: string;

  @Column()
  detachment: string;

  @OneToMany(
    () => DatasheetsEnhancements,
    (datasheetEnhancements) => datasheetEnhancements.enhancement,
  )
  datasheetEnhancements: DatasheetsEnhancements[];

  @ManyToOne(() => Factions, (faction) => faction.enhancements)
  faction: string;
}
