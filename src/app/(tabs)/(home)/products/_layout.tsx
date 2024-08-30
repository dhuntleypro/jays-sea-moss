import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { router, Stack } from 'expo-router'
import { Ionicons , Fontisto} from '@expo/vector-icons'
import { COLORS } from "@dhuntleypro/afm-library"

const { width } = Dimensions.get('window');


const ProductsLayout = () => {
  return (
   <Stack>

    <Stack.Screen 
    name='index'
    options={{
     
      headerShown: false,
    }}
    />
    <Stack.Screen 
    name='[id]'
    options={{
      headerShown: false,

    }} 
    />
   </Stack>
  )
}

export default ProductsLayout


const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    // // padding: 20,
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // right: 0,
    // zIndex: 10,
    // backgroundColor: 'white',
  },
  userInfoSection: {
    // paddingHorizontal: 30,
    marginBottom: 25
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    // marginTop: 15,
    marginBottom: 5
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',

  },
  menuButton: {
    padding: 10,
  },
  menuText: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  spacer: {
    flex: 1,
  },
  cartButton: {
   
    alignItems: "flex-end",
    marginRight: 10
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 9,
  },
  drawer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: width * 0.75,
    backgroundColor: '#fff',
    padding: 20,
    zIndex: 10,
  },
  drawerItem: {
    fontSize: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartCount: {
    position: "absolute",
    bottom: 16,
    width: 16,
    height: 16,
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: "blue",
    justifyContent: "center",
    zIndex: 999
},
cartNumber: {
    fontFamily: "regular",
    fontWeight: "600",
    fontSize: 10,
    color: COLORS.lightWhite
},
dropdown: {
    paddingLeft: 20,
    // overflow: 'hidden',

  },
  dropdownItem: {
    paddingVertical: 10,
  },
  dropdownText: {
    fontSize: 18,
    fontWeight: '500',
  },
});

