import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { User } from './user.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // 요청이 컨트롤러에 있는 핸들러로 들어왔을 때 Dto에 있는 유효성 조건에 맞게 체크를 해주려면 Validation Pipe를 넣어주어야 한다.
  @Post('/signup')
  signUp(
    @Body(ValidationPipe) authcredentialsDto: AuthCredentialsDto,
  ): Promise<User> {
    return this.authService.signUp(authcredentialsDto);
  }

  @Post('/signin')
  signIn(
    @Body(ValidationPipe) authcredentialsDto: AuthCredentialsDto,
  ): Promise<string> {
    return this.authService.signIn(authcredentialsDto);
  }
}
