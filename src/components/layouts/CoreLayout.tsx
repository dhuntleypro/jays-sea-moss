import { StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Stack } from "expo-router";
import { useMankindProduct } from "@/contexts/MankindProductContext";

const CoreLayout = () => {
  const { authState } = useAuth();

  if (authState.authenticated) {
    return (
      <Stack
        screenOptions={{
          headerShown: false, // Hide headers globally
        }}
      >
        <Stack.Screen name="(tabs)" options={{}} />
        <Stack.Screen name="modal" options={{ presentation: "modal" }} />
      </Stack>
    );
  } else {
    return (
      <Stack
        screenOptions={{
          headerShown: false, // Hide headers globally
        }}
      >
        <Stack.Screen
          name="(auth)"
          options={{
            presentation: "fullScreenModal", // Full-screen modal presentation
          }}
        />
       
      </Stack>
    );
  }
};

export default CoreLayout;

const styles = StyleSheet.create({});
