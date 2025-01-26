import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class LastUpdate {
  @PrimaryGeneratedColumn('increment')
  id?: number;

  @Column()
  lastUpdate: string;
}
