import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './user.model';
import { UserService } from './user.service';

@Resolver((of) => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query((returns) => String)
  login(): string {
    return 'Hello World! User';
  }

  @Mutation((returns) => User)
  async createUser(@Args('email') email: string) {
    return await this.userService.createUser(email);
  }
}
