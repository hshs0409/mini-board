import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardsModule } from './boards/boards.module';
import { typeORMConfig } from './configs/typeorm.config';
import { AuthModule } from './auth/auth.module';

/*
Nest JS 모듈이란?

Module 데코레이터 주석이 달린 클래스. 
Nest가 애플리케이션 구조를 구성하는데 사용하는 메타 데이터를 제공

모듈은 밀접하게 관련된 기능 집합으로 구성 요소를 구성하는 효과적인 방법 (기능별로 분리)
같은 기능에 해당하는 것들은 하나의 모듈 폴더 안에 넣어서 사용

모듈은 기본적으로 싱글 톤이므로 여러 모듈간에 쉽게 공급자의 동일한 인스턴스 공유 가능

데코레이터는 클래스에 함수 기능을 추가할 수 있다.
클래스 위의 함수이고, 클래스를 위해 움직인다.
 */
@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig), BoardsModule, AuthModule],
})
export class AppModule {}
