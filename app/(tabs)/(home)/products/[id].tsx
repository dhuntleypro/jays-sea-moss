import { StyleSheet } from 'react-native'
import React, { FC } from 'react'
import { ProductModelProps , ProductDetailsPageVThree, useClientProduct, ProductDetailsPageVFour} from "@dhuntleypro/afm-library"
import Pages from '@/core/routes'
const ProductDetailsScreen = () => {
  const ProductDetailsPage = Pages.productDetailsPage
  const {selectedProduct} = useClientProduct()

  return (

    <ProductDetailsPage {...selectedProduct} />


    // <ProductDetailsPageVOne />
    // <ProductDetailsPageVTwo {...props}/>
    //using this one <ProductDetailsPageVThree{...selectedProduct} showSize={false}/>
    // <ProductDetailsPageVFour{...selectedProduct}/>
  )
}

export default ProductDetailsScreen

const styles = StyleSheet.create({})