import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import ProductList from '@/components/other/products/ProductList'
import {ProductSearchScreen} from '@dhuntleypro/afm-library'
import Pages from '@/core/routes'
const products = () => {
  const ProductsPage  = Pages.products

  return (
    // <ProductList client={false} />
    // <ProductSearchScreen />
    <ProductsPage />
  )
}

export default products

const styles = StyleSheet.create({})





// import { StyleSheet, } from 'react-native';
// import EditScreenInfo from '@/components/EditScreenInfo';
// import React, { FC } from 'react';
// import CustomLink from '@/components/CustomLink';
// import { Text, View } from '@/contexts/Themed';
// import { Stack } from 'expo-router';
// import { ProductModelProps } from '@/models/ProductModelProps';

// export const Page: FC<ProductModelProps> = (item) => {

//   return (
  
//     <View style={styles.container}>
//         {/*  DONT ADD STACK HER... */}

//       <Text style={styles.title}>Products</Text>
//       <CustomLink url={'/modal'} title={'Open Model'} replace/>

//  <CustomLink 
//   url={`/products/${item.id}`}   
//   title={'Go To Product Detailsf 1'} 
//   style={{ padding: 20, fontSize: 30, color: 'blue'
//   }}
//   />



//       {/* </View> */}

//       <EditScreenInfo path="app/(tabs)/index.tsx" />
//     </View>
//   );
// }

// export default Page

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   separator: {
//     marginVertical: 30,
//     height: 1,
//     width: '80%',
//   },
// });
