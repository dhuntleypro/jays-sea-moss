

import React, { useEffect } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Stack, Tabs } from "expo-router";


export default function CollectionLayout() {

  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Collections'  }} />
      <Stack.Screen name="[collectionId]/products" options={{ title: '' }} />
  </Stack>
  );
}



// import React from 'react';
// import { TabLayout } from "@dhuntleypro/afm-library";

// export default function LayoutForTabs() {
//   return <TabLayout />;
// }


