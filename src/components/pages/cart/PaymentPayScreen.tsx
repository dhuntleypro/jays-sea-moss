import { Alert, Platform, StyleSheet, Text, View } from 'react-native'
import React, { FC, useContext, useEffect, useState } from 'react'
import { StripeProvider, usePlatformPay, PlatformPayButton, PlatformPay, usePaymentSheet } from '@stripe/stripe-react-native'
// import { CONSTANTS } from '../utils/constants'; // Adjust the path to your constants file
// import { createPaymentIntent } from '../api/paymentApi';
// import { stripeConverter } from '../hook/stripeConverter';
// import { Button } from 'react-native-paper';
// import { TouchableOpacity } from 'react-native-gesture-handler';
// import { COLORS } from '../utils/theme';
// import { Ionicons } from "@expo/vector-icons"
// import { CartContext } from '../contexts/CartContext';
import { useFocusEffect } from '@react-navigation/native';
import { CartContext } from '@/contexts/CartContext';
import { stripeConverter } from '@/hooks/stripeConverter';
import { CONSTANTS } from '@/utils/constants';
import { createPaymentIntent } from '@/api/paymentApi';
import { useClientStore } from '@/contexts/ClientStoreContext';
// import { ContactField } from '@stripe/stripe-react-native/lib/typescript/src/types/PlatformPay';

 
interface PaymentPayScreenProps  {
    goBack?: () => void
    publishableKey: string
    amount: number
    shippingAmount: number
    
}


export const PaymentPayScreen: FC<PaymentPayScreenProps> = (props) => {
    const [ready, setReady] = useState(false)
    const [clientSecret, setClientSecret] = useState('')
    const { isPlatformPaySupported, confirmPlatformPayPayment } = usePlatformPay()
    const { carts, totalSum, totalShipping, totalTax, grandTotal, deleteItemFromCart, clearData, decreaseFromCart} = useContext(CartContext)

    const {store} = useClientStore()
    // const {initPaymentSheet, presentPaymentSheet, loading} = usePaymentSheet()

    // useEffect(() => {
    //     setup()
    //     // initialisePaymentSheet()
    //     console.log("Payment set up completed")

    // }, [])

    useFocusEffect(
        React.useCallback(() => {
          // Run this function every time the screen comes into focus
          console.log('Screen focused');
         setup()
        // initialisePaymentSheet()
        console.log("Payment set up completed")

        }, [])
      );

    // const initialisePaymentSheet = async () => {
    //     const { paymentInent, ephemeralKey , customer } = await fetchPaymentSheet({

    //     })
    // }


    const setup = async () => {
        // Perform any setup here if needed
        if(!(await isPlatformPaySupported())) {
            // console.log
            Alert.alert(
                'Error',
                `${
                    Platform.OS === 'android' ? 'Google': 'Apple'
                } Pay is not supported. `
            )
            return
        } else {
           await isPlatformPaySupported()
           // setup()
            console.log("sorry..")
        }

        const paymentData = {
            amount: stripeConverter(props.amount), // Example value, replace with your actual data
            currency: "USD", // Example value, replace with your actual data
            shipping_fee: stripeConverter(props.shippingAmount), // Example value, replace with your actual data
            stripe_id: store?.stripe_id ?? "", //"acct_1NVCh3JEHBX7gOQA", // Example value, replace with your actual data
            app_name: store?.store_name ?? "" // CONSTANTS.appName // Example value, replace with your actual data
          };

        const response = await createPaymentIntent(paymentData);

       // const result = response.json
        setClientSecret(response.clientSecret)
        // console.log(clientSecret)
        console.log(`This is the best button - ${response.clientSecret}`)
        setReady(true)
    }

    async function buy() {
        if (ready == true) {
            setup()
        }
        setReady(false)

       

        const { error } = await confirmPlatformPayPayment(clientSecret, {
            applePay: {
                cartItems: carts.map(item => ({
                    label: store?.store_name, //  CONSTANTS.appName, // pay ....
                    amount: String(item.price),
                    paymentType: PlatformPay.PaymentType.Immediate
                })),

                // cartItems: [
                //     {
                //         label: CONSTANTS.appName,
                //         amount: String(props.amount), // '12',// 
                //         paymentType: PlatformPay.PaymentType.Immediate,
                        
             
                      
                //     }
                // ],
                merchantCountryCode: "US",
                currencyCode: 'USD',
            
                // requiredBillingContactFields: [
                //     ContactField.EmailAddress,
                //     ContactField.Name,
                //     ContactField.PhoneNumber,
                //     ContactField.PhoneticName,
                //     ContactField.PostalAddress
                // ]
                
                
            },
            googlePay: {
                testEnv: true,
                merchantName: 'My merchant name',
                merchantCountryCode: 'US',
                currencyCode: 'USD',
                billingAddressConfig: {
                  format: PlatformPay.BillingAddressFormat.Full,
                  isPhoneNumberRequired: true,
                  isRequired: true,
                },
            },
        
        })

        if (error) {
            setReady(true)
            Alert.alert(`Error code: ${error.code}`, error.message)
            console.log(`Error code: ${error.code}`, error.message)

        } else {
            setReady(false)
            Alert.alert('Success', 'The payment was confirmed successfully')
            console.log('Success', 'The payment was confirmed successfully')
}
    }

    return (
        <View style={{}}>
            <StripeProvider
                publishableKey={props.publishableKey}
                merchantIdentifier={CONSTANTS.merchant_id} // Use the correct constant
            >
                <View>
                    
                    <PlatformPayButton
                        onPress={buy}
                        disabled={!ready}
                        style={styles.payButton}
                       // appearance={PlatformPay.ButtonStyle.Black}
                        borderRadius={4}
                        type={5} //{PlatformPay.ButtonType.AddMoney}
                    />
                </View>
            </StripeProvider> 
        </View>
    )
}

export default PaymentPayScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'red',
    },
    payButton: {
        backgroundColor: 'black',
        tintColor: 'red',
        width: '100%',
        height: 50,
        borderRadius: 5,
        color: 'red',
       
    },
    buttons: {
        marginTop: 20,
    }
})


