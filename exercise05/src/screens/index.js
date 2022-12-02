import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons'; 

import Favorites from './favorites';
import Feed from './feed';
import MyNotes from './mynotes'
import Note from './note'

const Tab = createBottomTabNavigator();
const FeedStack = createStackNavigator();

const FeedStackScreen = () => {
    return (
        <FeedStack.Navigator>
            <FeedStack.Screen name="Feed" component={Feed} />
            <FeedStack.Screen name="Note" component={Note} />
        </FeedStack.Navigator>
    );
};

export default function Screens() {
    return (
        <Tab.Navigator initialRouteName='Feed'>
            <Tab.Screen 
                name="Favorites"
                component={Favorites}
                options={{
                    title: 'Favorites',
                    tabBarIcon: ({}) => (
                        <AntDesign name="staro" size={24} color="black" />
                    ),
                }} 
            />
            <Tab.Screen
                name="Feed"
                component={FeedStackScreen}
                options={{
                    title: 'Feed',
                    headerShown: false,
                    tabBarIcon: ({}) => (
                        <AntDesign name="home" size={24} color="black" />
                    ),
                }} 
            />
            <Tab.Screen
                name="My Notes"
                component={MyNotes}
                options={{
                    title: 'My Notes',
                    tabBarIcon: ({}) => (
                    <AntDesign name="book" size={24} color="black" />
                    ),
                }} 
            />
        </Tab.Navigator>
    );
};