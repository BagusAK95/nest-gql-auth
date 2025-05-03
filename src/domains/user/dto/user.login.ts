import { Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType()
export class UserLoginInput {
  @Field()
  identifier: string;

  @Field()
  password: string;
}

@ObjectType()
export class UserLoginOutput {
  @Field()
  token: string;
}