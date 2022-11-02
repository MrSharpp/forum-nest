import { Field, ObjectType } from '@nestjs/graphql';
@ObjectType()
export class User {
  @Field()
  id: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  password?: string;
}
