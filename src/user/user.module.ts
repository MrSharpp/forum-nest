import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { PrismaService } from 'src/PrismaService';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, UserResolver, PrismaService],
})
export class UserModule {}
