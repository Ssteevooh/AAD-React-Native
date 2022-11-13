import React from 'react';
import { useQuery, gql } from '@apollo/client';

import Button from '../components/Button';
import NoteFeed from '../components/NoteFeed';

const GET_NOTES = gql`
    query noteFeed($cursor: String) {
        noteFeed(cursor: $cursor) {
            cursor
            hasNextPage
            notes {
                id
                createdAt
                content
                favoriteCount
                disabled
                author {
                    username
                    id
                    avatar
                }
            }
        }
    }
`;

const Home = () => {
    // Query hook
    const { data, loading, error, fetchMore } = useQuery(GET_NOTES);

    // If the data is loading, display a loading message
    if (loading) return <p>Loading...</p>;
    // If there is an error fetching the data, display an error message
    if (error) return <p>Error!</p>;

    // If the data is successful, display the data in our UI
    return <NoteFeed notes={data.noteFeed.notes} />;
};

export default Home;