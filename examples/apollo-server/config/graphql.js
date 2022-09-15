const { ApolloServer } = require('apollo-server-express')

const typeDefs = require('../graphql/typeDefs')
const resolvers = require('../graphql/resolvers')

async function graphqlConfig(app) {
  try {
    const apollo = new ApolloServer({
      typeDefs,
      resolvers,
    })

    await apollo.start()
    apollo.applyMiddleware({ app })

    console.log('GraphQL server started')
  } catch (error) {
    console.log('Error starting GraphQL server', error)
    process.exit(1)
  }
}

module.exports = graphqlConfig
