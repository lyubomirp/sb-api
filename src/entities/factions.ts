import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Abilities } from './abilities';
import { Datasheets } from './datasheets';
import { Stratagems } from './stratagems';
import { Enhancements } from './enhancements';
import { DetachmentAbilities } from './detachmentAbilities';

@Entity()
export class Factions {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  link: string;

  @OneToMany(() => Abilities, (ability) => ability.faction)
  abilities: Abilities[];

  @OneToMany(() => Datasheets, (datasheet) => datasheet.faction)
  datasheets: Datasheets[];

  @OneToMany(() => Stratagems, (stratagem) => stratagem.faction)
  stratagems: Stratagems[];

  @OneToMany(() => Enhancements, (enhancement) => enhancement.faction)
  enhancements: Enhancements[];

  @OneToMany(
    () => DetachmentAbilities,
    (detachmentAbility) => detachmentAbility.faction,
  )
  detachmentAbilities: DetachmentAbilities[];
}
