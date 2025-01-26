import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { Factions } from './factions';
import { DatasheetsDetachmentAbilities } from './datasheetsDetachmentAbilities';

@Entity()
export class DetachmentAbilities {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column({ type: 'text', nullable: true })
  legend: string;

  @Column()
  description: string;

  @Column()
  detachment: string;

  @ManyToOne(() => Factions, (faction) => faction.detachmentAbilities)
  faction: Factions;

  @OneToMany(
    () => DatasheetsDetachmentAbilities,
    (datasheetDetachmentAbilities) =>
      datasheetDetachmentAbilities.detachmentAbility,
  )
  datasheetDetachmentAbilities: DatasheetsDetachmentAbilities[];
}
