import { IsEmail, IsString } from 'class-validator';

export class LoginDto {
  @IsEmail({
    message: 'Email is not valid',
  })
  readonly email: string;

  @IsString({
    message: 'Password is not valid',
  })
  readonly password: string;
}
