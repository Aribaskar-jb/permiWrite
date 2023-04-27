import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';

const TeachersDashboard = () => {
    const route = useRoute();
  return (
    <View>
      <Text>Hi, {route.params.name}. This is your Dashboard.</Text>
    </View>
  )
}

export default TeachersDashboard

const styles = StyleSheet.create({})