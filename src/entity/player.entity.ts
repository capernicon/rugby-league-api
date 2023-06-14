import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { Try } from './try.entity';
import { Conversion } from './conversion.entity';
import { Goal } from './goal.entity';
import { Team } from './team.entity';

@Entity()
export class Player {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @OneToOne(() => Team)
  @JoinColumn()
  team: Team

  @OneToMany(() => Try, (tries) => tries.match)
  tries: Try[]

  @OneToMany(() => Conversion, (conversions) => conversions.match)
  conversions: Conversion[]

  @OneToMany(() => Goal, (goals) => goals.match)
  goals: Goal[]
}