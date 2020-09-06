import { ApolloServer } from 'apollo-server-lambda';

import { resolvers, typeDefs } from './graphql/schema';

const apolloServer = new ApolloServer({ resolvers, typeDefs });

export const handler = apolloServer.createHandler();