import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CheckInEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  person: string;

  @Column('int')
  arena: number;

  @Column()
  checkin_time: Date;

  @Column()
  checkout_time: Date;
}