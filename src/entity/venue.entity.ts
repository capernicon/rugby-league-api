import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Venue {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  capacity?: number;
}