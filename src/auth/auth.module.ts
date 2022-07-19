import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import {
  getDataSourceToken,
  getRepositoryToken,
  TypeOrmModule,
} from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { User } from './user.entity';
import { customUserRepository } from './user.repository';

// authModule에 JWT 등록

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'Secret1234',
      signOptions: {
        expiresIn: 60 * 60,
      },
    }),
    TypeOrmModule.forFeature([User]),
  ],
  providers: [
    {
      provide: getRepositoryToken(User),
      inject: [getDataSourceToken()],
      useFactory(dataSource: DataSource) {
        return dataSource.getRepository(User).extend(customUserRepository);
      },
    },
    AuthService,
  ],
  controllers: [AuthController],
})
export class AuthModule {}

/*
JWT의 구조
Header
토큰에 대한 메타데이터 포함
(타입, 해싱 알고리즘 SHA256, RSA..)

Payload
유저 정보(issuer), 만료 기간(expiration time), 주제 (subject)

Verify Signature
토근이 보낸 사람에 의해 서명되었으며 어떤 식으로든 변경되지 않았는지 확인하는 데 사용되는 서명
헤더 및 페이로드 세그먼트, 서명 알고리즘, 비밀 또는 공개 키를 사용하여 생성

JWT 사용 흐름

유저 로그인 -> 토큰 생성 -> 토큰 보관

유저가 요청 시 Header에 토큰을 넣어서 보낸다.
서버는 JWT를 이용해서 Token을 다시 생성한 후 두 개를 비교
요청에서 온 header + payload + 서버가 갖고 있는 Secret key를 통해 signature 생성해서 비교
*/
