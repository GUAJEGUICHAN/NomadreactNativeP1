import React from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { View, Text } from 'react-native';

const Tv: React.FC<NativeStackScreenProps<any, 'Tv'>> = () => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Text>Tv</Text>
  </View>
);

export default Tv;
