import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, IsString } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
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
