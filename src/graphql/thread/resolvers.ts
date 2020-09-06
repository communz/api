export default {
  Query: {
    threads: () => [{ id: 'hello' }],
  },
  Subscription: {
    newThread: () => ({}),
  },
  Mutation: {
    createThread: () => ({}),
  },
};