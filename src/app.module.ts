import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { RootResolver } from './resolver';
import { UserModule } from './user/user.module';
import { PrismaService } from './prisma.service';
import { PrismaClient } from '@prisma/client';

@Module({
  imports: [
    UserModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, RootResolver, PrismaService, PrismaClient],
})
export class AppModule {}
