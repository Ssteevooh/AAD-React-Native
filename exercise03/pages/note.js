import React from 'react';
import { useQuery, gql } from '@apollo/client';

import Note from '../components/Note';

// the note query, which accepts an ID variable
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


const NotePage = props => {
    // Store the id found in the url as a variable
    const id = props.match.params.id;

    // Query hook, passing the id value as a variable
    const { loading, error, data } = useQuery(GET_NOTE, { variables: { id }});

    // If the data is loading, display a loading message
    if (loading) return <p>Loading...</p>;
    // If there is an error fetching the data, display an error message
    if (error) return <p>Error! Note not found</p>;

    // If the data is successful, display the data in our UI
    return <Note note={data.note} />;
};

export default NotePage;