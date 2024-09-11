import { StyleSheet} from 'react-native'
import React from 'react'
import {RegisterComponentTwo} from "@dhuntleypro/afm-library"
import Pages from '@/core/routes';

const register = () => {
  const RegisterPage = Pages.register; // Dynamically use component from the registry

  return (
    <RegisterPage />
  //  <RegisterComponentTwo />
  )
}

export default register

const styles = StyleSheet.create({})
