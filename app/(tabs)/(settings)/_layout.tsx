import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { useTheme } from "@dhuntleypro/afm-expo-library";


const ProductsLayout = () => {
  const { colors } = useTheme()
  return (
    <Stack>
      <Stack.Screen
        name="settings"
        options={{
          title: "Settings",
          headerStyle: {
            backgroundColor:  colors.pageBackground, 
          },
          headerTintColor: colors.pageText
          // headerShown: false
        }}
      />

      <Stack.Screen
        name="faq"
        options={{
          title: "FAQ",
          headerStyle: {
            backgroundColor:  colors.pageBackground, 
          },
          headerTintColor: colors.pageText
        }}
      />

      <Stack.Screen
        name="profile"
        options={{
          // headerShown: false
          title: "Profile",
          headerStyle: {
            backgroundColor:  colors.pageBackground, 
          },
          headerTintColor: colors.pageText
        }}
      />

      <Stack.Screen
        name="favorites"
        options={{
          title: "Favorites",
          headerStyle: {
            backgroundColor:  colors.pageBackground, 
          },
          headerTintColor: colors.pageText
          // headerShown: false
        }}
      />

      <Stack.Screen
        name="appearance"
        options={{
          title: "Appearance",
          headerStyle: {
            backgroundColor:  colors.pageBackground, 
          },
          headerTintColor: colors.pageText
          // headerShown: false
        }}
      />
    </Stack>
  );
};

export default ProductsLayout;

const styles = StyleSheet.create({});
