import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {ProductSearchScreen} from "@dhuntleypro/afm-library"
import Pages from '@/core/routes';

const search = () => {
  const ProductSearchPage = Pages.products; // Dynamically use component from the registry

  return (
    <ProductSearchPage />
    // <ProductSearchScreen />
  )
}

export default search

const styles = StyleSheet.create({})
