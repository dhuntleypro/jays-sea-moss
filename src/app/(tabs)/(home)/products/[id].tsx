import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { ProductModelProps , ProductDetailsPageVThree} from "@dhuntleypro/afm-library"
// import ProductDetailsPageVTwo from '@/components/pages/product-details/ProductDetailsPageVTwo'

const ProductDetailsScrenn : FC<ProductModelProps> = (props) => {
  return (
    // <ProductDetailsPageVOne />
    // <ProductDetailsPageVTwo {...props}/>
    <ProductDetailsPageVThree{...props}/>
  )
}

export default ProductDetailsScrenn

const styles = StyleSheet.create({})