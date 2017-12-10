const { makeExecutableSchema } = require('graphql-tools')
const resolvers = require('./resolvers')

// Define your types here.
const typeDefs = `
  type User {
    _id: Int!
    firstName: String!
    lastName: String!
  }
  
  type Query {
    allUsers: [User]
  }
`

// Generate the schema object from your types definition.
module.exports = makeExecutableSchema({ typeDefs, resolvers })