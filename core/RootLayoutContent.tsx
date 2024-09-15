import FontAwesome from "@expo/vector-icons/FontAwesome";
import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import registerNNPushToken from 'native-notify';
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  AuthProvider,
  CartProvider,
  ClientProductProvider,
  ClientStoreProvider,
  ClientCollectionProvider,
  ClientOrderProvider,
  ThemeProvider,
  FavoriteProvider,
  StoreTheme,
  useColorScheme
} from "@dhuntleypro/afm-library";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { storeTheme } from "@/core/storeTheme";

export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
  initialRouteName: "(tabs)",
};

const CARTS_KEY = "user_carts"; // Key for storing carts in AsyncStorage

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <FavoriteProvider storage={AsyncStorage} storageKey={"user_favorites"}>
        <CartProvider storage={AsyncStorage} storageKey={"user_carts"}>
          <AuthProvider>
            <ClientStoreProvider>
              <ClientCollectionProvider>
                <ClientProductProvider>
                  <ClientOrderProvider>{children}</ClientOrderProvider>
                </ClientProductProvider>
              </ClientCollectionProvider>
            </ClientStoreProvider>
          </AuthProvider>
        </CartProvider>
      </FavoriteProvider>
    </GestureHandlerRootView>
  );
};

export default function RootLayoutContent() {

  // Font
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Push notification 
  registerNNPushToken(23537, 'Fo2iQO685zeNlxWUhDszIC');


  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      try {
        SplashScreen.hideAsync();
      } catch (error) {
        console.error("Error hiding the splash screen:", error);
      }
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}


function RootLayoutNav() {
  const colorScheme = useColorScheme();

  // Log theme value for debugging
  console.log("Color Scheme:", colorScheme);

  const theme = colorScheme === "dark" ? DarkTheme : DefaultTheme;

  return (
    <AppProviders>
      {/* <ThemeProvider storage={AsyncStorage} storageKey={"user_theme"} value={colorScheme === "dark" ? DarkTheme : DefaultTheme}> */}
      <ThemeProvider
        storage={AsyncStorage}
        storageKey={"user_theme"}
        storeTheme={storeTheme}
      >
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          {/* <Stack.Screen name="modal" options={{ presentation: "modal" }} /> */}
          <Stack.Screen
            name="(auth)"
            options={{ presentation: "modal", headerShown: false }}
          />
          <Stack.Screen
            name="(aux)/privacy-policy"
            options={{ title: "Privacy Policy", presentation: "modal" }}
          />
          <Stack.Screen
            name="(aux)/terms-of-use"
            options={{ title: "Terms Of Use", presentation: "modal" }}
          />
        </Stack>
      </ThemeProvider>
    </AppProviders>
  );
}
