


// // working....
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { AuthProvider, CartProvider, ClientCollectionProvider, ClientOrderProvider, ClientProductProvider, ClientStoreProvider, FavoriteProvider, ThemeProvider, useAuth, useClientProduct, useClientStore, useTheme } from '@dhuntleypro/afm-expo-library';
import { Stack, useRouter, useSegments, Slot } from 'expo-router';  // Ensure Slot is imported
import { useEffect } from 'react';
import { storeTheme } from '@/theme/storeTheme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';

export const store_id = 'P5V8A9ZE';

// const StackLayout = () => {
//   const { colors } = useTheme();
//   const { authState } = useAuth();
//   const segments = useSegments();
//   const router = useRouter();
//   const { isLoading, store, getClientStore } = useClientStore();
//   const { products, getClientProducts } = useClientProduct();

//   // useEffect(() => {
//   //   const inAuthGroup = segments[0] === '(tabs)'; // protected

//   //   if (authState?.authenticated === false && inAuthGroup) {
//   //     getClientStore(store_id);
//   //     router.replace('/login');  // Navigate to login only if authenticated is false
//   //   } else if (authState?.authenticated === true) {
//   //     router.replace('/(tabs)');  // Navigate to tabs if authenticated is true
//   //   }
//   // }, [authState, segments, router]);  // Add router and segments to the dependency array


//   return (
//     <Stack>
//       <Stack.Screen name="(aux)" options={{ headerShown: false ,  presentation: 'modal'}} />
//       <Stack.Screen name="(auth)" options={{ headerShown: false }} />
//       <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//     </Stack>
//   );
// };

export default function RootLayout() {
  return (
    <AppProviders>
      {/* <NavigationContainer> */}
        <Slot />
        {/* </NavigationContainer> */}
    </AppProviders>
  );
}

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <FavoriteProvider storage={AsyncStorage} storageKey={'user_favorites'}>
        <CartProvider storage={AsyncStorage} storageKey={'user_carts'}>
          <ClientStoreProvider>
            <ClientCollectionProvider>
              <ClientProductProvider>
                <ClientOrderProvider>
                <ThemeProvider
                    storage={AsyncStorage}
                    storageKey={'user_theme'}
                    storeTheme={storeTheme}
                  >
                  {children}
                  </ThemeProvider>
                </ClientOrderProvider>
              </ClientProductProvider>
            </ClientCollectionProvider>
          </ClientStoreProvider>
        </CartProvider>
      </FavoriteProvider>
    </AuthProvider>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#000',
  },
});

