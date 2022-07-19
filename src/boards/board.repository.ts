import { User } from 'src/auth/user.entity';
import { Repository } from 'typeorm';
import { Board } from './board.entity';
import { CreateBoardDto } from './dto/create-board.dto';

export interface BoardRepository extends Repository<Board> {
  this: Repository<Board>;
  createBoard(createBoardDto: CreateBoardDto, user: User): Promise<Board>;
}

export const customBoardRepository: Pick<BoardRepository, 'createBoard'> = {
  async createBoard(
    createBoardDto: CreateBoardDto,
    user: User,
  ): Promise<Board> {
    const { title, description, status } = createBoardDto;

    const board: Board = this.create({
      title,
      description,
      status,
      user,
    });
    await this.save(board);

    return board; // 어떤 Board가 Created인지 정보 Return
  },
};
