import { ApolloClient, InMemoryCache } from '@apollo/client'
import { CreateMoviesDocument, MoviesDocument, DeleteMoviesDocument } from '@demo/codegen/src/gql/graphql'

const client = new ApolloClient({ uri: 'http://localhost:3000/graphql', cache: new InMemoryCache() })
await client.mutate({ mutation: DeleteMoviesDocument }); // delete all movies

const beforeMovies = await client.query({ query: MoviesDocument });
console.log(`Before: ${beforeMovies.data.movies.length} movies`)

await client.mutate({
    mutation: CreateMoviesDocument,
    variables: {
        "input": [
            {
                "actors": {
                    "create": [
                        {
                            "node": {
                                "name": "jacky"
                            }
                        }
                    ]
                },
                "title": "fallout"
            }
        ]
    }
})
// sleep for 1 second to wait for the mutation to finish
client.cache.evict({}) // evict all cache
const afterMovies = await client.query({ query: MoviesDocument });
console.log(`After: ${afterMovies.data.movies.length} movies`) // now there should be 1 movie
