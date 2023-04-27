import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from './Components/Login';
import Home from './Components/Home';
import Letter from './Components/Letter';
import Requested from './Components/Requested';
import Choose from './Components/Choose';
import TeacherRegistration from './Components/TeacherRegistration';
import TeachersDashboard from './Components/TeachersDashboard';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Choose" component={Choose} options={{title: 'Student or Teacher'}}/>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: 'Login Page'}}
        />
        <Stack.Screen name='TeacherRegistration' component={TeacherRegistration} />
        <Stack.Screen name="TeachersDashboard" component={TeachersDashboard} />
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