// import { GraphQLClient } from 'graphql-request'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { getSdk } from './src/gql/req' // THIS FILE IS THE GENERATED FILE
import { CreateMoviesDocument } from './src/gql/graphql'


async function main() {
    // const client = new GraphQLClient('http://localhost:3000/graphql')
    // client.request(CreateMoviesDocument)
    const client = new ApolloClient({ uri: 'http://localhost:3000/graphql', cache: new InMemoryCache() })
    client.mutate({
        mutation: CreateMoviesDocument,
        variables: {
            "input": [
                {
                    "actors": {
                        "create": [
                            {
                                "node": {
                                    "name": "jackylai"
                                }
                            }
                        ]
                    },
                    "title": "fallout2"
                }
            ]
        }
    }).then(res => { console.log(res) });
    // const sdk = getSdk(client)
    // const res = await sdk.CreateMovies({
    //     "input": [
    //         {
    //             "actors": {
    //                 "create": [
    //                     {
    //                         "node": {
    //                             "name": "jacky"
    //                         }
    //                     }
    //                 ]
    //             },
    //             "title": "fallout"
    //         }
    //     ]
    // })
    // console.log(res)

}
main()