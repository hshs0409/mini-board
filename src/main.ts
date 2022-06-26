import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

/*
EsLint => 특정한 규칙을 가지고 코드를 깔끔하게 짤 수 있도록 도와주는 라이브러리, 타입스크립트를 사용하는 가이드 라인 제시
Prettier => 주로 코드 형식을 맞추는데 사용, 포맷터 역할
nest-cli.json => nest 프로젝트 설정 json 파일
tsconfig => 타입스크립트 컴파일 설정
tsconfig.build => build할 때 필요한 설정 파일 exclude에서 제외할 파일 설정 가능
*/
bootstrap();
