import 
{ 
    Entity, 
    Column, 
    PrimaryGeneratedColumn, 
    OneToMany, 
    JoinColumn, 
    OneToOne 
} from 'typeorm';
import { Try } from './try.entity';
import { Conversion } from './conversion.entity';
import { Goal } from './goal.entity';
import { Venue } from './venue.entity';

@Entity()
export class Match {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  hometeamId: number;

  @Column()
  awayteamId: number;

  @OneToOne(() => Venue)
  @JoinColumn()
  venue: Venue

  @Column()
  homeScore: number;

  @Column()
  awayScore: number;

  @OneToMany(() => Try, (tries) => tries.match)
  tries: Try[]

  @OneToMany(() => Conversion, (conversions) => conversions.match)
  conversions: Conversion[]

  @OneToMany(() => Goal, (goals) => goals.match)
  goals: Goal[]
}