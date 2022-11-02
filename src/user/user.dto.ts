import { isEmpty, IsNotEmpty, isEmail, IsEmail } from 'class-validator';

export class MessageDTO {
  message: string;
}

export class LoginDTO {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}

export class UserDTO {
  @IsEmail()
  email: string;

  password: string;
}
