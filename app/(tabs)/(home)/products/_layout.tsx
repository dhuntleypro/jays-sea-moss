import React from 'react'
import { Stack } from 'expo-router'
import { useTheme } from '@dhuntleypro/afm-expo-library'

const ProductsLayout = () => {
  const {colors } = useTheme()
  return (
   <Stack>

    <Stack.Screen 
    name='index'
    options={{
     
      headerShown: false,
      headerStyle: {
        backgroundColor:  colors.pageBackground, 
      },
      headerTintColor: colors.pageText
    }}
    />
    <Stack.Screen 
    name='[id]'
    options={{
      headerShown: false,

    }} 
    />
   </Stack>
  )
}

export default ProductsLayout

