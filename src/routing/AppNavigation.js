import 'react-native-gesture-handler';
import * as React from 'react';

import LoginScreen from '../components/LoginScreen';
import SignupScreen from '../components/SignupScreen';
import ProfileScreen from '../components/ProfileScreen';
import EditProfileScreen from '../components/EditProfileScreen';
import MapScreen from '../components/MapScreen';
import DeepLinking from '../components/DeepLinking';
import CameraRoll from '../components/CameraRoll';
import ApiData from '../components/ApiData';
import ApiDetail from '../components/ApiDetail';
import Animation from '../components/Animation';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const AppNavigation = () => {

    //deep linking
    const linking = {
        prefixes: ['myproject://', 'https://myproject-web-app.com/app'],
        config: {
            screens: {
                Login: 'login',
                Deeplink: {
                    path: 'deepLink/:itemId',
                    params: {
                        itemId: null
                    }
                }
            }
        }
    }

    return (
        <NavigationContainer linking={linking}>
            <Stack.Navigator initialRouteName="Signup" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Signup" component={SignupScreen} />
                <Stack.Screen name="Maps" component={MapScreen} />
                <Stack.Screen name="Profile" component={ProfileScreen} />
                <Stack.Screen name="Edit" component={EditProfileScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Deeplink" component={DeepLinking} />
                <Stack.Screen name="Camera" component={CameraRoll} />
                <Stack.Screen name="ApiData" component={ApiData} />
                <Stack.Screen name="ApiDetail" component={ApiDetail} />
                <Stack.Screen name="Animation" component={Animation} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigation;