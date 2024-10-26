// import React, { useEffect, useState } from "react";
// import FontAwesome from "@expo/vector-icons/FontAwesome";
// import { Tabs, router } from "expo-router";
// import { ActivityIndicator, View, Text, StyleSheet } from "react-native";
// import { useAuth, useCart, useClientCollection, useClientProduct, useClientStore, useTheme } from "@dhuntleypro/afm-expo-library";
// import { store_id } from "@/app/_layout";

// function TabBarIconWithBadge(props: { name: React.ComponentProps<typeof FontAwesome>["name"]; color: string; quantity?: number }) {
//   const { colors } = useTheme(); // Pulling colors from the custom theme

//   const styles = StyleSheet.create({
//     badgeContainer: {
//       position: "absolute",
//       right: -6,
//       top: -3,
//       backgroundColor: colors.primary, // Set the badge color
//       borderRadius: 8,
//       width: 16,
//       height: 16,
//       justifyContent: "center",
//       alignItems: "center",
//     },
//     badgeText: {
//       color: "white",
//       fontSize: 10,
//       fontWeight: "bold",
//     },
//   });

//   return (
//     <View>
//       <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />
//       {props.quantity && props.quantity > 0 ? (
//         <View style={styles.badgeContainer}>
//           <Text style={styles.badgeText}>{props.quantity}</Text>
//         </View>
//       ) : null}
//     </View>
//   );
// }

// export default function TabLayoutContent() {
//   const { colors } = useTheme(); // Pulling colors from the custom theme
//   const { authState } = useAuth();
//   const { getClientProducts } = useClientProduct();
//   const { getClientStore } = useClientStore();
//   const { getClientCollections } = useClientCollection();
//   const { quantity } = useCart(); // Getting cart quantity from the useCart hook

//   const [isMounted, setIsMounted] = useState(false);
//   const [isCheckingAuth, setIsCheckingAuth] = useState(true);

//   useEffect(() => {
//     if (!isMounted) return;

//     const checkAuthStatus = async () => {
//       setIsCheckingAuth(true);
//       try {
//         if (authState?.authenticated) {
//           console.log("User authenticated, fetching data...");
//           await getClientProducts(store_id);
//           await getClientStore(store_id);
//           await getClientCollections(store_id);
//         } else {
//           await getClientStore(store_id);
//           router.replace("/welcome");
//         }
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setIsCheckingAuth(false);
//       }
//     };

