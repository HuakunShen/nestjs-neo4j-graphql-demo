> NestJS Neo4j GraphQL Demo

Turborepo monorepo is used because there are serveral packages that are used in this project.
And NestJS insist on using old commonjs modules, while I like to use ESM modules for other packages.

If any typescript in in NestJS project folder cannot be compiled (such as codegen), the entire server won't run even if the server code itself is correct. This is probably because `tsc` is used to compile the entire project, and it fails when it encounters a typescript file that cannot be compiled.

So I have to isolate NestJS project from other packages.

## Folder Structure

- [apps/server](./apps/server/)
  - GraphQL server using NestJS and Neo4j
- [packages/codegen](./packages/codegen/)
  - Generate TypeScript types and client code from GraphQL server introspection

## Prerequisites

Consider installing `bun` to run the TypeScript code directly without compiling or worrying about module types.

## Start Server

```bash
pnpm install
cd apps/server
cp .env.template .env
# fill in the .env file
pnpm start
```

## Codegen

> Make sure the server is running before running the codegen
> because codegen runs schema introspection on the server

```bash
cd packages/codegen
pnpm codegen
```
