import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const ProductsLayout = () => {
  return (
   <Stack>

    <Stack.Screen 
    name='settingsPage'
    options={{
      
    }}
    />
    <Stack.Screen 
    name='[id]'
    options={{

    }}
    />
   </Stack>
  )
}

export default ProductsLayout

const styles = StyleSheet.create({})