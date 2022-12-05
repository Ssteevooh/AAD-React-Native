import React from "react";
import { Text, ScrollView, StyleSheet } from "react-native";

const Note = ({ note }) => {
    return (
        <ScrollView>
            <Text>
                <Text style={styles.noteview}>
                    {note.content} - Note by {note.author.username} / Published {' '}
                    {new Date(note.createdAt).toLocaleDateString()}</Text>
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