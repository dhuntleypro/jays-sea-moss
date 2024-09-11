import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { DrawerActions, useNavigation } from "@react-navigation/native";

const ComponentLayout = () => {
  const router = useRouter();
  const navigation = useNavigation();

  return (
    <Stack>
      <Stack.Screen
        name="component-library-dashboard"
        options={{
          title: "Components",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
              style={styles.drawerButton}
            >
              <Ionicons name="menu" size={24} color="black" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
              style={styles.drawerButton}
            >
             <Text>X</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen name="lib-buttons" />
      <Stack.Screen name="lib-views" />
      <Stack.Screen name="lib-products" />
      <Stack.Screen name="lib-orders" />
    
      
    </Stack>
  );
};

export default ComponentLayout;

const styles = StyleSheet.create({
  drawerButton: {
    marginLeft: 10,
  },
});
