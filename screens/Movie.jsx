import React from 'react';

import { Text, TouchableOpacity } from 'react-native';

function Movie({ navigation: { navigate } }) {
  return (
    <TouchableOpacity
      onPress={() => navigate('Stack', { screen: 'ScreenOne' })}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          color: ((props) => props.theme.textColor),
        }}
      >
        Movie
      </Text>
    </TouchableOpacity>
  );
}

export default Movie;
