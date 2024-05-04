
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:3000/graphql",
  documents: "operations/**/*.gql",
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: []
    },
    'src/gql/req.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request'],
      config: {
        rawRequest: true
      },
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;