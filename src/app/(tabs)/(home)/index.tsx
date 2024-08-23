// import { StyleSheet, View, ActivityIndicator } from 'react-native';
// import React, { useEffect, useState } from 'react';
// import HomeDesignTwo from '@/components/library/home/HomeDesignTwo';
// import { useAuth } from '@/contexts/AuthContext'; // Import your Auth context
// import { Redirect } from 'expo-router';
// import WelcomePageTwo from '@/components/pages/welcome/WelcomePageTwo';

// const Index = () => {
//   const { authState } = useAuth(); // Access the authState from your context
//   const [isReady, setIsReady] = useState(false);

//   useEffect(() => {
//     if (authState?.authenticated !== null) {
//       setIsReady(true);
//     }
//   }, [authState?.authenticated]);

//   // Handle loading state or when authState is not yet defined
//   if (!isReady) {
//     return (
//       <View style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="#0000ff" />
//       </View>
//     );
//   }

//   // Render based on authentication state
//   return authState?.authenticated ? (
//     <HomeDesignTwo />
//   ) : (
//     // <Redirect href="/welcome" />
    
//     <WelcomePageTwo />
//   );
// };

// export default Index;
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import HomeDesignTwo from '@/components/library/home/HomeDesignTwo';
import { useAuth } from '@/contexts/AuthContext';
import { Redirect } from 'expo-router';
import WelcomePageTwo from '@/components/pages/welcome/WelcomePageTwo';

const Index = () => {
  const { authState } = useAuth(); // Access the authState from your context
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (authState?.authenticated !== null) {
      setIsReady(true);
    }
  }, [authState?.authenticated]);

  // Handle loading state or when authState is not yet defined
  if (!isReady) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  // Render based on authentication state
  return authState?.authenticated ? (
    <Redirect href="/(tabs)/(home)/(drawer)/home" />
  ) : (
    <Redirect href="/welcome" />
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import HomeDesignTwo from '@/components/library/home/HomeDesignTwo'
// import { useAuth } from '@/contexts/AuthContext' // Import your Auth context
// import { Redirect } from 'expo-router'

// const Index = () => {
//   const { authState } = useAuth(); // Access the authState from your context

//   // give it time to
 
//   return (
//     <View style={styles.container}>
//       {authState?.authenticated === true ? (
//         <HomeDesignTwo />
//       ) : (
//         <Redirect href="/welcome" />
//       )}
//     </View>
//   );
// }

// export default Index;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   defaultView: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
