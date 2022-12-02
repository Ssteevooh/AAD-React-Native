import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Note = () => {
    return (
        <View style={styles.container}>
            <Text>This is a note!</Text>
        </View>
    );
};

export default Note;

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
});