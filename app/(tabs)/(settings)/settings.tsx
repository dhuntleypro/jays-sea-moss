import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import SettingsPageWeb from '@/components/pages/settings/SettingsPage.web'
// import SettingsPage from '@/components/TestViews/AccountPage'
// import SettingsPageWeb from '@/components/pages/settings/SettingsPage.web'
import {SettingsPage} from "@dhuntleypro/afm-library"

const settings = () => {
  return (
    // If different from normal settings page - use .web

    <SettingsPage />
    // <Text>Setting...</Text>
  )
}

export default settings

const styles = StyleSheet.create({})





// // If mobile and web is different

// // Make sure to also create the folder in components

// export {default} from '@/components/pages/settings/SettingsPage' 



// import React from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';
// import { useAuth } from '@/contexts/AuthContext';
// import { useRouter } from 'expo-router';

// const SettingsPage = () => {
//   const { authState, onLogout } = useAuth();
//   const router = useRouter();

//   const handleLogOut = async () => {
//     try {
//       await onLogout();
//       router.replace('/welcome'); // Navigate to the welcome screen after logout
//     } catch (error) {
//       console.error('Logout failed:', error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Settings</Text>
//       <Text style={styles.header}>{authState.user?.id}</Text>
//       <Button title="Log Out" onPress={handleLogOut} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 16,
//   },
//   header: {
//     fontSize: 24,
//     marginBottom: 24,
//   },
// });

// export default SettingsPage;

