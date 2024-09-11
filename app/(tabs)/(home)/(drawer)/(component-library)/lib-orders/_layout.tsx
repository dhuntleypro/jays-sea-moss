import React from "react";
import { Stack } from "expo-router";

const ButtonLayout = () => {

  return (
    <Stack>
      <Stack.Screen
        name="controller"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="[id]"
        options={{
          headerShown: false,
          
        }}
      />
    </Stack>
  );
};

export default ButtonLayout;

