import { Image, StyleSheet, FlatList, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CartContext } from '@/contexts/CartContext'
import CartHeader from '@/components/other/headers/CartHeader'
import { generalStyles } from '@/components/other/general/Styles'
import CartCard from '@/components/other/cart/CartCard'
import convertToCurrency from '@/hooks/convertToCurrency'
import { CONSTANTS } from '@/utils/constants'
import PaymentPayScreen from './PaymentPayScreen'
// import CartHeader from '../components/headers/CartHeader'
// import { Avatar, Divider } from 'react-native-paper'
// import LinearGradient from 'react-native-linear-gradient' // cause error
// import CartCard from '../components/cart/CartCard'
// import { Ionicons , Fontisto} from '@expo/vector-icons'
// import { COLORS } from '../utils/theme'
// import { CartContext } from '../contexts/CartContext'
// import convertToCurrency from '../hook/convertToCurrency'
// import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer'
// import PaymentButton from '../components/buttons/CheckoutButton'
// import PaymentPayScreen from './PaymentPayScreen'
// import { CONSTANTS } from '../utils/constants'
// import CheckoutButton from '../components/buttons/CheckoutButton'
// import { generalStyles } from '../components/general/Styles'
// import { useFocusEffect } from '@react-navigation/native'


// export interface CartProps {
//   carts: []
// }

const CartScreen = () => {
  
  const { carts, totalSum, totalShipping, totalTax, grandTotal, quantity, deleteItemFromCart, clearData, decreaseFromCart} = useContext(CartContext)
  
  const [triggerValueChange, setTriggerValueChange] = useState(false)
  // useFocusEffect(
  //   React.useCallback(() => {
  //     // Run this function every time the screen comes into focus
     

  //     if (quantity <= 0    ){ // || carts.length <= 0
  //       setQuantity(0)
  //     }
  //   }, [])
  // );


  
  
  return (
    <View style={styles.container}>
      {/* <CartHeader/> */}

      {carts.length <= 0 ? (

          <>
          <View style={generalStyles.center}>
            <Text>
              Please add items to the cart
            </Text>
          </View>
          </>
      ): (
<>
        <FlatList
        data={carts}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        ListHeaderComponent={
          <></>
        }
        contentContainerStyle={{
          paddingBottom: 100
        }}
        renderItem={({item}) => (
          // <CartCard item={item} delteItemFromCart={deleteItemFromCart} />
          <CartCard item={item} delteItemFromCart={deleteItemFromCart} triggerValueChange={triggerValueChange} />
        )}
        ListFooterComponent={
         <></>
        }
    />


<View>
<>
          <View style={styles.priceContainer}>
          
          <View  style={styles.priceAndTitle}>
            <Text style={styles.text}>Total:</Text>
            <Text style={styles.text}>{convertToCurrency(totalSum)}</Text>
          </View>
          
          <View  style={styles.priceAndTitle}>
            <Text style={styles.text}>Shipping:</Text>
            <Text style={styles.text}>{convertToCurrency(totalShipping)}</Text>
          </View>
          <View  style={styles.priceAndTitle}>
            <Text style={styles.text}>Tax:</Text>
            <Text style={styles.text}>{convertToCurrency(totalTax)}</Text>
          </View>
          {/* <View  style={styles.priceAndTitle}>
            <Text style={styles.text}>Shipping:</Text>
            <Text style={styles.text}>$0.0</Text>
          </View> */}
        
        </View>

        <View style={styles.divider}/>
      
          <View  style={styles.priceAndTitle}>
            <Text style={styles.text}>Grand Total:</Text>
            <Text style={[styles.text , {color: "black", fontWeight: "700"} ]}>{convertToCurrency(grandTotal)}</Text>
          </View>
        
        </>
      </View>
      <View style={{paddingTop: 30}}>
        <PaymentPayScreen 
           publishableKey={CONSTANTS.publishableKeyTest}
          // publishableKey={CONSTANTS.publishableKeyLive}
          amount={totalSum}
          shippingAmount={totalShipping} 
        />
    </View>

        {/* <CheckoutButton amount={totalSum} shippingAmount={totalShipping} /> */}
      
      <View style={{paddingBottom: 50}}></View>


</>
      )}
   
     
 
  
    </View>

  )
}

export default CartScreen

const styles = StyleSheet.create({

  headerContainer: {
    marginBottom: 20
  },
  container: {
    flex  : 1,
    padding: 15
  },
  priceContainer :{
    marginTop: 40
  },
  priceAndTitle: {
    flexDirection: 'row',
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginVertical: 10
  },
  text: {
    color: "#757575",
    fontSize: 14
  },
  divider: {
    borderWidth: 1,
    borderColor: "#C0C0C0",
    borderRadius: 15,
    marginVertical: 10
  },
  checkoutContainer: {
    backgroundColor: "black",//  "#E96E6E",
    width: "100%",
    marginVertical: 30,
    borderRadius: 10
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    padding: 10,
    fontWeight: "700"


  }

})

// rnef