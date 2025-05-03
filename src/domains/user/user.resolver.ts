import { Args, Mutation, Resolver, Query } from "@nestjs/graphql";
import { UserLoginInput, UserLoginOutput } from "./dto/user.login";
import { User } from "./user.entity";
import { KratosService } from "../kratos/kratos.service";

@Resolver(() => User)
export class UserResolver {
  constructor(
    private readonly kratosService: KratosService
  ) {}

  @Query(() => [User])
  async users(): Promise<User[]> {
    return [];
  }

  @Mutation(() => UserLoginOutput)
  async login(@Args('input') input: UserLoginInput): Promise<UserLoginOutput> {
    const { identifier, password } = input

    const login = await this.kratosService.passwordLogin(identifier, password)
    return {
      token: login.session_token!,
    };
  }
}