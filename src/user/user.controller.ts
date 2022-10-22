import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { Message } from './user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getHello(): string {
    return this.userService.getHello();
  }

  @Post()
  setHello(@Body() body: Message): void {
    this.userService.setHello(body.message);
  }
}
