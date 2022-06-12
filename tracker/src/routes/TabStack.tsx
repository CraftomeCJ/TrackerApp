import React, { ReactElement } from 'react';
import  FontAwesome  from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'

//typescript
import { RootStackParamList } from '../type/TypeLibrary'
import { NavigationName } from '../constants/navigationName';

import AccountScreen from '../screens/AccountScreen';
import TrackCreateScreen from '../screens/TrackCreateScreen';
import TrackDetailScreen from '../screens/TrackDetailScreen';
import TrackListScreen from '../screens/TrackListScreen';

const TrackListFlow = ():ReactElement => {
  return (
      <Stack.Navigator initialRouteName={ NavigationName.TrackListScreen }>
          <Stack.Screen
              name = { NavigationName.TrackDetailScreen }
              component = { TrackDetailScreen }
              options = {{
                  headerBackTitle: "Back"
              }}
          />
          <Stack.Screen
              name = { NavigationName.TrackListScreen }
              component = { TrackListScreen }
              options = {{
                  headerLeft: () => null
              }}
          />
      </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator<RootStackParamList>();
const Stack = createStackNavigator<RootStackParamList>();

const TabStack = () => {
  return (
      <Tab.Navigator
          initialRouteName={NavigationName.TrackListFlow}
          screenOptions = {{
               headerShown: false
          }}
          >
          <Tab.Screen
              name={ NavigationName.TrackListFlow }
              component = { TrackListFlow }
              options = {{
                  title: "Tracks",
                  tabBarIcon : ()=> <FontAwesome name="th-list" size={24} />
              }}
          />
          <Tab.Screen
              name={ NavigationName.TrackCreateScreen }
              component = { TrackCreateScreen }
              options = {{
                  title: "Add Track",
                  tabBarIcon : ()=><FontAwesome name="plus" size={24} />
              }}
          />
          <Tab.Screen
              name={ NavigationName.AccountScreen }
              component = { AccountScreen }
              options = {{
                  tabBarIcon : ()=><FontAwesome name="gear" size={24} />
              }}
          />
      </Tab.Navigator>

  );
}

export default TabStack;
