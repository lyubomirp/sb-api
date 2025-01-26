import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Abilities } from './abilities';
import { Factions } from './factions';
import { Datasheets } from './datasheets';

@Entity()
export class Source {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  edition: string;

  @Column({ nullable: true })
  version: string;

  @Column()
  errataDate: string;

  @Column()
  errataLink: string;

  @OneToMany(() => Datasheets, (datasheet) => datasheet.source)
  datasheets: Datasheets[];
}
