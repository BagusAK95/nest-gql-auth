import { Module } from "@nestjs/common";
import { UserResolver } from "./user.resolver";
import { KratosModule } from "../kratos/kratos.module";

@Module({
  imports: [
    KratosModule
  ],
  providers: [
    UserResolver
  ],
})
export class UserModule {}