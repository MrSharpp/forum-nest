import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './modules/auth/user.controller';
import { DatabaseModule } from './database/database.module';
import { databaseProviders } from './database/database.providers';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [GraphQLModule.forRoot({}), DatabaseModule],
  controllers: [AppController, UserController],
  providers: [AppService, ...databaseProviders],
})
export class AppModule {}
