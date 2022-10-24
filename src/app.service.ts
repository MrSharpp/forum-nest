import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaClient) {}

  async getHello(): Promise<string> {
    console.log(
      await this.prisma.user.create({
        data: {
          email: 'aasdf',
          password: 'aaa',
        },
      }),
    );
    return 'Hello World';
  }
}
