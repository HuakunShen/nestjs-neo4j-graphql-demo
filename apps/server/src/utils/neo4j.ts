import neo4j from 'neo4j-driver';
import { envSchema } from './env';
import { OGM } from '@neo4j/graphql-ogm';
import { RootDir } from './constant';
import * as path from 'path';
import * as fs from 'fs';

export const { NEO4J_URI, NEO4J_USERNAME, NEO4J_PASSWORD } = envSchema.parse(
  process.env,
);
export const neo4jDriver = neo4j.driver(
  NEO4J_URI,
  neo4j.auth.basic(NEO4J_USERNAME, NEO4J_PASSWORD),
);

const typedefPath = path.join(RootDir, 'src/graphql/schema.gql');
export const typeDefs = fs.readFileSync(typedefPath).toString();
export const ogm = new OGM({ typeDefs, driver: neo4jDriver });
ogm.init();
export const User = ogm.model('User');
