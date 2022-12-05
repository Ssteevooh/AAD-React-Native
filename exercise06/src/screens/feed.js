import React from 'react';
import { Text } from 'react-native';
import { useQuery, gql} from '@apollo/client';

import NoteFeed from '../components/NoteFeed';

const GET_NOTES = gql`
    query notes {
        notes {
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

const Feed = props => {
    const { loading, error, data } = useQuery(GET_NOTES);
    // if the data is loading, our app will display a loading indicator
    if (loading) return <Text>Loading</Text>;
     // if there is an error fetching the data, display an error message
    if (error) return <Text>{JSON.stringify(error)}</Text>;
     // if the query is successful and there are notes, return the feed of notes
    return <NoteFeed notes={data.notes} navigation={props.navigation}/>;
};

export default Feed;