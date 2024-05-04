import { Neo4jGraphQL } from '@neo4j/graphql';
import { neo4jDriver, typeDefs } from './neo4j';
import { authResolvers } from './auth.resolver';

export const neoSchema = new Neo4jGraphQL({
  typeDefs: typeDefs,
  driver: neo4jDriver,
  resolvers: authResolvers,
  features: {
    authorization: {
      key: 'huakun',
    },
  },
});
