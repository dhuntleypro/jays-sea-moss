import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { useAuth } from '@/contexts/AuthContext'
import { TouchableOpacity } from 'react-native-gesture-handler'

// url={'/(tabs)/(products)/details'} 


const Page = () => {
  const {authState, onLogout } = useAuth()
  
  const { id } = useLocalSearchParams<{id: string}>()
  return (
    <View>
      <Text style={{
        padding: 20,
      }}>Setting Detail Page - {id}</Text>

<Text>{authState?.user?.name}</Text>
     <Button onPress={onLogout} title="Logout" />

    </View>
  )
}

export default Page

const styles = StyleSheet.create({})