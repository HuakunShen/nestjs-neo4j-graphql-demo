import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import neo4j from 'neo4j-driver';
import { envSchema } from 'src/utils/env';
import { Neo4jGraphQL } from '@neo4j/graphql';
import { readFileSync } from 'fs';
import { loadDocuments } from '@graphql-tools/load'
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader'
import { RootDir } from 'src/utils/constant';
import * as path from 'path';

@Module({
    imports: [
        GraphQLModule.forRootAsync<ApolloDriverConfig>({
            driver: ApolloDriver,
            useFactory: async () => {
                const { NEO4J_URI, NEO4J_USERNAME, NEO4J_PASSWORD } = envSchema.parse(process.env);

                const driver = neo4j.driver(
                    NEO4J_URI,
                    neo4j.auth.basic(NEO4J_USERNAME, NEO4J_PASSWORD)
                );

                const gqlcontent = readFileSync(path.join(RootDir, 'src/graphql/schema.gql'));
                // console.log(gqlcontent.toString());

                const neoSchema = new Neo4jGraphQL({
                    typeDefs: gqlcontent.toString(),
                    driver,
                });
                const schema = await neoSchema.getSchema();

                return {
                    schema,
                    plugins: [ApolloServerPluginLandingPageLocalDefault()],
                    playground: false
                }
            }
        }),
    ]
})
export class GraphqlModule { }
