import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Register from './Components/Register';
import Home from './Components/Home';
import Letter from './Components/Letter';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Register"
          component={Register}
          options={{title: 'Registeration Page'}}
        />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name = "Letter" component={Letter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Register />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
// });