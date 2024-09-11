import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import CollectionPageVOne from '@/components/pages/collections/CollectionPageVOne'
import {CollectionPageVTwo} from "@dhuntleypro/afm-library"
import Pages from '@/core/routes'

const CollectionsMainPage = () => {
  const CollectionPage = Pages.collections
  return ( 
<CollectionPage/>
    // <CollectionPageVOne />
    // <CollectionPageVTwo />
  )
}

export default CollectionsMainPage

const styles = StyleSheet.create({})