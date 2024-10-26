import { StyleSheet } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { BackButton } from "@dhuntleypro/afm-expo-library";
const _layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="cookies-policy"
        options={{
          title: "Cookies Policy",
          headerLeft: () => <BackButton title={"Settings"} />,
        }}
      />
      <Stack.Screen
        name="privacy-policy"
        options={{
          title: "Privacy Policy",
          headerLeft: () => <BackButton title={"Settings"} />,
        }}
      />
      <Stack.Screen
        name="terms-of-use"
        options={{
          title: "Terms of Use",
          headerLeft: () => <BackButton title={"Settings"} />,
        }}
      />

      {/* model not working  */}
      {/* <Stack.Screen name="cookies-policy" options={{ title: "Cookies Policy" , presentation: 'modal' }} />
        <Stack.Screen name="privacy-policy" options={{title: "Privacy Policy" ,  presentation: 'modal' }} />
        <Stack.Screen name="terms-of-use" options={{ title: "Terms of Use" ,  presentation: 'modal' }} /> */}
    </Stack>
  );
};

export default _layout;

const styles = StyleSheet.create({});
