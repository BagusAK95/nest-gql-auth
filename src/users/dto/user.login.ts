import { Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType()
export class UserLoginInput {
  @Field()
  email: string;

  @Field()
  password: string;
}

@ObjectType()
export class UserLoginOutput {
  @Field()
  token: string;
}