import { IsNotEmpty, IsString } from 'class-validator';
import { BoardStatus } from '../board.entity';

export class CreateBoardDto {
  // 인수가 들어왔을 때 decorator 보고 유효성 체크 -> Controller에서 pipe 사용 명시해줘야 한다. (핸들러 레벨)
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  status: BoardStatus;
}
