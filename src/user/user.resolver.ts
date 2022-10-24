import { Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => String)
  sayHelloUser(): string {
    return 'Hello World! User';
  }

  @Query(() => String)
  async getUsers() {
    const users = await this.userService.getUsers();
    return users.toString();
  }
}
