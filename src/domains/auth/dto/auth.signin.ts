import { Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType()
export class AuthSignInRequest {
  @Field()
  identifier: string;

  @Field()
  password: string;
}

@ObjectType()
export class AuthSignInResponse {
  @Field()
  token: string;
}