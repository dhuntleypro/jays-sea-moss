// app/collections/[collectionId]/products/[productId].tsx
// import { useSearchParams } from 'expo-router';
import Pages from '@/core/routes';
import { ProductDetailsPageVThree, useClientCollection, useClientProduct } from '@dhuntleypro/afm-library';
import { Text, View } from 'react-native';

export default function CollectionProductDetails() {
  // const { collectionId, productId } = useSearchParams();

  const ProductDetails = Pages.productDetailsPage
  const {selectedCollection} = useClientCollection()
  const {selectedProduct} = useClientProduct()
  return (
    // <Text>Details...</Text>
    <ProductDetails {...selectedProduct} showSize={false}/>

    // <ProductDetailsPageVThree{...selectedProduct} showSize={false}/>

    // <View>
    //   <Text>Collection ID: {selectedCollection?.id}</Text>
    //   <Text>Product ID: {selectedProduct?.id}</Text>
    //   {/* Fetch and display product details based on collectionId and productId */}
    // </View>
  );
}


















// import { StyleSheet, Text, View } from 'react-native'
// import React, { FC } from 'react'
// // import ProductDetailsPage from '@/components/pages/product-details/ProductDetailsPageVOne'
// // import ProductDetailsPageVOne from '@/components/pages/product-details/ProductDetailsPageVOne'
// // import ProductDetailsPageVTwo from '@/components/pages/product-details/ProductDetailsPageVTwo'
// import { ProductModelProps , ProductDetailsPageVThree, useClientProduct, ProductDetailsPageVFour} from "@dhuntleypro/afm-library"
// // import ProductDetailsPageVThree from '@/components/pages/product-details/ProductDetailsPageVThree'
// // import ProductDetailsPageVTwo from '@/components/pages/product-details/ProductDetailsPageVTwo'

// const ProductDetailsScreen = () => {
//   const {selectedProduct} = useClientProduct()
//   return (
//     // <ProductDetailsPageVOne />
//     // <ProductDetailsPageVTwo {...props}/>
//     <ProductDetailsPageVThree{...selectedProduct} showSize={false}/>
//     // <ProductDetailsPageVFour{...selectedProduct}/>
//   )
// }

// export default ProductDetailsScreen

// const styles = StyleSheet.create({})