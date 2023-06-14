import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import {
  IsEmail, 
  MinLength
} from 'class-validator';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsEmail()
  username: string;

  @Column()
  @MinLength(8)
  password: string;

  @Column({ default: true })
  isActive: boolean;
}