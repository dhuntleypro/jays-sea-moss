import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { router, Stack, useNavigation } from 'expo-router'

const RoundedButton = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Stack.Screen 
      options={{
        headerBackTitle: "yoo",

      }}
      />
    
    </View>
  )
}

export default RoundedButton

const styles = StyleSheet.create({})