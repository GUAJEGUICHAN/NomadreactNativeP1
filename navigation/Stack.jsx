import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, TouchableOpacity, View } from 'react-native';
import Tabs from './Tabs';

function ScreenOne({ navigation: { navigate } }) {
  return (
    <TouchableOpacity>
      <Text onPress={() => navigate('ScreenTwo')}>
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
    <NativeStack.Navigator>
      <NativeStack.Screen name="ScreenOne" component={ScreenOne} />
      <NativeStack.Screen name="ScreenTwo" component={ScreenTwo} />
      <NativeStack.Screen name="ScreenThree" component={ScreenThree} />
    </NativeStack.Navigator>
  );
}

export default Stack;
