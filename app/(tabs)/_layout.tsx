import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TabLayoutContent from '@/core/TabLayoutContent'
// import { TabLayoutContent } from '@dhuntleypro/afm-library'
// import TabLayoutContent from '@/core/TabLayoutContent'

const TabLayout = () => {
  return (
    <TabLayoutContent />
  )
}

export default TabLayout

const styles = StyleSheet.create({})


// import React, { useEffect, useState } from "react";
// import FontAwesome from "@expo/vector-icons/FontAwesome";
// import { Link, router, Tabs } from "expo-router";
// import { Pressable, ActivityIndicator, View } from "react-native";

// // import Colors from "@/constants/Colors";
// import { useColorScheme } from "@/components/useColorScheme";
// import { useClientOnlyValue } from "@/components/useClientOnlyValue";
// import { useAuth, useClientCollection, useClientProduct, useClientStore , COLORS} from "@dhuntleypro/afm-library";
// import { CONSTANTS } from "@/constants/constants";

// function TabBarIcon(props: {
//   name: React.ComponentProps<typeof FontAwesome>["name"];
//   color: string;
// }) {
//   return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
// }

// export default function TabLayout() {
//   const colorScheme = useColorScheme();
//   const { authState } = useAuth();
//   const { getClientProducts } = useClientProduct(); 
//   const { getClientStore } = useClientStore();
//   const { getClientCollections } = useClientCollection();
  
//   const [isMounted, setIsMounted] = useState(false);
//   const [isCheckingAuth, setIsCheckingAuth] = useState(true); // Add loading state

//   useEffect(() => {
//     if (!isMounted) return;
  
//     const checkAuthStatus = async () => {
//       setIsCheckingAuth(true); // Set loading state to true
//       if (authState?.authenticated) {
//         console.log("User authenticated, fetching data...");
//         await getClientProducts(CONSTANTS.store_id); 
//         await getClientStore(CONSTANTS.store_id);
//         await getClientCollections(CONSTANTS.store_id);
//       } else {
//         await getClientStore(CONSTANTS.store_id);
//         router.replace("/welcome"); // Redirect to the welcome page if not authenticated
//       }
//       setIsCheckingAuth(false); // Set loading state to false after auth check
//     };
  
//     checkAuthStatus();
//   }, [isMounted, authState]);

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   if (isCheckingAuth) {
//     // Display loading spinner while checking authentication status
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <ActivityIndicator size="large" color={COLORS[colorScheme ?? "light"].tint} />
//       </View>
//     );
//   }

//   return (
//     <Tabs
//       screenOptions={{
//         tabBarActiveTintColor: COLORS[colorScheme ?? "light"].tint,
//         headerShown: useClientOnlyValue(false, true),
//       }}
//     >
//       <Tabs.Screen
//         name="(home)"
//         options={{
//           title: "Home",
//           headerShown: false,
//           tabBarIcon: ({ color }) => <TabBarIcon name="square" color={color} />,
//           headerRight: () => (
//             <Link href="/modal" asChild>
//               <Pressable>
//                 {({ pressed }) => (
//                   <FontAwesome
//                     name="info-circle"
//                     size={25}
//                     color={COLORS[colorScheme ?? "light"].text}
//                     style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
//                   />
//                 )}
//               </Pressable>
//             </Link>
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="collections"
//         options={{
//           title: "Collections",
//           headerShown: false,
//           tabBarIcon: ({ color }) => <TabBarIcon name="gift" color={color} />,
//         }}
//       />
//       <Tabs.Screen
//         name="cart"
//         options={{
//           title: "Cart",
//           tabBarIcon: ({ color }) => <TabBarIcon name="shopping-cart" color={color} />,
//         }}
//       />
//       <Tabs.Screen
//         name="(settings)"
//         options={{
//           title: "Settings",
//           headerShown: false,
//           tabBarIcon: ({ color }) => <TabBarIcon name="gear" color={color} />,
//         }}
//       />
//     </Tabs>
//   );
// }
