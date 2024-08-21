import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const ClientOrderLayout = () => {
  return (
   <Stack>

    <Stack.Screen 
    name='c-orders'
    options={{
      title: 'Orders'

    }}
    />
   
   
     <Stack.Screen 
    name='(create)'
    options={{
      title: 'Create Order'
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

export default ClientOrderLayout

const styles = StyleSheet.create({})