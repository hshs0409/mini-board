import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Board } from './board.entity';
import { CreateBoardDto } from './dto/create-board.dto';

/**
 Service
소프트웨어 개발 내의 공통 개념
서비스 인스턴스는 어플리케이션 전체에서 사용 가능
서비스는 컨트롤러 데이터의 유효성 체크를 하거나 DB에 아이템을 생성하는 등의 작업을 하는 부분을 처리
주로 DB 관련 로직 처리(CRUD)

Service를 Controller에서 이용하기 위한 방법 => DI(Dependency Injection)
생성자에서 Service를 가져와서 사용
 */

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(Board)
    private boardRepository: Repository<Board>,
  ) {}
  // getAllBoards(): Board[] {
  //   return this.boardRepository;
  // }
  async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    const { title, description, status } = createBoardDto;

    const board: Board = this.boardRepository.create({
      title,
      description,
      status,
    });
    await this.boardRepository.save(board);

    return board; // 어떤 Board가 Created인지 정보 Return
  }

  async getBoardById(id: number): Promise<Board> {
    const found = await this.boardRepository.findOneBy({
      id,
    });
    if (!found) {
      throw new NotFoundException(`해당하는 id : ${id}를 찾을 수 없습니다.`);
    }
    return found;
  }

  // getBoardById(id: string): Board {
  //   const found = this.boards.find((board) => board.id === id);
  //   if (!found) {
  //     throw new NotFoundException(`해당하는 id : ${id}를 찾을 수 없습니다.`);
  //   }
  //   return found;
  // }
  // deleteBoard(id: string): void {
  //   const found = this.getBoardById(id);
  //   this.boards = this.boards.filter((board) => board.id !== found.id);
  //   return;
  // }
  // updateBoardStatus(updateBoardStatusDto: UpdateBoardStatusDto): Board {
  //   const { id, status } = updateBoardStatusDto;
  //   const board = this.getBoardById(id);
  //   board.status = status;
  //   return board;
  // }
}
