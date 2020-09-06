import { mergeDeep } from 'apollo-utilities';
import { gql } from 'apollo-server-lambda';

import threadResolvers from './thread/resolvers';
import threadTypeDefs from './thread/typeDefs';

const schemaTypeDefs = gql`
  type Query
  type Mutation
  type Subscription
`;

export const typeDefs = [schemaTypeDefs, threadTypeDefs];
export const resolvers = mergeDeep(threadResolvers);
