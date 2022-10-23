import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class UserResolver {
  @Query(() => String)
  sayHelloUser(): string {
    return 'Hello World! User';
  }
}
