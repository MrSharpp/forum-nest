import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/PrismaService';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}
  createUser(): object {
    return { msg: 'Creating user account' };
  }

  async getUsers() {
    return this.prismaService.user.findMany();
  }
}
