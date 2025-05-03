import { Args, Mutation, Resolver, Query } from "@nestjs/graphql";
import { UserLoginInput, UserLoginOutput } from "./dto/user.login";
import { User } from "./user.entity";

@Resolver(() => User)
export class UserResolver {
  @Query(() => [User])
  async users(): Promise<User[]> {
    return [];
  }

  @Mutation(() => UserLoginOutput)
  async login(@Args('input') input: UserLoginInput): Promise<UserLoginOutput> {
    return {
      token: 'test',
    };
  }
}