import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';

import AccountScreen from './src/screens/AccountScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';

import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';

import { Provider as AuthProvider } from './src/context/AuthContext';
import { setNavigator } from './src/navigationRef';

const navigator = createNativeStackNavigator();
const tab = createBottomTabNavigator();

function LoginFLow(): React.ReactElement {
  return (
    <navigator.Navigator>
      <navigator.Screen
        name='Signup'
        component={SignupScreen}
        options={{ headerShown: false }}
        />
      <navigator.Screen
        name='Signin'
        component={SigninScreen}
        />
    </navigator.Navigator>
  );
}

function TrackListFlow(): React.ReactElement {
  return (
    <navigator.Navigator>
      <navigator.Screen
        name='TrackList'
        component={TrackListScreen}
      />
      <navigator.Screen
        name='TrackDetail'
        component={TrackDetailScreen}
      />
    </navigator.Navigator>
  )
}

function MainFlow(): React.ReactElement {
  return (
    <tab.Navigator>
      <tab.Screen
        name='TrackListFlow'
        component={ TrackListFlow}
        />
      <tab.Screen
        name='TrackCreate'
        component={TrackCreateScreen}
        />
        <tab.Screen
          name='Account'
          component={AccountScreen}
        />
    </tab.Navigator>
  );
}

function App(): React.ReactElement {
  return (
    <NavigationContainer>
      <navigator.Navigator>
        <navigator.Screen
          name='LoginFLow'
          component={LoginFLow}
          options={{ headerShown: false }}
        />
        <navigator.Screen
          name='MainFlow'
          component={MainFlow}
          options={{ headerShown: false }}
        />
      </navigator.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <AuthProvider>
      <App forwardRef={
        (navigatorRef: any) => setNavigator(navigatorRef)} />
    </AuthProvider>
  );
};
