import { StyleSheet } from "react-native";
import { Stack } from "expo-router";

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
