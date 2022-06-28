import { Injectable } from '@nestjs/common';
import { Board } from './board.model';

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
  private boards: Board[] = [];

  getAllBoards(): Board[] {
    return this.boards;
  }
}
