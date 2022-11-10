const express = require('express');
const { ApolloServer } = require('apollo-server-express');
require('dotenv').config();

const db = require('./db');
const models = require('./models');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

// Run the server on a port specified in our .env file or port 4000
const port = process.env.PORT || 4000;
const DB_HOST = process.env.DB_HOST;

const app = express();

db.connect(DB_HOST);

// Apollo Server setup
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => {
    // add the db models to the context
    return { models };
  }
});


// Apply the Apollo GraphQL middleware and set the path to /api
// To start the server we either need to wrap middleware in a async function or wait for the promise.
server.start().then(res => {
  server.applyMiddleware({ app, path: '/api' });

  app.listen({ port }, () =>
    console.log(`GraphQL Server running at http://localhost:${port}${server.graphqlPath}`)
  )});
