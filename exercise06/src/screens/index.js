import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons'; 

import Feed from './feed';
import Favorites from './favorites';
import MyNotes from './mynotes'
import NoteScreen from './note'
import AuthLoading from './authloading';
import SignIn from './signin';
import Settings from './settings';

const Tab = createBottomTabNavigator();
const FeedStack = createStackNavigator();
const AuthStack = createStackNavigator();
const SettingsStack = createStackNavigator();
const AllStack = createStackNavigator();

const FeedStackScreen = () => {
    return (
        <FeedStack.Navigator>
            <FeedStack.Screen name="FeedS" component={Feed} options={{title: 'Feed'}} />
            <FeedStack.Screen name="NoteS" component={NoteScreen} options={{title: 'Note'}} />
        </FeedStack.Navigator>
    );
};

const SettingsStackScreen = () => {
    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen name='SettingsS' component={Settings} options={{title: 'Settings'}} />
        </SettingsStack.Navigator>
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
            <Tab.Screen 
                name='Settings'
                component={SettingsStackScreen}
                options={{
                    title: 'Settings',
                    headerShown: false,
                    tabBarIcon: ({}) => (
                        <AntDesign name="setting" size={24} color="black" />
                    ),
                }}
                />
        </Tab.Navigator>
    );
};