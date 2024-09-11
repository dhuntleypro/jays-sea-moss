import React from "react";
import { Stack } from "expo-router";

const ButtonLayout = () => {

  return (
    <Stack>
      <Stack.Screen
        name="button-controller"
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

