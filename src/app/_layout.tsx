import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import React from "react";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProductProvider } from "@/contexts/ProductContext";
import { OrderProvider } from "@/contexts/OrderContext";
// import { StoreProvider } from '@/contexts/StoreContext';
import { ClientStoreProvider } from "@/contexts/ClientStoreContext";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
// import { ProductProvider } from '@/contexts/ProductContext';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "index", // "/home" //"index" // '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
   
      <AuthProvider>
        <ClientStoreProvider>
          <ProductProvider>
            <OrderProvider>
              <ThemeProvider
                value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
              >
                <Stack>
                  {/* <Stack.Screen name="onboarding" options={{ presentation:  'fullScreenModal' , headerShown: false}} /> */}
                  <Stack.Screen
                    name="(tabs)"
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="modal"
                    options={{ presentation: "modal" }}
                  />
                  <Stack.Screen
                    name="login"
                    options={{
                      presentation: "fullScreenModal",
                      headerShown: false,
                    }}
                  />
                   <Stack.Screen
                    name="welcome"
                    options={{
                      presentation: "fullScreenModal",
                      headerShown: false,
                    }}
                  />
                    <Stack.Screen
                    name="register"
                    options={{
                      presentation: "fullScreenModal",
                      headerShown: false,
                    }}
                  />
                  {/* <Stack.Screen name="register" options={{ presentation: 'fullScreenModal' }} /> */}
                  {/* <Stack.Screen name="register" options={{ presentation: 'fullScreenModal' }} /> */}
                  {/* <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
                <Stack.Screen name="modal" options={{ presentation: 'modal' }} /> */}
                </Stack>
              </ThemeProvider>
            </OrderProvider>
          </ProductProvider>
        </ClientStoreProvider>
      </AuthProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});