import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Match } from './match.entity';
import { Player } from './player.entity';
import { Team } from './team.entity';

@Entity()
export class Conversion {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Match, (match) => match.conversions)
  match: Match

  @ManyToOne(() => Player, (player) => player.id)
  player: Player

  @ManyToOne(() => Team, (team) => team.id)
  team: Team
}