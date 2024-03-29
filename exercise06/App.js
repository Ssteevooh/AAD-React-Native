import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from 'apollo-link-context';
import * as SecureStore from 'expo-secure-store';

import getEnvVars from './config';

import Screens from './src/screens/index';
const { API_URI } = getEnvVars();

const uri = API_URI;
const httpLink = createHttpLink({ uri: uri });

// return the headers to the context
const authLink = setContext(async (_, { headers }) => {
    return {
        headers: {
            ...headers,
            authorization: (await SecureStore.getItemAsync('token')) || ''
        }
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

export default function App() {
    return (
        <ApolloProvider client={client}>
            <NavigationContainer>
                <Screens />
            </NavigationContainer>
        </ApolloProvider>
    );
};
