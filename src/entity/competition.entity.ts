import 
{ 
  Entity, 
  Column, 
  PrimaryGeneratedColumn 
} from 'typeorm';

@Entity()
export class Competition {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}