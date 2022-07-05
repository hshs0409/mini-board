import { dataSource } from 'src/configs/typeorm.config';
import { Board } from './board.entity';
import { CreateBoardDto } from './dto/create-board.dto';

export const BoardRepository = dataSource.getRepository(Board).extend({
  async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    const { title, description, status } = createBoardDto;

    const board: Board = this.boardRepository.create({
      title,
      description,
      status,
    });
    await this.boardRepository.save(board);

    return board; // 어떤 Board가 Created인지 정보 Return
  },
});
