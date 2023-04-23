import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from './Components/Login';
import Home from './Components/Home';
import Letter from './Components/Letter';
import Requested from './Components/Requested';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: 'Login Page'}}
        />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name = "Letter" component={Letter} />
        <Stack.Screen name = "Requested" component={Requested} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Login />
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