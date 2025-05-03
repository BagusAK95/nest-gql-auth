import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => ID)
  id: string;

  @Field()
  email: string;

  @Field()
  phone: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;
}
