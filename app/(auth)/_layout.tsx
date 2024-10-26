import { StyleSheet} from 'react-native'
import { Stack } from 'expo-router'

const _layout = () => {

    
  return (
    <Stack>
      <Stack.Screen name='welcome' options={{ headerShown: false }} />
      <Stack.Screen name='login' options={{ headerShown: false }} />
      <Stack.Screen name='register' options={{ headerShown: false }} />
    </Stack>
  )
}

export default _layout

const styles = StyleSheet.create({})

// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import {AuthLayoutContent} from '@/layouts/AuthLayoutContent';
// // import { AuthLayoutContent } from '@dhuntleypro/afm-expo-library'
// // import AuthLayoutContent from '@/layouts/AuthLayoutContent'

// const store_id = 'P5V8A9ZE';  // Example store_id

// const AuthLayout = () => {
//   return (
//     <AuthLayoutContent store_id={store_id} />
//   )
// }

// export default AuthLayout

// const styles = StyleSheet.create({})