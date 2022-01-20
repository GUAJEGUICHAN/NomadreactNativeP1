import React from 'react';

import * as Font from 'expo-font';

import { Ionicons } from '@expo/vector-icons';

import AppLoading from 'expo-app-loading';

import { useAssets } from 'expo-asset';

import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';

import { useColorScheme } from 'react-native';

import Tabs from './navigation/Tabs';

export default function App() {
  const [assets] = useAssets([require('./android.png')]);
  const [loaded] = Font.useFonts(Ionicons.font);
  // 이미지와 폰트만 프리로드하고싶다면 위 두줄로 충분하다.
  // 하지만 각종 DB나 여러가지 파일도 preload하고 싶다면 이전의 방식을 따르자

  const isDark = useColorScheme() === 'dark';

  if (!assets || !loaded) {
    return (
      <AppLoading />
    );
  }

  return (
    // <Text>안녕</Text>
    <NavigationContainer
      theme={isDark ? DarkTheme : DefaultTheme}
    >
      <Tabs />
    </NavigationContainer>
  );
}
