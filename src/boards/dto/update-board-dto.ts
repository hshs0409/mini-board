import { BoardStatus } from '../board.model';

export class UpdateBoardDto {
  id: string;
  status: BoardStatus;
}
