import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsEmail({
    message: 'Email is not valid',
  })
  readonly email: string;

  @IsString()
  readonly username: string;

  @IsString({
    message: 'Password is not valid',
  })
  readonly password: string;
}
