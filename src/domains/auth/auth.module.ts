import { Module } from "@nestjs/common";
import { AuthResolver } from "./auth.resolver";
import { KratosModule } from "../kratos/kratos.module";

@Module({
  imports: [
    KratosModule
  ],
  providers: [
    AuthResolver
  ],
})
export class AuthModule {}