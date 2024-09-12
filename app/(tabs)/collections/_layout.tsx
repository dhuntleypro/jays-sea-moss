import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import React, { useContext } from "react";
import { router, Stack } from "expo-router";
import { Fontisto, Feather, Ionicons } from "@expo/vector-icons";
import { CartIcon, useCart, useTheme } from "@dhuntleypro/afm-library";
// import { useCart } from "@/contexts/CartContext";
// import { useTheme } from "@/contexts/ThemeContext"

export default function CollectionLayout() {
  const { colors } = useTheme();

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
      backgroundColor: colors.primary,
      justifyContent: "center",
      zIndex: 999,
    },
    cartNumber: {
      fontFamily: "regular",
      fontWeight: "600",
      fontSize: 10,
      color: colors.title,
    },
  });

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Collections",
          headerRight: () => (
            // Need
            <CartIcon />
          ),
        }}
      />
      <Stack.Screen name="[collectionId]/products" options={{ title: "" }} />
    </Stack>
  );
}

// import React from 'react';
// import { TabLayout } from "@dhuntleypro/afm-library";

// export default function LayoutForTabs() {
//   return <TabLayout />;
// }
