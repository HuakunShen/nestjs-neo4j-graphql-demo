import { toGraphQLTypeDefs } from "@neo4j/introspector"
import neo4j from "neo4j-driver"

import fs from 'fs';

const driver = neo4j.driver("bolt://10.6.6.180:7687", neo4j.auth.basic("neo4j", "password"));

const sessionFactory = () => driver.session({ defaultAccessMode: neo4j.session.READ });

// We create a async function here until "top level await" has landed
// so we can use async/await
async function main() {
    const typeDefs = await toGraphQLTypeDefs(sessionFactory);
    fs.writeFileSync("schema.graphql", typeDefs);
    await driver.close();
}
main();