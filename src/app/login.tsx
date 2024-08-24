import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginComponentOne from '@/components/pages/login/LoginComponentOne'
import LoginComponentTwo from '@/components/pages/login/LoginComponentTwo'


     
const Login = () => {
  return (
     <LoginComponentTwo />    
  )
}

export default Login

const styles = StyleSheet.create({})













// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import React from 'react'
// import { Link, router } from 'expo-router'
// import { SafeAreaView } from 'react-native-safe-area-context'
// // import { TouchableOpacity } from 'react-native-gesture-handler'

// const login = () => {
//   return (
//     <SafeAreaView>
//     <View>
//       <Text>login</Text>
      
//       <TouchableOpacity onPress={() => router.replace('/')}>
//         <Text>go to home</Text>
//       </TouchableOpacity>

//       <TouchableOpacity onPress={() => router.replace('/register')}>
//         <Text>go to register</Text>
//       </TouchableOpacity>

//     </View>
//     </SafeAreaView>
//   )
// }

// export default login

// const styles = StyleSheet.create({})