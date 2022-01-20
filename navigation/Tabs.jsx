import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import Movie from '../screens/Movie';
import Search from '../screens/Search';
import Tv from '../screens/Tv';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Search"
      screenOptions={{
        tabBarLabelStyle: {
          backgroundColor: 'red',
        },
        tabBarLabelPosition: 'beside-icon',
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'red',
        tabBarStyle: {
          backgroundColor: 'tomato'
        }
      }
      }
    >
      <Tab.Screen
        name="Movies"
        component={Movie}
        options={{
          tabBarLabelStyle: {
            backgroundColor: 'yellow',
          },
          tabBarBadge: '5'
        }}
      />
      <Tab.Screen name="Tv" component={Tv} />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  );
}
