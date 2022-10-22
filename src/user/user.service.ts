import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private message: string;
  constructor() {
    this.message = 'Hello World!';
  }
  getHello(): string {
    return this.message;
  }
  setHello(message: string): void {
    this.message = message;
  }
}
