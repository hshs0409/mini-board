import { User } from './user.entity';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { Repository } from 'typeorm';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import * as bcrypt from 'bcryptjs';

export interface UserRepository extends Repository<User> {
  this: Repository<User>;
  createUser(authCredentialsDto: AuthCredentialsDto): Promise<User>;
}

export const customUserRepository: Pick<UserRepository, 'createUser'> = {
  async createUser(authCredentialsDto: AuthCredentialsDto): Promise<User> {
    const { username, password } = authCredentialsDto;
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hashSync(password, saltRounds); // salt 값과 함께 해싱

    const user: User = this.create({
      username,
      password: hashedPassword,
    });

    try {
      await this.save(user);
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('Existing username');
      } else {
        throw new InternalServerErrorException();
      }
    }
    return user; // 어떤 user가 Created인지 정보 Return
  },
};

/*
hash만 하게 되면 rainbow table을 통해 비밀번호를 유추하기 쉽다.
salt + hash를 사용해야 해당 방법 방지 가능 => 완벽하지는 않지만 훨씬 안정적
*/
