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

파이프는 @Injectable() 데코레이터로 주석이 달린 클래스
data transformation과 data validation을 위해 사용
컨트롤러 경로 처리기에 의해 처리되는 인수에 의해 작동
메소드가 호출 되기 직전에 파이프를 삽입하고 파이프는 메소드로 향하는 인수를 수신하고 이에 대해 작동

Data Transformation
입력 데이터를 원하는 형식으로 변환
숫자를 받길 원하는데 문자열 형식으로 온다면 파이프에서 숫자로 변환해준다.

Data Validation
입력 데이터를 평가하고 유효한 경우 변경되지 않은 상태로 전달.
그렇지 않으면 데이터가 올바르지 않을 때 예외 발생!!
Ex. 비밀번호는 최소 8자 이상이어야 하는데 6자가 들어왔다. => 예외처리

파이프는 변환 및 valid 둘 다 해준다.

## 파이프 사용법
Handler level Pipe
@UsePipes() 데코레이터를 이용해서 사용
이 파이프는 **모든 파라미터**에 적용 된다.

Parameter Level Pipe
**특정 파라미터**에만 적용이 되는 파이프.

Global level Pipe
클라이언트에서 들어오는 모든 요청에 적용
가장 상단 영역인 main.ts에 넣어준다.

ValidationPipe, ParseIntPipe, ParseBoolPipe, ParseArrayPipe, ParseUUIDPipe, DefaultValuePipe

파이프를 이용한 유효성 체크
class-validator, class-transformer

*/
bootstrap();
