import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { router, Stack } from 'expo-router'
import { Ionicons , Fontisto} from '@expo/vector-icons'
import { COLORS } from "@dhuntleypro/afm-library"

const { width } = Dimensions.get('window');


const CollectionProductsLayout = () => {
  return (
   <Stack>

    <Stack.Screen 
    name='index'
    options={{
     
      headerShown: false,
    }}
    />
    <Stack.Screen 
    name='[productId]'
    options={{
      headerShown: false,

    }} 
    />
   </Stack>
  )
}

export default CollectionProductsLayout

