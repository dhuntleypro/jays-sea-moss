import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Pages } from '@dhuntleypro/afm-expo-library';

const search = () => {
  const ProductSearchPage = Pages.products;

  return (
    <ProductSearchPage />
    // <ProductSearchScreen />
  )
}

export default search

const styles = StyleSheet.create({})
