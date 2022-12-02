import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const Feed = props => {
    return (
        <View style={styles.container}>
            <Text>Feed</Text>
            <Button
                title='Keep reading'
                onPress={() => props.navigation.navigate('Note')}
            />
        </View>
    );
};

export default Feed;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});