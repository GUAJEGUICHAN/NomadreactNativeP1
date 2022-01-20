import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Text, TouchableOpacity } from 'react-native';

import { ORANGE_COLOR, BLACK_COLOR } from '../colors';

function ScreenOne({ navigation: { navigate } }) {
  return (
    <TouchableOpacity>
      <Text onPress={() => navigate('Tabs', { screen: 'Search' })}>
        One!
      </Text>
    </TouchableOpacity>
  );
}

function ScreenTwo({ navigation: { setOptions, navigate } }) {
  return (
    <TouchableOpacity>
      <Text onPress={() => {
        setOptions({
          title: 'Hello World',
        });
        navigate('ScreenThree');
      }}
      >
        Two!
      </Text>
    </TouchableOpacity>
  );
}

function ScreenThree({ navigation: { goBack } }) {
  return (
    <TouchableOpacity>
      <Text onPress={() => goBack()}>
        Three!
      </Text>
    </TouchableOpacity>
  );
}

const NativeStack = createNativeStackNavigator();

function Stack() {
  return (
    <NativeStack.Navigator
      screenOptions={{
        headerTintColor: ORANGE_COLOR,
        headerTitleStyle: {
          color: BLACK_COLOR,
        },
        headerBackTitleVisible: false,
        // headerShown: false,
      }}
    >
      <NativeStack.Screen name="ScreenOne" component={ScreenOne} />
      <NativeStack.Screen
        name="ScreenTwo"
        component={ScreenTwo}
        options={{
          animation: 'fade',
        }}
      />
      <NativeStack.Screen
        name="ScreenThree"
        component={ScreenThree}
        options={{
          presentation: 'card',
          animation: 'flip',
        }}
      />
    </NativeStack.Navigator>
  );
}

export default Stack;
