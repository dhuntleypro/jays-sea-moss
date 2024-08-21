import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const ClientOrdersLayout = () => {
  return (
   <Stack>

    <Stack.Screen 
    name='create-client-order'
    options={{
      headerShown: false
    }}
    />
   </Stack>
  )
}

export default ClientOrdersLayout

const styles = StyleSheet.create({})