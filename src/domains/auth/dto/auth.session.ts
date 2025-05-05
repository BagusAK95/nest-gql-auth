import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class AuthSession {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  expiresAt: string;

  @Field(() => String)
  issuedAt: string;
}