//     checkAuthStatus();
//   }, [isMounted, authState]);

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   if (isCheckingAuth) {
//     return (
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <ActivityIndicator size="large" color={colors.primary} />
//       </View>
//     );
//   }

//   return (
//     <Tabs
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color }) => {
//           const iconColor = focused ? colors.tabIconSelected : colors.tabIconDefault;
//           let iconName: React.ComponentProps<typeof FontAwesome>["name"] = "question-circle";

//           switch (route.name) {
//             case "(home)":
//               iconName = "home";
//               break;
//             case "collections":
//               iconName = "gift";
//               break;
//             case "cart":
//               iconName = "shopping-cart";
//               break;
//             case "(settings)":
//               iconName = "gear";
//               break;
//           }

//           return (
//             <TabBarIconWithBadge
//               name={iconName}
//               color={iconColor}
//               quantity={route.name === "cart" ? quantity : undefined} // Only show badge on the cart tab
//             />
//           );
//         },
//         tabBarActiveTintColor: colors.tabIconSelected, // Using tabIconSelected from theme
//         tabBarInactiveTintColor: colors.tabIconDefault, // Using tabIconDefault from theme
//         tabBarStyle: { backgroundColor: colors.background }, // Set background color for tabs
//         headerShown: false, // Default behavior, header is hidden
//       })}
//     >
//       <Tabs.Screen
//         name="(home)"
//         options={{
//           title: "Home",
//        }}
//       />
//       <Tabs.Screen
//         name="collections"
//         options={{
//           title: "Collections",
//         }}
//       />
//       <Tabs.Screen
//         name="cart"
//         options={{
//           title: "Cart",
//           headerShown: true, // Show header specifically for the cart screen
//           headerStyle: {
//             backgroundColor:  colors.pageBackground, 
//           },
//           headerTintColor: colors.pageText
//         }}
//       />
//       <Tabs.Screen
//         name="(settings)"
//         options={{
//           title: "Settings",
//           headerStyle: {
//             backgroundColor:  colors.pageBackground, 
//           },
//           headerTintColor: colors.pageText
//         }}
//       />
//     </Tabs>
//   );
// }


// old - works
// import React, { useEffect, useState } from "react";
// import FontAwesome from "@expo/vector-icons/FontAwesome";
// import { Tabs, router } from "expo-router";
// import { ActivityIndicator, View, Text, StyleSheet } from "react-native";
// import { useAuth, useCart, useClientCollection, useClientProduct, useClientStore, useTheme } from "@dhuntleypro/afm-expo-library";
// import { store_id } from "@/app/_layout";

// function TabBarIconWithBadge(props: { name: React.ComponentProps<typeof FontAwesome>["name"]; color: string; quantity?: number }) {
//   const { colors } = useTheme(); // Pulling colors from the custom theme

  
  
// // Custom badge styling
// const styles = StyleSheet.create({
//   badgeContainer: {
//     position: "absolute",
//     right: -6,
//     top: -3,
//     backgroundColor: colors.primary, // Set the badge color to green
//     borderRadius: 8,
//     width: 16,
//     height: 16,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   badgeText: {
//     color: "white",
//     fontSize: 10,
//     fontWeight: "bold",
//   },
// });

//   return (
//     <View>
//       <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />
//       {props.quantity && props.quantity > 0 ? (
//         <View style={styles.badgeContainer}>
//           <Text style={styles.badgeText}>{props.quantity}</Text>
//         </View>
//       ) : null}
//     </View>
//   );
// }


// // let store_id = '{{STORE_ID}}'; // Example store ID

// // if (store_id.includes('STORE')) {
// //   store_id = "P5V8A9ZE";
// // }

// // const store_id = "P5V8A9ZE";

// export default function TabLayoutContent() {
//   const { colors } = useTheme(); // Pulling colors from the custom theme
//   const { authState } = useAuth();
//   const { getClientProducts } = useClientProduct();
//   const { getClientStore } = useClientStore();
//   const { getClientCollections } = useClientCollection();
//   const { quantity } = useCart(); // Getting cart quantity from the useCart hook

//   const [isMounted, setIsMounted] = useState(false);
//   const [isCheckingAuth, setIsCheckingAuth] = useState(true);

//   useEffect(() => {
//     if (!isMounted) return;

//     const checkAuthStatus = async () => {
//       setIsCheckingAuth(true);
//       if (authState) {
//         console.log("User authenticated, fetching data...");
//         await getClientProducts(store_id);
//         await getClientStore(store_id);
//         await getClientCollections(store_id);
//         // router.replace("/(tabs)" as never);

//       } else {
//         await getClientStore(store_id);
//         router.replace("/welcome" as never);
//       }
//       setIsCheckingAuth(false);
//     };

//     checkAuthStatus();
//   }, [isMounted, authState]);

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   if (isCheckingAuth) {
//     return (
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <ActivityIndicator size="large" color={colors.primary} />
//       </View>
//     );
//   }


//   return (
//     <Tabs
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color }) => {
//           const iconColor = focused ? colors.tabIconSelected : colors.tabIconDefault;
//           let iconName: React.ComponentProps<typeof FontAwesome>["name"] = "question-circle";

//           switch (route.name) {
//             case "(home)":
//               iconName = "home";
//               break;
//             case "collections":
//               iconName = "gift";
//               break;
//             case "cart":
//               iconName = "shopping-cart";
//               break;
//             case "(settings)":
//               iconName = "gear";
//               break;
//           }

//           return (
//             <TabBarIconWithBadge
//               name={iconName}
//               color={iconColor}
//               quantity={route.name === "cart" ? quantity : undefined} // Only show badge on the cart tab
//             />
//           );
//         },
//         tabBarActiveTintColor: colors.tabIconSelected, // Using tabIconSelected from theme
//         tabBarInactiveTintColor: colors.tabIconDefault, // Using tabIconDefault from theme
//         tabBarStyle: { backgroundColor: colors.background }, // Set background color for tabs
//         headerShown: false, // Default behavior, header is hidden
//       })}
//     >
//       <Tabs.Screen
//         name="(home)"
//         options={{
//           title: "Home",
//        }}
//       />
//       <Tabs.Screen
//         name="collections"
//         options={{
//           title: "Collections",

//         }}
//       />
//       <Tabs.Screen
//         name="cart"
//         options={{
//           title: "Cart",

//           headerShown: true, // Show header specifically for the cart screen
//           headerStyle: {
//             backgroundColor:  colors.pageBackground, 
//           },
//           headerTintColor: colors.pageText
//         }}
//       />
//       <Tabs.Screen
//         name="(settings)"
//         options={{
//           title: "Settings",
//           headerStyle: {
//             backgroundColor:  colors.pageBackground, 
//           },
//           headerTintColor: colors.pageText
//         }}
//       />
//     </Tabs>
//   );
// }



