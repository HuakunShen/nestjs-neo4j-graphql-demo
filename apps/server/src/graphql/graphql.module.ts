import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { neoSchema } from 'src/utils/graphql';

@Module({
  imports: [
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: async () => {
        const schema = await neoSchema.getSchema();
        return {
          schema,
          plugins: [ApolloServerPluginLandingPageLocalDefault()],
          playground: false,
          context: ({ req }) => ({
            token: req.headers.authorization,
          }),
        };
      },
    }),
  ],
  providers: [],
})
export class GraphqlModule {}
