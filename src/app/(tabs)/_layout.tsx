import React, { useState } from 'react';
import { Redirect } from 'expo-router';
import { useAuth } from '@/contexts/AuthContext';
// import { AuthenticatedTabs } from '@/components/AuthenticatedTabs';
import { LoadingScreen } from '@/components/LoadingScreen';
import AuthenticatedTabs from '@/components/AuthenticatedTabs';
// import { AuthenticatedTabs } from './AuthenticatedTabs';
// import { LoadingScreen } from './LoadingScreen';

export default function TabLayout() {
  const { authState } = useAuth();
  const [isLoaded, setIsLoaded] = useState(false);

  if (!isLoaded) {
    return <LoadingScreen onLoaded={() => setIsLoaded(true)} />;
  }

  return authState?.authenticated ? <AuthenticatedTabs /> : <Redirect href="/welcome" />;
}















// import React from 'react';
// import FontAwesome from '@expo/vector-icons/FontAwesome';
// import { Link, Redirect, router, Tabs } from 'expo-router';
// import { Platform, Pressable, View } from 'react-native';

// import Colors from '@/constants/Colors';
// import { useColorScheme } from '@/hooks/useColorScheme';
// import { useClientOnlyValue } from '@/hooks/useClientOnlyValue';
// import { useAuth } from '@/contexts/AuthContext';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { Text } from 'react-native';

// // You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
// function TabBarIcon(props: {
//   name: React.ComponentProps<typeof FontAwesome>['name'];
//   color: string;
// }) {
//   return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
// }





// export default function TabLayout() {
//   const colorScheme = useColorScheme();
//   const { authState } = useAuth()

//   return (

    
//     // Show Login / Register
//     authState?.authenticated ? (

//     // Show Tab Home Screen
//     <Tabs
//       screenOptions={{
//         // remove tab bar from website
//         tabBarStyle: Platform.OS === 'web' ? { display: 'none' } : {},
//         tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
//         // Disable the static render of the header on web
//         // to prevent a hydration error in React Navigation v6.
//         headerShown: useClientOnlyValue(false, true),
        
          
       
//       }}>
//       <Tabs.Screen
//         name="(home)"
//         options={{
//           title: 'Home',
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
//     ) : (
//       <Redirect href="/welcome" />

//     )
//   );
// }
