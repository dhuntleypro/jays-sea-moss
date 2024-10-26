
import {  Stack } from "expo-router";
import { CartIcon, useTheme } from "@dhuntleypro/afm-expo-library";


export default function CollectionLayout() {
  const { colors } = useTheme();

  
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          
          title: "Collections",
          // headerBackground: colors.background,
          headerRight: () => (
            // Need
            <CartIcon />
          ),
          headerStyle: {
            backgroundColor:  colors.pageBackground, 
          },
          headerTintColor: colors.pageText
        }}
      />
      <Stack.Screen name="[collectionId]/products" options={{ title: "" }} />
    </Stack>
  );
}

// import React from 'react';
// import { TabLayout } from "@dhuntleypro/afm-expo-library";

// export default function LayoutForTabs() {
//   return <TabLayout />;
// }
