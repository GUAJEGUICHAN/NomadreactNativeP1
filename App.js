import React, { useState } from 'react'

import { Text } from 'react-native';

import * as Font from 'expo-font'

import { Ionicons } from '@expo/vector-icons'

import AppLoading from 'expo-app-loading';

import { Asset } from 'expo-asset';

const loadFonts = (fonts) => (fonts.map(font => Font.loadAsync(font)))

const loadImages = (images) => {
  images.map(image => {
    if (typeof image === "string") {
      return Image.prefetch(image)
    } else {
      return Asset.loadAsync(image)
    }
  })
}

export default function App() {
  const [ready, setReady] = useState(false);

  const startLoading = async () => {
    const fonts = loadFonts([Ionicons.font, Ionicons.font, Ionicons.font]);
    const images = loadImages(require('./android.png'), "https://reactnative.dev/img/oss_logo.png")
    await Promise.all([...fonts, ...images])
  }

  const onFinish = () => setReady(true)

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
