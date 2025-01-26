import {
  Entity,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Datasheets } from './datasheets';
import { DetachmentAbilities } from './detachmentAbilities';

@Entity()
export class DatasheetsDetachmentAbilities {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ManyToOne(
    () => Datasheets,
    (datasheet) => datasheet.datasheetDetachmentAbilities,
  )
  datasheet: Datasheets;

  @ManyToOne(
    () => DetachmentAbilities,
    (detachmentAbility) =>
      detachmentAbility.datasheetDetachmentAbilities,
  )
  detachmentAbility: DetachmentAbilities;
}
