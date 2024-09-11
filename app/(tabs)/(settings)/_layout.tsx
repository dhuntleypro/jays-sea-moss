import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const ProductsLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="settings"
        options={{
          title: "Settings",
          // headerShown: false
        }}
      />

      <Stack.Screen
        name="faq"
        options={{
          title: "FAQ",
        }}
      />

      <Stack.Screen
        name="profile"
        options={{
          // headerShown: false
          title: "Profile",
        }}
      />

      <Stack.Screen
        name="favorites"
        options={{
          title: "Favorites",
          // headerShown: false
        }}
      />

      <Stack.Screen
        name="appearance"
        options={{
          title: "Appearance",
          // headerShown: false
        }}
      />
    </Stack>
  );
};

export default ProductsLayout;

const styles = StyleSheet.create({});
