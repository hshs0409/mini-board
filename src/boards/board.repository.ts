import { Repository } from 'typeorm';
import { Board } from './board.entity';
import { CreateBoardDto } from './dto/create-board.dto';

export interface BoardRepository extends Repository<Board> {
  this: Repository<Board>;
  createBoard(createBoardDto: CreateBoardDto): Promise<Board>;
}

export const customBoardRepository: Pick<BoardRepository, 'createBoard'> = {
  async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    const { title, description, status } = createBoardDto;

    const board: Board = this.create({
      title,
      description,
      status,
    });
    await this.save(board);

    return board; // 어떤 Board가 Created인지 정보 Return
  },
};
