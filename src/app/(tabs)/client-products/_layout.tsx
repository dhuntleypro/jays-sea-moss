import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const ClientproductLayout = () => {
  return (
   <Stack>

    <Stack.Screen 
    name='c-products'
    options={{
      title: 'products'

    }}
    />
   
   
     <Stack.Screen 
    name='(create)'
    options={{
      title: 'Create product'
    }}
    />
   

   <Stack.Screen 
    name='(details)/[id]'
    options={{
      // title: 'Details'
    }}
    />
   
   </Stack>
  )
}

export default ClientproductLayout

const styles = StyleSheet.create({})