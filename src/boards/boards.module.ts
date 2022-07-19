import { Module } from '@nestjs/common';
import {
  getDataSourceToken,
  getRepositoryToken,
  TypeOrmModule,
} from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { DataSource } from 'typeorm';
import { Board } from './board.entity';
import { customBoardRepository } from './board.repository';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';

/*
Providers
프로바이더는 Nest의 기본 개념
기본 Nest 클래스는 서비스, 레포지토리, 팩토리, 헬퍼 등 프로바이더로 취급 가능
주입하는 것이 기본 아이디어

프로바이더를 사용하기 위해서는 Nest에 등록해서 사용
module 파일에서 등록
 */

@Module({
  imports: [TypeOrmModule.forFeature([Board]), AuthModule],
  controllers: [BoardsController],
  providers: [
    {
      provide: getRepositoryToken(Board),
      inject: [getDataSourceToken()],
      useFactory(dataSource: DataSource) {
        return dataSource.getRepository(Board).extend(customBoardRepository);
      },
    },
    BoardsService,
  ],
})
export class BoardsModule {}
