import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {LoginComponentTwo, useClientStore} from "@dhuntleypro/afm-library"
import Pages from '@/core/routes';
    
const Login = () => {
  const {store } = useClientStore()
  const LoginPage = Pages.register; // Dynamically use component from the registry

  return (
    <LoginPage />
    //  <LoginComponentTwo />    
  )
}

export default Login

const styles = StyleSheet.create({})


