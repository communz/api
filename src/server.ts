import { ApolloServer } from 'apollo-server-lambda';

import { resolvers, typeDefs } from './graphql/schema';

console.log(resolvers, typeDefs)
const apolloServer = new ApolloServer({ resolvers, typeDefs });

export const handler = apolloServer.createHandler();