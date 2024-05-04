// Run this script with bun gql-req.ts
// Otherwise the import statement will not work
import { GraphQLClient } from "graphql-request";
import { getSdk } from "@demo/codegen/src/gql/req"; // THIS FILE IS THE GENERATED FILE

const client = new GraphQLClient("http://localhost:3000/graphql");
const sdk = getSdk(client);
await sdk.DeleteMovies(); // delete all movies
let movies = (await sdk.Movies()).data.movies;
console.log(`Before: ${movies.length} movies`);
const res = await sdk.CreateMovies({
  input: [
    {
      actors: {
        create: [
          {
            node: {
              name: "jacky",
            },
          },
        ],
      },
      title: "fallout",
    },
  ],
});
console.log(res.data);
movies = (await sdk.Movies()).data.movies;
console.log(`After: ${movies.length} movies`);
