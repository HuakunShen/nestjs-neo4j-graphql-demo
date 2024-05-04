import { GraphQLClient } from 'graphql-request'
import { getSdk } from './src/gql/req' // THIS FILE IS THE GENERATED FILE

async function main() {
    const client = new GraphQLClient('http://localhost:3000/graphql')
    const sdk = getSdk(client)
    const res = await sdk.CreateMovies({
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
    })
    console.log(res)

}
await main()