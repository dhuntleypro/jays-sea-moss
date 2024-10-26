import { StyleSheet } from 'react-native'
import { Pages, useClientProduct} from "@dhuntleypro/afm-expo-library"
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