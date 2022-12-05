import React from 'react';
import { FlatList, View, StyleSheet, TouchableOpacity } from 'react-native';

import Note from './Note';

const notes = [
    { id: 0, content: 'Giant Steps' },
    { id: 1, content: 'Tomorrow Is The Question' },
    { id: 2, content: 'Tonight At Noon' },
    { id: 3, content: 'Out To Lunch' },
    { id: 4, content: 'Green Street' },
    { id: 5, content: 'In A Silent Way' },
    { id: 6, content: 'Lanquidity' },
    { id: 7, content: 'Nuff Said' },
    { id: 8, content: 'Nova' },
    { id: 9, content: 'The Awakening' }
];

const NoteFeed = props => {
    return (
        <View>
            <FlatList
                data={notes}
                keyExtractor={({ id }) => id.toString()}
                ItemSeparatorComponent={() => <View style={styles.separator}/>}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('Note', {
                            id: item.id
                        })
                    }
                >
                    <View style={styles.feedview}>
                        <Note note={item}/>
                    </View>
                </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default NoteFeed;

const styles = StyleSheet.create({
    separator: {
        height: 1,
        width: "100%",
        backgroundColor: "#ced0ce"
    },
    feedview: {
        height: 100,
        overflow: "hidden",
        marginBottom: 10
    }
});