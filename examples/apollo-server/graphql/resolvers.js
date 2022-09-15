const book = require('./book');

const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    ...book.query,
  },

  Mutation: {
    ...book.mutation,
  }
}

module.exports = resolvers
