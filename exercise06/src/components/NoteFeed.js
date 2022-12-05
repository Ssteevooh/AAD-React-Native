import React from 'react';
import { FlatList, View, StyleSheet, TouchableOpacity } from 'react-native';

import Note from './Note';

const NoteFeed = props => {
    return (
        <View>
            <FlatList
                data={props.notes}
                keyExtractor={({ id }) => id.toString()}
                ItemSeparatorComponent={() => <View style={styles.separator}/>}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('NoteS', {
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