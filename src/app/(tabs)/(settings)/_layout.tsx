import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const ProductsLayout = () => {
  return (
   <Stack>

    <Stack.Screen 
    name='settings'
    options={{
      title: 'Settings',
      // headerShown: false
      
    }}
    />

    

    <Stack.Screen 
    name='appearance'
    options={{

    }}
    />
      <Stack.Screen 
    name='faq'
    options={{

    }}
    />
    

    <Stack.Screen 
    name='profile'
    options={{
      // headerShown: false


    }}
    />
    







   </Stack>
  )
}

export default ProductsLayout

const styles = StyleSheet.create({})