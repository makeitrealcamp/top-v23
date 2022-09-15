const book = require('./book');
const customer = require('./customer');

const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    ...book.query,
    ...customer.query,
  },

  Mutation: {
    ...book.mutation,
    ...customer.mutation,
  }
}

module.exports = resolvers
