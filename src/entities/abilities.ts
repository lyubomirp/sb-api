import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { Factions } from './factions';
import { DatasheetsAbilities } from './datasheetsAbilities';

@Entity()
export class Abilities {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column({ type: 'text', nullable: true })
  legend: string;

  @Column({ nullable: true })
  description: string;

  @OneToMany(
    () => DatasheetsAbilities,
    (datasheetAbilities) => datasheetAbilities.ability,
  )
  @JoinColumn({ name: 'id' })
  datasheetAbilities: DatasheetsAbilities[];

  @ManyToOne(() => Factions, (faction) => faction.abilities, {
    nullable: true,
  })
  faction: Factions;
}
