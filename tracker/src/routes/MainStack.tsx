import React, { ReactElement } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import TabStack from './TabStack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';

import { NavigationName } from '../constants/navigationName';
import { RootStackParamList } from '../type/TypeLibrary';

import ResolveAuthScreen from '../screens/ResolveAuthScreen';

const Stack = createStackNavigator<RootStackParamList>();

export const MainStack = (): ReactElement => {

  return (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName={NavigationName.ResolveAuthScreen}
            screenOptions={{
                gestureEnabled: false,
                headerLeft: () => null,
                headerShown: false,
            }}>
            <Stack.Screen
                name ={NavigationName.ResolveAuthScreen}
                component = {ResolveAuthScreen}
                options = {{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name ={NavigationName.SignInScreen}
                component = {SignInScreen}
            />
            <Stack.Screen
                name ={NavigationName.SignUpScreen}
                component = {SignUpScreen}
            />
            <Stack.Screen
                name ={NavigationName.Dashboard}
                component = {TabStack}
                options = {{
                    title : ""
                }}
            />
        </Stack.Navigator>
    </NavigationContainer>

);
}

export default MainStack
