import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class RootResolver {
  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }
}
