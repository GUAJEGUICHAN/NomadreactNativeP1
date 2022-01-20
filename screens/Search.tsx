import React from 'react';

import styled from 'styled-components/native';

import { View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

const Title = styled.Text`
  color: ${(props) => props.theme.textColor};
`;

const Search: React.FC<NativeStackScreenProps<any, 'Search'>> = () => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Title>Search</Title>
  </View>
);

export default Search;
