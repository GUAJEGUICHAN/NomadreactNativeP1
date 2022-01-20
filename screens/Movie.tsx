import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';

import styled from 'styled-components/native';

import { TouchableOpacity } from 'react-native';

const Title = styled.Text`
  color: ${(props) => props.theme.textColor};
`;

const Movie: React.FC<NativeStackScreenProps<any, 'Movies'>> = ({ navigation: { navigate } }) => (
  <TouchableOpacity
    onPress={() => navigate('Stack', { screen: 'ScreenOne' })}
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Title>
      Movie
    </Title>
  </TouchableOpacity>
);

export default Movie;
