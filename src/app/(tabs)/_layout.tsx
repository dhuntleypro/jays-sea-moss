import React, { useState, useEffect } from 'react';
import { router } from 'expo-router';
import { useAuth } from '@/contexts/AuthContext';
import { View, Text } from 'react-native';
import { LoadingScreen } from '@/components/LoadingScreen';
// import WelcomePageTwo from '@/components/WelcomePageTwo';
import AuthenticatedTabs from '@/components/AuthenticatedTabs';
import WelcomePageTwo from '@/components/pages/welcome/WelcomePageTwo';

export default function TabLayout() {
  const { authState } = useAuth();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      console.log("Auth State:", authState);
      if (authState.authenticated) {
        router.replace('/(tabs)');
      } else {
        router.replace('/welcome');
      }
    }
  }, [isLoaded, authState.authenticated]);

  if (!isLoaded) {
    return <LoadingScreen onLoaded={() => setIsLoaded(true)} />;
  }

  return authState.authenticated ? router.replace('/(tabs)'): router.replace('/welcome');

}


// import React, { useState } from 'react';
// import { Redirect, router } from 'expo-router';
// import { useAuth } from '@/contexts/AuthContext';
// // import { AuthenticatedTabs } from '@/components/AuthenticatedTabs';
// import { LoadingScreen } from '@/components/LoadingScreen';
// import { Text, View } from 'react-native';
// import AuthenticatedTabs from '@/components/AuthenticatedTabs';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import Welcome from '../welcome';
// import WelcomePageOne from '@/components/pages/welcome/WelcomePageOne';
// import WelcomePageTwo from '@/components/pages/welcome/WelcomePageTwo';
// // import { AuthenticatedTabs } from './AuthenticatedTabs';
// // import { LoadingScreen } from './LoadingScreen';

// export default function TabLayout() {
//   const { authState } = useAuth();
//   const [isLoaded, setIsLoaded] = useState(false);

//   if (!isLoaded) {
//     return <LoadingScreen onLoaded={() => setIsLoaded(true)} />;
//   }

//   // return authState?.authenticated ? <AuthenticatedTabs /> : <Redirect href="/welcome" />;
//   // return authState?.authenticated ? <AuthenticatedTabs /> : router.push("/welcome");

//   // return <View><Text>yoooo</Text></View>

  
//   if (isLoaded) {
//      return authState?.authenticated ? <AuthenticatedTabs /> : <WelcomePageTwo/>;


//   }

// }















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
