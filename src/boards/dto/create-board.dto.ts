import { BoardStatus } from '../board.model';

export class CreateBoardDto {
  title: string;
  description: string;
  status: BoardStatus;
}
