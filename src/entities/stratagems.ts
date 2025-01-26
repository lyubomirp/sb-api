import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { Factions } from './factions';
import { DatasheetsStratagems } from './datasheetsStratagems';

@Entity()
export class Stratagems {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  cpCost: number;

  @Column({ type: 'text' })
  legend: string;

  @Column()
  turn: string;

  @Column()
  phase: string;

  @Column({ nullable: true })
  detachment: string;

  @Column()
  description: string;

  @OneToMany(
    () => DatasheetsStratagems,
    (datasheetStratagems) => datasheetStratagems.stratagem,
  )
  datasheetStratagems: DatasheetsStratagems[];

  @ManyToOne(() => Factions, (faction) => faction.stratagems)
  faction: Factions;
}
