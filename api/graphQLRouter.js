import { userType, userResolvers } from './resources/user'
import { makeExecutableSchema } from 'graphql-tools'
import merge from 'lodash.merge'

const baseSchema = `
  schema {
    query: Query
    mutation: Mutation
  }
`
const schema = makeExecutableSchema({
  typeDefs: [
    baseSchema,
    userType,
    songType,
    playlistType
  ],
  resolvers: merge(
    {},
    userResolvers,
    songResolvers,
    playlistResolvers
  )
})


export const graphQLRouter = graphqlExpress((req) => ({
  schema,
  context: {
    req,
    user: req.user
  }
}))
