const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const jwt = require('jsonwebtoken');
const helmet = require('helmet');
const cors = require('cors');
const depthLimit = require('graphql-depth-limit');
const { createComplexityLimitRule } = require('graphql-validation-complexity');
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

// Security middleware
// app.use(helmet());
// CORS middleware
app.use(cors());

// get the user info from a JWT
const getUser = token => {
  if (token) {
    try {
      // return the user information from the token
      return jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      // if there's a problem with the token, throw an error
      // throw new Error('Session invalid');
    }
  }
};

// Apollo Server setup
// updated to include `validationRules`
async function startServer(app) {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    validationRules: [depthLimit(5), createComplexityLimitRule(1000)],
    context: ({ req }) => {
      // get the user token from the headers
      const token = req.headers.authorization;
      // try to retreive a user with the token
      const user = getUser(token);
      // add the db models and the user to the context
      return { models, user };
    }
  });

  // apply the Apollo GraphQL middleware and set the path to /api
  await server.start();
  server.applyMiddleware({ app, path: '/api' });
  return server.graphqlPath;
};

app.listen(port, async () => {
  const path = await startServer(app);
  console.log(`Graphql Server running at http://localhost:${port}${path}`)
});