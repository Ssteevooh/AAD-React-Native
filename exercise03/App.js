import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

// Import global styles
import GlobalStyle from './components/GlobalStyle';

// Import routes
import Pages from './pages';

// configure our API URI & cache
const uri = process.env.API_URI;
const cache = new InMemoryCache();

// create the Apollo client
const client = new ApolloClient({
    uri,
    cache,
    connectToDevTools: true
  });

// Return the content of the application
const App = () => (
    <ApolloProvider client={client}>
        <GlobalStyle />
        <Pages />
    </ApolloProvider>
);

// Render application within the element with an ID of root
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)