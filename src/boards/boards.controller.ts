import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Board, BoardStatus } from './board.entity';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardStatusDto } from './dto/update-board-status-dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';

@Controller('boards')
export class BoardsController {
  // 접근 제한자로 생성하면 바로 프로퍼티로 사용 가능
  constructor(private boardsService: BoardsService) {}

  // 꼭 데코레이터도 함께 작성
  @Get('/')
  getAllBoard(): Promise<Board[]> {
    return this.boardsService.getAllBoards();
  }

  @Post('/')
  @UsePipes(ValidationPipe)
  createBoard(@Body() createBoardDto: CreateBoardDto): Promise<Board> {
    return this.boardsService.createBoard(createBoardDto);
  }

  @Get('/:id')
  getBoardById(@Param('id') id: number): Promise<Board> {
    // 여러가지 Param가 존재하면 배열로 들어온다.
    return this.boardsService.getBoardById(id);
  }

  @Delete('/:id')
  deleteBoard(@Param('id', ParseIntPipe) id): Promise<void> {
    // ParseIntPipe : parameter check해주는 Pipe
    return this.boardsService.deleteBoard(id);
  }

  @Patch('/:id/status')
  updateBoardStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('status', BoardStatusValidationPipe) status: BoardStatus, // 파라미터 레벨에서 파이프 사용
  ) {
    const updateBoardStatusDto: UpdateBoardStatusDto = { id, status };
    return this.boardsService.updateBoardStatus(updateBoardStatusDto);
  }
}

/*
Controller
컨트롤러는 들어오는 요청을 처리하고 클라이언트에 응답을 반환합니다.
url을 가져오고 함수를 실행하는 역할
요청을 처리하고 결과값을 리턴해주는 역할

Handler
핸들러는 HTTP METHOD를 표현

express의 라우터와 비슷

컨트롤러를 비즈니스 로직과 구분짓고 싶어하기 때문에 서비스가 있다.

DTO(Data Transfer Object)
계층 간 데이터 교환을 위한 객체

DB에서 데이터를 얻어 Service나 Controller 등으로 보낼 때 사용하는 객체

DTO는 데이터가 네트워크를 통해 전송되는 방법을 정의하는 객체
interface나 class를 이용해 정의

DTO를 사용하는 이유
- 데이터 유효성을 체크하는데 효율적, 더 안정적인 코드로 만들어준다.
*/
