import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const HomeLayout = () => {
  return (
   <Stack>

<Stack.Screen 
    name='index'
    options={{
      title: 'Home',
      headerShown: false, // start
    }}
    />

    <Stack.Screen 
    name='(drawer)'
    options={{
      title: 'Home',
      headerShown: false, // start
    }}
    />
    {/* <Stack.Screen 
    name='details'
    options={{

    }}
    />
     */}
     <Stack.Screen 
    name='search'
    options={{

    }}
    />
         <Stack.Screen 
    name='products'
    options={{
      title: 'products'
    }}
    />
   </Stack>
  )
}

export default HomeLayout

const styles = StyleSheet.create({})