import React, { useState } from 'react'

import { Text } from 'react-native';

import * as Font from 'expo-font'

import { Ionicons } from '@expo/vector-icons'

import AppLoading from 'expo-app-loading';

import { Asset } from 'expo-asset';

export default function App() {
  const [ready, setReady] = useState(false);
  const onFinish = () => setReady(true)
  const startLoading = async () => {
    await Font.loadAsync(Ionicons.font)
    await Asset.loadAsync(require('./android.png'));
    // await Image.prefetch(주소);

  }

  if (!ready) {
    return (
      <AppLoading
        startAsync={startLoading}
        onFinish={onFinish}
        onError={console.error}
      />
    );
  }
  return <Text>We are done</Text>
}
