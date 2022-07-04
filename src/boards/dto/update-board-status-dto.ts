import { BoardStatus } from '../board.model';

export class UpdateBoardStatusDto {
  // Mapped Types 공부 후 코드 개선
  // Partial Type, Pick Type, Omit Type, Intersection Type, Composition
  id: string;
  status: BoardStatus;
}
