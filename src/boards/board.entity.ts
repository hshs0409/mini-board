import { BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

export type BoardStatus = 'PUBLIC' | 'PRIVATE';

export class Board extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;
  @Column()
  description: string;

  @Column()
  status: BoardStatus;
}
