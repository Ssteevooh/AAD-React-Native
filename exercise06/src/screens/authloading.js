import React, { useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import { useNavigation } from '@react-navigation/native';

import Loading from '../components/Loading';

const AuthLoadingScreen = () => {
    const navigation = useNavigation();
    const checkLoginState = async () => {
        // retrieve the value of the token
        const userToken = await SecureStore.getItemAsync('token');
        console.log(userToken)
        // if the token exist then navigate to'AuthenticatedScreens'
        // else navigate to'UnAuthenticatedScreens'
        userToken ? navigation.navigate('AuthenticatedScreens') :
            navigation.navigate('UnAuthenticatedScreens')
    };
    // call checkLoginState as soon as the component mounts
    useEffect(() => {
        checkLoginState();
    });
    return <Loading />;
};

export default AuthLoadingScreen;