// Construct a schema, using GraphQL's schema language
const { gql } = require('apollo-server-express');

module.exports = gql`
  scalar DateTime

  type Note {
    id: ID
    content: String
    author: String
    disabled: Boolean
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    notes: [Note]
    note(id: ID!): Note!
    allNote: [Note]
  }

  type Mutation {
    newNote(content: String!): Note!
    updateNote(id: ID!, content: String!): Note!
    deleteNote(id: ID!): Boolean!
  }
`;