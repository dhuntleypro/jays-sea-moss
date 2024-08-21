import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import Footer from '@/components/web/Footer'
import TopHeader from '@/components/web/TopHeader'
const TabLayout = () => {
  return (
<>

       
   <Tabs>
    <Tabs.Screen 
      name='(home)' // 'home'
      options={{
        headerShown: false,
        tabBarLabel: 'Home',
        tabBarIcon : ({size, color }) => <Ionicons name='square' size={size} color={color} />
      }}
      
    />
      <Tabs.Screen 
      name='client-orders'
      options={{
        headerShown: false,
        tabBarLabel: 'Orders',
        tabBarIcon : ({size, color }) => <Ionicons name='newspaper' size={size} color={color} />
      }}
      />
     <Tabs.Screen 
      name='client-products'
      options={{
        headerShown: false,
        tabBarLabel: 'Products',
        tabBarIcon : ({size, color }) => <Ionicons name='person' size={size} color={color} />
      }}
      />
       <Tabs.Screen 
      name='settings'
      options={{
        // href:null,
        headerShown: false,
        tabBarLabel: 'Settings',
        tabBarIcon : ({size, color }) => <Ionicons name='settings-outline' size={size} color={color} />
      }}
    /> 
    </Tabs>
    
    </>
  )
}

export default TabLayout

const styles = StyleSheet.create({})













// import React from 'react';
// import FontAwesome from '@expo/vector-icons/FontAwesome';
// import { Link, Tabs } from 'expo-router';
// import { Pressable } from 'react-native';

// import Colors from '@/constants/Colors';
// import { useColorScheme } from '@/hooks/useColorScheme';
// import { useClientOnlyValue } from '@/hooks/useClientOnlyValue';

// // You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
// function TabBarIcon(props: {
//   name: React.ComponentProps<typeof FontAwesome>['name'];
//   color: string;
// }) {
//   return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
// }

// export default function TabLayout() {
//   const colorScheme = useColorScheme();

//   return (
//     <Tabs
//       screenOptions={{
//         tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
//         // Disable the static render of the header on web
//         // to prevent a hydration error in React Navigation v6.
//         headerShown: useClientOnlyValue(false, true),
//       }}>
//       <Tabs.Screen
//         name= "one" // "index"
//         options={{
//           title: 'Tab One',
//           tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
//           headerRight: () => (
//             <Link href="/modal" asChild>
//               <Pressable>
//                 {({ pressed }) => (
//                   <FontAwesome
//                     name="info-circle"
//                     size={25}
//                     color={Colors[colorScheme ?? 'light'].text}
//                     style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
//                   />
//                 )}
//               </Pressable>
//             </Link>
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="two"
//         options={{
//           title: 'Tab Two',
//           tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
//         }}
//       />
//     </Tabs>
//   );
// }
