import React from "react";
import { Text, ScrollView, StyleSheet } from "react-native";

const Note = ({ note }) => {
    return (
        <ScrollView>
            <Text>
                <Text style={styles.noteview}>{note.content}</Text>
            </Text>
        </ScrollView>
    );
};

export default Note;

const styles = StyleSheet.create({
    noteview: {
        padding: 10
    },
});