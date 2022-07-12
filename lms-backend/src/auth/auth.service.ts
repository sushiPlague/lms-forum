import * as bcrypt from 'bcrypt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { AuthDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByEmail(email);

    if (user) {
      const isValid = await bcrypt.compare(pass, user.password);

      if (!isValid) {
        throw new UnauthorizedException();
      }

      const { password, ...result } = user;

      return result;
    }

    return null;
  }

  async login(user: any) {
    const validUser = await this.usersService.findOneByEmail(user.email);

    if (!validUser) {
      throw new UnauthorizedException();
    }

    const payload = {
      sub: validUser._id,
      email: validUser.email,
      username: validUser.username,
    };

    return new AuthDto(
      validUser._id.toString(),
      validUser.email,
      validUser.username,
      this.jwtService.sign(payload),
    );
  }
}
