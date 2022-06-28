import { Controller, Get } from '@nestjs/common';
import { Board } from './board.model';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
  // 접근 제한자로 생성하면 바로 프로퍼티로 사용 가능
  constructor(private boardsService: BoardsService) {}

  // 꼭 데코레이터도 함께 작성
  @Get('/')
  getAllBoard(): Board[] {
    return this.boardsService.getAllBoards();
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
*/
