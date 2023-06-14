import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Try } from './try.entity';
import { Conversion } from './conversion.entity';
import { Goal } from './goal.entity';
import { MaxLength } from 'class-validator';

@Entity()
export class Team {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  @MaxLength(6)
  shortname: string;

  @Column()
  logo: string;

  @Column()
  established: string;

  @OneToMany(() => Try, (tries) => tries.match)
  tries: Try[]

  @OneToMany(() => Conversion, (conversions) => conversions.match)
  conversions: Conversion[]

  @OneToMany(() => Goal, (goals) => goals.match)
  goals: Goal[]
}