import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const ClientProductsLayout = () => {
  return (
   <Stack>

    <Stack.Screen 
    name='create-client-product'
    options={{
      headerShown: false
    }}
    />
   </Stack>
  )
}

export default ClientProductsLayout

const styles = StyleSheet.create({})