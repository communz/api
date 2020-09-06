import { gql } from 'apollo-server-lambda';

export default gql`
  type Thread {
    id: String!
  }

  extend type Query {
    threads: [Thread]
  }

  extend type Mutation {
    createThread: Thread
  }

  extend type Subscription {
    newThread: Thread
  }
`;