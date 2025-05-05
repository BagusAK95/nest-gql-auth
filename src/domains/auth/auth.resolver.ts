import { Args, Context, Mutation, Query, Resolver } from "@nestjs/graphql";
import { AuthSignInRequest, AuthSignInResponse } from "./dto/auth.signin";
import { KratosService } from "../kratos/kratos.service";
import { AuthSession } from "./dto/auth.session";

@Resolver(() => AuthSession)
export class AuthResolver {
  constructor(
    private readonly kratosService: KratosService
  ) {}

  @Query(() => AuthSession)
  async session(@Context() context: any): Promise<AuthSession> {
    const token = context.token
    const session = await this.kratosService.session(token)

    return {
      id: session.id,
      expiresAt: session.expires_at!,
      issuedAt: session.issued_at!,
    };
  }

  @Mutation(() => AuthSignInResponse)
  async signIn(@Args('input') input: AuthSignInRequest): Promise<AuthSignInResponse> {
    const { identifier, password } = input

    const login = await this.kratosService.passwordSignIn(identifier, password)
    return {
      token: login.session_token!,
    };
  }
}