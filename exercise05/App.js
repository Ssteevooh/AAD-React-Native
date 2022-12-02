import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Screens from './src/screens/index';

export default function App() {
    return (
        <NavigationContainer>
            <Screens />
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
});
