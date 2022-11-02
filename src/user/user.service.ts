import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/PrismaService';
import { User } from './user.model';
@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}
  async createUser(email: string): Promise<User> {
    const resp = await this.prismaService.user.create({
      data: { email, password: 'hello world' },
    });
    console.log(resp);
    return resp;
  }

  async getUsers() {
    return this.prismaService.user.findMany();
  }
}
