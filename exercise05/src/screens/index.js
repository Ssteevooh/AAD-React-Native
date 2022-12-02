import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Favorites from './favorites';
import Feed from './feed';
import MyNotes from './mynotes'
import Note from './note'

const Tab = createBottomTabNavigator();
const FeedStack = createStackNavigator();

const FeedStackScreen = () => {
    return (
        <FeedStack.Navigator>
            <FeedStack.Screen name="FeedS" component={Feed} />
            <FeedStack.Screen name="NoteS" component={Note} />
        </FeedStack.Navigator>
    );
};

export default function Screens() {
    return (
        <Tab.Navigator initialRouteName='Feed'>
            <Tab.Screen name="Favorites" component={Favorites} options={{ title: 'Favorites' }} />
            <Tab.Screen name="Feed" component={FeedStackScreen} options={{ title: 'Feed', headerShown: false }} />
            <Tab.Screen name="My Notes" component={MyNotes} options={{ title: 'My Notes' }} />
        </Tab.Navigator>
    );
};