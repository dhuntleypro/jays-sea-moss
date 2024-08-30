import { StyleSheet, View } from 'react-native';
import React from 'react';
import {WelcomePageTwo} from "@dhuntleypro/afm-library"

const Welcome = () => {
  return (
    <View style={styles.container}>
      <WelcomePageTwo />
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});











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
