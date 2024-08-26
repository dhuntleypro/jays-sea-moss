import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import ProductDetailsPage from '@/components/pages/product-details/ProductDetailsPageVOne'
import ProductDetailsPageVOne from '@/components/pages/product-details/ProductDetailsPageVOne'
import ProductDetailsPageVTwo from '@/components/pages/product-details/ProductDetailsPageVTwo'
import { ProductModelProps } from '@/models/ProductModelProps'
import ProductDetailsPageVThree from '@/components/pages/product-details/ProductDetailsPageVThree'
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