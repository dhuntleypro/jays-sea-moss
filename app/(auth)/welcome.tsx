import { StyleSheet } from 'react-native';
import React from 'react';
import Pages from '@/core/routes';

const Welcome = () => {
  const WelcomePage = Pages.welcome; // Dynamically use component from the registry

  return (
    <WelcomePage />

  );
};

export default Welcome;










// import { StyleSheet, Text, View } from 'react-native';
// import React from 'react';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { Link } from 'expo-router';

// const Welcome = () => {
//   return (
//     // <SafeAreaView>
//     <View style={styles.container}>
//      <Text>Welcome Page</Text>
//      <Link href={'/login'}>go to login</Link>
//      <Link href={'/register'}>go to register</Link>
// </View>
//     // </SafeAreaView>
//   );
// };

// export default Welcome;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingTop: 100
//   },
// });
