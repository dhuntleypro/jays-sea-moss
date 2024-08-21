import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { DrawerActions, useNavigation } from "@react-navigation/native";

const ButtonLayout = () => {

  return (
    <Stack>
      <Stack.Screen
        name="view-controller"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="[roundedButton]"
        options={{
          headerShown: false,
          
        }}
      />
    </Stack>
  );
};

export default ButtonLayout;

const styles = StyleSheet.create({
  drawerButton: {
    marginLeft: 10,
  },
});
