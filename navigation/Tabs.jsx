import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { useColorScheme } from 'react-native';

import {
  BLACK_COLOR, WHITE_COLOR, GRAY_COLOR, LIGHT_GRAY_COLOR,
} from '../colors';

import Movie from '../screens/Movie';
import Search from '../screens/Search';
import Tv from '../screens/Tv';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  // const isDark = useColorScheme() === 'dark';

  return (
    <Tab.Navigator
      initialRouteName="Search"
    // screenOptions={{
    //   headerStyle: {
    //     backgroundColor: isDark ? BLACK_COLOR : WHITE_COLOR,
    //   },
    //   headerTitleStyle: {
    //     color: isDark ? WHITE_COLOR : BLACK_COLOR,
    //   },
    //   tabBarStyle: {
    //     backgroundColor: isDark ? BLACK_COLOR : WHITE_COLOR,
    //   },
    //   tabBarActiveTintColor: isDark ? WHITE_COLOR : BLACK_COLOR,
    //   tabBarInactiveTintColor: LIGHT_GRAY_COLOR,
    // }}
    >
      <Tab.Screen
        name="Movies"
        component={Movie}
      />
      <Tab.Screen name="Tv" component={Tv} />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  );
}
