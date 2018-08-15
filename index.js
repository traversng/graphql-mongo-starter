require('dotenv').config()
require('./db')
import { GraphQLServer } from 'graphql-yoga'
import { getMe, updateMe }  from './api/user'

const typeDefs = `
type User {
  id: ID!
  username: String!
  createdAt: String!
  updatedAt: String!
}

input UpdatedUser {
  username: String!
}

type Query {
  getMe: User!
}

type Mutation {
  updateMe(input: UpdatedUser!): User!
}
`

const resolvers = {
	Query: {
		getMe
  },
  Mutation: {
    updateMe
  }
}

const server = new GraphQLServer({ typeDefs, resolvers })

const options = {
	port: 8000,
	endpoint: '/api',
	subscriptions: '/subscriptions',
	playground: '/playground'
}

server.start(options, ({ port, endpoint }) =>
	console.log(
		`Server started, listening on port ${port} for incoming requests. The graphql endpoint is ${endpoint}`
	)
)
