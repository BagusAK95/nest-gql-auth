import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloFederationDriver, ApolloFederationDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault, ApolloServerPluginLandingPageProductionDefault } from '@apollo/server/plugin/landingPage/default';
import { ApolloServerPluginInlineTrace } from '@apollo/server/plugin/inlineTrace';
import { AuthModule } from './domains/auth/auth.module';
import { KratosModule } from './domains/kratos/kratos.module';
import { join } from 'path';

@Module({
  imports: [
    KratosModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true
    }),
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      context: ({ req }) => ({ 
        token: req.headers.authorization
      }),
      autoSchemaFile: {
        federation: 2,
        path: join(process.cwd(), 'src/schema.graphql'),
      },
      sortSchema: true,
      playground: false,
      plugins: [
        process.env.NODE_ENV === 'production'
        ? ApolloServerPluginLandingPageProductionDefault()
        : ApolloServerPluginLandingPageLocalDefault(),
        ApolloServerPluginInlineTrace()
      ],
    }),
  ],
})
export class AppModule {}