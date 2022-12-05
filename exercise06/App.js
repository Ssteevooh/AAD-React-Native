import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

import getEnvVars from './config';

import Screens from './src/screens/index';

const { API_URI } = getEnvVars();
const uri = API_URI;

const client = new ApolloClient({
    uri: uri,
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
