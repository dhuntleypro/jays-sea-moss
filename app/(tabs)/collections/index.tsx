import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import CollectionPageVOne from '@/components/pages/collections/CollectionPageVOne'
import {Pages} from "@dhuntleypro/afm-expo-library"

const CollectionsMainPage = () => {
  const CollectionPage = Pages.collections
  return ( 
    <CollectionPage/> 
    // <CollectionPageVTwo />
    // <CollectionPageVTwo />
    // <View style={{padding: 30}}><Text>yooo</Text></View>
  )
}

export default CollectionsMainPage

const styles = StyleSheet.create({
  
})