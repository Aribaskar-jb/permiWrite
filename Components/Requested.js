import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


export default function Requested() {
  const navigation = useNavigation();
  return(
    <View>
      <Text style={styles.main}>Hello, I am your Requested Page.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    textAlign: 'center',
  },
  overall:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
},
Button:{
    // marginTop: 10,
    backgroundColor: '#ffffff',
    width: 200,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    color: '#d9d9d9',
    // justifyContent: 'center'
    alignItems: 'center'
},
leaveLetter: {
    opacity: .54
},
requestPage: {
  opacity: 1
},
Button2: {
    backgroundColor: '#ffffff',
    width: 200,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    color: '#d9d9d9',
    // justifyContent: 'flex-start'
    alignItems: 'center',
},
})