import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Favorites = () => {
    return (
        <View style={styles.container}>
            <Text>Favorites</Text>
        </View>
    );
};

export default Favorites;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});