const { makeExecutableSchema } = require('graphql-tools')
const resolvers = require('./resolvers')

// Define your types here.
const typeDefs = `
  type User {
    _id: Int!
    firstName: String!
    lastName: String!
  }

  type Mutation {
    createUser(firstName: String!, lastName: String!): User 
  }
  
  type Query {
    allUsers: [User!]!
    user(_id: Int!): User!  
  }
`

// Generate the schema object from your types definition.
module.exports = makeExecutableSchema({ typeDefs, resolvers })