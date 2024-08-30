import { StyleSheet, Text, TouchableOpacity, useColorScheme, View } from "react-native";
import React, { useContext } from "react";
import { router, Stack } from "expo-router";
import { Fontisto, Feather, Ionicons } from "@expo/vector-icons";
import { COLORS, CartContext } from "@dhuntleypro/afm-library"

const HomeLayout = () => {
  const { quantity} = useContext(CartContext)
  const colorScheme = useColorScheme();

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
         
        }}
      />

      <Stack.Screen
        name="(drawer)"
        options={{
          title: "Home",
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="search"
        options={{
          title: "Search",
          // headerLeft: () => (
          //   <TouchableOpacity style={styles.backButton}>
          //     <Ionicons name="arrow-back" size={24} color="black" />
          //   </TouchableOpacity>
          // ),
        }}
      />

      <Stack.Screen
        name="products"
        options={{
          title: "Products",
          headerRight: () => ( // Need
            <TouchableOpacity
              style={styles.cartButton}
              onPress={() => router.push("/cart")}
            >
              <Fontisto name="shopping-bag" size={24} />
              <View style={styles.cartCount}>
                <Text style={styles.cartNumber}>{quantity}</Text>
              </View>
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
};

export default HomeLayout;

const styles = StyleSheet.create({
  backButton: {
    marginLeft: 8, // Adjust margin to position the back button
  },
  cartButton: {
    alignItems: "flex-end",
    marginRight: 10,
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
    zIndex: 999,
  },
  cartNumber: {
    fontFamily: "regular",
    fontWeight: "600",
    fontSize: 10,
    color: COLORS.lightWhite,
  },
});
