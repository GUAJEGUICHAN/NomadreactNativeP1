import React from 'react';

import styled from 'styled-components/native';

import { View } from 'react-native';

const Title = styled.Text`
  color: ${(props) => props.theme.textColor};
`;

function Search() {
  return (
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
}

export default Search;
