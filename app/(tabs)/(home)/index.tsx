import { StyleSheet} from 'react-native'
import React from 'react'
import {HomeDesignOne, HomeDesignTwo} from "@dhuntleypro/afm-library"
import Pages from '@/core/routes';

const homeTab = () => {
  const HomePage = Pages.homePage; // Dynamically use component from the registry

  return (
    <HomePage />
    // <HomeDesignTwo />
  )
}

export default homeTab

const styles = StyleSheet.create({})













// import { StyleSheet } from 'react-native';

// import EditScreenInfo from '@/components/EditScreenInfo';
// import { Text, View } from '@/components/Themed';
// import getCurrentPath from '@/hooks/getCurrentPath';

// export default function HomeTabScreen() {
//   const currentPath = getCurrentPath()
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Home Tab</Text>
//       <Text>{currentPath}</Text>
//       <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
//       <EditScreenInfo path="app/(tabs)/index.tsx" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   separator: {
//     marginVertical: 30,
//     height: 1,
//     width: '80%',
//   },
// });
