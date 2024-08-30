import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RegisterComponentTwo } from '@dhuntleypro/afm-library'

const register = () => {
  return (
   <RegisterComponentTwo />
  )
}

export default register

const styles = StyleSheet.create({})











// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import React from 'react'
// import { router } from 'expo-router'

// const register = () => {
//   return (
//     <View style={{paddingTop: 100}}>
//       <Text>register</Text>

//       <TouchableOpacity onPress={() => router.replace('/(tabs)')}>
//         <Text>go to home</Text>
//       </TouchableOpacity>

//       <TouchableOpacity onPress={() => router.replace('/login')}>
//         <Text>go to login</Text>
//       </TouchableOpacity>
//     </View>
//   )
// }

// export default register

// const styles = StyleSheet.create({})