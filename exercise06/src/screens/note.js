import React from "react";
import { Text } from "react-native";
import { useQuery, gql} from '@apollo/client';

import Note from '../components/Note';
import Loading from '../components/Loading';

const GET_NOTE = gql`
    query note($id: ID!) {
        note(id: $id) {
            id
            createdAt
            content
            favoriteCount
            author {
                username
                id
                avatar
            }
        }
    }
`;

const NoteScreen = ({ route }) => {
    const { id } = route.params;
    const { loading, error, data } = useQuery(GET_NOTE, { variables: { id } });
    if (loading) return <Loading />;
    // if there's an error, display this message to the user
    if (error) return <Text>{JSON.stringify(error)}</Text>;
    // if successful, pass the data to the note component
    return <Note note={data.note} />;
   };

export default NoteScreen;