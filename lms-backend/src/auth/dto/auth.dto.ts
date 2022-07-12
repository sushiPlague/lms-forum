import { IsEmail, IsString } from 'class-validator';

export class AuthDto {
  @IsString()
  _id: string;

  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  token: string;

  constructor(_id: string, email: string, username: string, token: string) {
    this._id = _id;
    this.email = email;
    this.username = username;
    this.token = token;
  }
}
