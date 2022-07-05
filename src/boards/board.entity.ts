import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export type BoardStatus = 'PUBLIC' | 'PRIVATE';

@Entity()
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
