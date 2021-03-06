require('dotenv').config()
require('./db')
const User = require('./user');
const { GraphQLServer } = require('graphql-yoga')

const typeDefs = `
  type Query {
    hello(name: String): String!
  }
`

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || 'World'}`,
  },
}

const server = new GraphQLServer({ typeDefs, resolvers })

const options = {
  port: 8000,
  endpoint: '/api',
  subscriptions: '/subscriptions',
  playground: '/playground',
}

server.start(options, ({ port, endpoint }) =>
  console.log(
    `Server started, listening on port ${port} for incoming requests. The graphql endpoint is ${endpoint}`,
  ),
)
