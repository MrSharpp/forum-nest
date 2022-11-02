import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/PrismaService';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}
  async createUser(email: string): Promise<string> {
    const resp = await this.prismaService.user.create({
      data: { email, password: 'aljak@d' },
    });
    console.log(resp);
    return 'created account';
  }

  async getUsers() {
    return this.prismaService.user.findMany();
  }
}
