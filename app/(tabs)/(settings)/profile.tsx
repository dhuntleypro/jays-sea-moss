import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Pages from '@/core/routes';

const profile = () => {
    const ProfilePage = Pages.profile; // Dynamically use component from the registry

  return (
    <ProfilePage />
  )
}

export default profile

const styles = StyleSheet.create({})




// import React, { useState, useCallback } from 'react';
// import { Alert, ScrollView, View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, TextInput } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import { useAuth, AWS_HOLDER_IMAGE, UserProps } from "@dhuntleypro/afm-library";
// import { Ionicons } from "@expo/vector-icons";
// import { useTheme } from '@react-navigation/native'; // Assuming useTheme is coming from your custom theme

// const { width } = Dimensions.get('window');

// const ProfilePage: React.FC = () => {
//   const { authState, updateSingleUserItem } = useAuth();
//   const { colors } = useTheme();
//   const styles = createStyles(colors)


//   const [name, setName] = useState(authState?.user?.name || '');
//   const [email] = useState(authState?.user?.email || ''); // Email not editable
//   const [address, setAddress] = useState(authState?.user?.address || '');
//   const [addressCity, setAddressCity] = useState(authState?.user?.address_city || '');
//   const [addressState, setAddressState] = useState(authState?.user?.address_state || '');
//   const [addressZip, setAddressZip] = useState(authState?.user?.address_zip || '');
//   const [profileImage, setProfileImage] = useState(authState?.user?.profile_image || AWS_HOLDER_IMAGE);

//   const handleProfileImagePick = async () => {
//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [4, 4],
//       quality: 1,
//     });

//     if (!result.canceled) {
//       setProfileImage(result.assets[0].uri);
//     }
//   };

//   // Function to check if the current value is different from the original value
//   const isDifferent = (currentValue: any, originalValue: any) => currentValue !== originalValue;

//   // Function to update only changed fields
//   const saveProfileChanges = useCallback(async () => {
//     const user = authState?.user;

//     const updateField = async (field: keyof UserProps, value: any) => {
//       if (user && isDifferent(user[field], value)) {
//         try {
//           await updateSingleUserItem(field, value); // TypeScript knows that `field` is a valid `keyof UserProps`
//           console.log(`${String(field)} updated successfully`);
//         } catch (error) {
//           console.error(`Failed -- to update ${String(field)}:`, error);
//         }
//       }
//     };

//     // Save changes for each field that has been modified
//     await Promise.all([
//       updateField('name', name),
//       updateField('address', address),
//       updateField('address_city', addressCity),
//       updateField('address_state', addressState),
//       updateField('address_zip', addressZip),
//       updateField('profile_image', profileImage)
//     ]);

//     Alert.alert("Profile updated successfully!");
// }, [authState?.user, name, address, addressCity, addressState, addressZip, profileImage, updateSingleUserItem]);
// // }, [authState?.user, address, updateSingleUserItem]);

//   return (
//     <ScrollView>
//       <View style={styles.container}>
//         <View style={styles.card}>
//           <View style={styles.profileSection}>
//             <TouchableOpacity onPress={handleProfileImagePick}>
//               <Image
//                 source={{ uri: profileImage }}
//                 style={styles.profileImage}
//               />
//             </TouchableOpacity>
//             <Text style={styles.name}>{authState?.user?.name}</Text>
//             <Text style={styles.title}>Edit your profile information</Text>
//           </View>
//         </View>

//         {/* Editable Fields */}
//         <View style={styles.inputContainer}>
//           <Ionicons name="person-outline" size={20} color={colors.text} />
//           <TextInput
//             placeholder="Name"
//             onChangeText={setName}
//             value={name}
//             style={styles.input}
//             placeholderTextColor={colors.border}
//           />
//         </View>

//         {email && (
//           <View style={styles.inputContainer}>
//             <Ionicons name="mail-outline" size={20} color={colors.text} />
//             <TextInput
//               placeholder="Email"
//               value={email}
//               style={styles.input}
//               editable={false} // Ensure email is not editable
//               placeholderTextColor={colors.border}
//             />
//           </View>
//         )}

//         <View style={styles.inputContainer}>
//           <Ionicons name="location-outline" size={20} color={colors.text} />
//           <TextInput
//             placeholder="Address"
//             onChangeText={setAddress}
//             value={address}
//             style={styles.input}
//             placeholderTextColor={colors.border}
//           />
//         </View>

//         <View style={styles.inputContainer}>
//           <Ionicons name="location-outline" size={20} color={colors.text} />
//           <TextInput
//             placeholder="City"
//             onChangeText={setAddressCity}
//             value={addressCity}
//             style={styles.input}
//             placeholderTextColor={colors.border}
//           />
//         </View>

//         <View style={styles.inputContainer}>
//           <Ionicons name="location-outline" size={20} color={colors.text} />
//           <TextInput
//             placeholder="State"
//             onChangeText={setAddressState}
//             value={addressState}
//             style={styles.input}
//             placeholderTextColor={colors.border}
//           />
//         </View>

//         <View style={styles.inputContainer}>
//           <Ionicons name="location-outline" size={20} color={colors.text} />
//           <TextInput
//             placeholder="ZIP Code"
//             onChangeText={setAddressZip}
//             value={addressZip}
//             style={styles.input}
//             placeholderTextColor={colors.border}
//           />
//         </View>

//         <TouchableOpacity style={styles.saveButton} onPress={saveProfileChanges}>
//           <Text style={styles.saveButtonText}>Save Profile</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// };

// // Create styles dynamically based on the theme colors
// const createStyles = (colors: any) => StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: colors.background,
//   },
//   card: {
//     width: width * 0.9,
//     backgroundColor: colors.card,
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 5,
//     elevation: 3,
//     paddingTop: 10,
//   },
//   profileSection: {
//     padding: 20,
//     alignItems: 'center',
//   },
//   profileImage: {
//     width: 120,
//     height: 120,
//     borderRadius: 60,
//     marginBottom: 20,
//   },
//   name: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: colors.text,
//     textAlign: 'center',
//     marginBottom: 10,
//   },
//   title: {
//     fontSize: 16,
//     color: colors.subtitle,
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   inputContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: colors.cardBackground,
//     padding: 15,
//     borderRadius: 15,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginVertical: 10,
//     width: width - 40,
//   },
//   input: {
//     flex: 1,
//     marginLeft: 10,
//     color: colors.text,
//   },
//   saveButton: {
//     backgroundColor: colors.primary,
//     paddingVertical: 15,
//     borderRadius: 30,
//     alignItems: 'center',
//     width: width - 40,
//     marginVertical: 20,
//   },
//   saveButtonText: {
//     color: colors.buttonText,
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
// });

// export default ProfilePage;





















// import React, { useState } from 'react';
// import { Alert } from 'react-native';
// import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView, TextInput } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import { useAuth, AWS_HOLDER_IMAGE } from "@dhuntleypro/afm-library";
// import { Ionicons } from "@expo/vector-icons";
// import { useTheme } from '@react-navigation/native'; // Assuming useTheme is coming from your custom theme

// const { width } = Dimensions.get('window');

// const ProfilePage: React.FC = () => {
//     const { authState } = useAuth();
//     const { colors } = useTheme(); // Pulling colors from the custom theme
//     const styles = createStyles(colors); // Dynamically generate styles based on theme colors

//     const [name, setName] = useState(authState?.user?.name || '');
//     const [email, setEmail] = useState(authState?.user?.email || '');
//     const [address, setAddress] = useState(authState?.user?.address || '');
//     const [addressCity, setAddressCity] = useState(authState?.user?.address_city || '');
//     const [addressState, setAddressState] = useState(authState?.user?.address_state || '');
//     const [addressZip, setAddressZip] = useState(authState?.user?.address_zip || '');
//     const [profileImage, setProfileImage] = useState(authState?.user?.profile_image || AWS_HOLDER_IMAGE);

//     const handleProfileImagePick = async () => {
//         const result = await ImagePicker.launchImageLibraryAsync({
//             mediaTypes: ImagePicker.MediaTypeOptions.Images,
//             allowsEditing: true,
//             aspect: [4, 4],
//             quality: 1,
//         });

//         if (!result.canceled) {
//             setProfileImage(result.assets[0].uri);
//         }
//     };


//     return (
//         <ScrollView>
//             <View style={styles.container}>
//                 <View style={styles.card}>
//                     <View style={styles.profileSection}>
//                         <TouchableOpacity onPress={handleProfileImagePick}>
//                             <Image
//                                 source={{ uri: profileImage }}
//                                 style={styles.profileImage}
//                             />
//                         </TouchableOpacity>
//                         <Text style={styles.name}>{authState?.user?.name}</Text>
//                         <Text style={styles.title}>Edit your profile information</Text>
//                     </View>
//                 </View>

//                 {/* Editable Fields */}
//                 <View style={styles.inputContainer}>
//                     <Ionicons name="person-outline" size={20} color={colors.text} />
//                     <TextInput
//                         placeholder="Name"
//                         onChangeText={setName}
//                         value={name}
//                         style={styles.input}
//                         placeholderTextColor={colors.border} // Adjust placeholder color based on theme
//                     />
//                 </View>

//                 {email && (
//                     <View style={styles.inputContainer}>
//                         <Ionicons name="mail-outline" size={20} color={colors.text} />
//                         <TextInput
//                             placeholder="Email"
//                             value={email}
//                             style={styles.input}
//                             editable={false} // Ensure email is not editable
//                             placeholderTextColor={colors.border} 
//                         />
//                     </View>
//                 )}

//                 <View style={styles.inputContainer}>
//                     <Ionicons name="location-outline" size={20} color={colors.text} />
//                     <TextInput
//                         placeholder="Address"
//                         onChangeText={setAddress}
//                         value={address}
//                         style={styles.input}
//                         placeholderTextColor={colors.border}
//                     />
//                 </View>

//                 <View style={styles.inputContainer}>
//                     <Ionicons name="location-outline" size={20} color={colors.text} />
//                     <TextInput
//                         placeholder="City"
//                         onChangeText={setAddressCity}
//                         value={addressCity}
//                         style={styles.input}
//                         placeholderTextColor={colors.border}
//                     />
//                 </View>

//                 <View style={styles.inputContainer}>
//                     <Ionicons name="location-outline" size={20} color={colors.text} />
//                     <TextInput
//                         placeholder="State"
//                         onChangeText={setAddressState}
//                         value={addressState}
//                         style={styles.input}
//                         placeholderTextColor={colors.border}
//                     />
//                 </View>

//                 <View style={styles.inputContainer}>
//                     <Ionicons name="location-outline" size={20} color={colors.text} />
//                     <TextInput
//                         placeholder="ZIP Code"
//                         onChangeText={setAddressZip}
//                         value={addressZip}
//                         style={styles.input}
//                         placeholderTextColor={colors.border}
//                     />
//                 </View>

//                 <TouchableOpacity style={styles.saveButton} onPress={() => {}}>
//                     <Text style={styles.saveButtonText}>Save Profile</Text>
//                 </TouchableOpacity>
//             </View>
//         </ScrollView>
//     );
// };

// // Create styles dynamically based on the theme colors
// const createStyles = (colors: any) => StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: colors.background, // Dynamic background color
//         // paddingTop: 20,
//     },
//     card: {
//         width: width * 0.9,
//         backgroundColor: colors.card, // Dynamic card background color
//         borderRadius: 10,
//         overflow: 'hidden',
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.2,
//         shadowRadius: 5,
//         elevation: 3,
//         paddingTop: 10,
//         // marginBottom: 20,
//     },
//     profileSection: {
//         padding: 20,
//         alignItems: 'center',
//     },
//     profileImage: {
//         width: 120,
//         height: 120,
//         borderRadius: 60,
//         marginBottom: 20,
//     },
//     name: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         color: colors.text, // Dynamic text color
//         textAlign: 'center',
//         marginBottom: 10,
//     },
//     title: {
//         fontSize: 16,
//         color: colors.subtitle, // Dynamic subtitle color
//         textAlign: 'center',
//         marginBottom: 20,
//     },
//     inputContainer: {
//         flexDirection: "row",
//         alignItems: "center",
//         backgroundColor: colors.cardBackground, // Dynamic input background color
//         padding: 15,
//         borderRadius: 15,
//         borderColor: 'gray',
//         borderWidth: 1,
//         marginVertical: 10,
//         width: width - 40,
//     },
//     input: {
//         flex: 1,
//         marginLeft: 10,
//         color: colors.text, // Dynamic input text color
//     },
//     saveButton: {
//         backgroundColor: colors.primary, // Dynamic primary color for button
//         paddingVertical: 15,
//         borderRadius: 30,
//         alignItems: 'center',
//         width: width - 40,
//         marginVertical: 20,
//     },
//     saveButtonText: {
//         color: colors.buttonText, // Dynamic button text color
//         fontWeight: 'bold',
//         fontSize: 16,
//     },
// });

// export default ProfilePage;



// import React, { useState } from 'react';
// import { Alert } from 'react-native';
// import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView, TextInput } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import { COLORS , useAuth  , AWS_HOLDER_IMAGE} from "@dhuntleypro/afm-library"
// import { Ionicons } from "@expo/vector-icons";
// import { useTheme } from '@react-navigation/native';

// const { width } = Dimensions.get('window');

// const ProfilePage: React.FC = () => {
//     const { authState } = useAuth();
//     const [name, setName] = useState(authState?.user?.name || '');
//     const [email, setEmail] = useState(authState?.user?.email || '');
//     const [address, setAddress] = useState(authState?.user?.address || '');
//     const [addressCity, setAddressCity] = useState(authState?.user?.address_city || '');
//     const [addressState, setAddressState] = useState(authState?.user?.address_state || '');
//     const [addressZip, setAddressZip] = useState(authState?.user?.address_zip || '');
//     const [profileImage, setProfileImage] = useState(authState?.user?.profile_image || AWS_HOLDER_IMAGE);

//     const handleProfileImagePick = async () => {
//         const result = await ImagePicker.launchImageLibraryAsync({
//             mediaTypes: ImagePicker.MediaTypeOptions.Images,
//             allowsEditing: true,
//             aspect: [4, 4],
//             quality: 1,
//         });

//         if (!result.canceled) {
//             setProfileImage(result.assets[0].uri);
//             // Save the selected image using your updateUserItems function or other methods.
//         }
//     };

//     // const handleSave = () => {
//     //     if (updateUserItems) {
//     //         updateUserItems({
//     //             name,
//     //             address,
//     //             address_city: addressCity,
//     //             address_state: addressState,
//     //             address_zip: addressZip,
//     //             profile_image: profileImage,
//     //         })
//     //             .then(() => {
//     //                 Alert.alert('Success', 'Your profile has been updated successfully!');
//     //             })
//     //             .catch((error: any) => {
//     //                 Alert.alert('Error', 'There was an error updating your profile.');
//     //                 console.error(error);
//     //             });
//     //     } else {
//     //         Alert.alert('Error', 'Profile update functionality is not available.');
//     //     }
//     // };

//     const { colors } = useTheme()

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: colors.background,
//         paddingTop: 20,
//     },
//     card: {
//         width: width * 0.9,
//         backgroundColor: '#fff',
//         borderRadius: 10,
//         overflow: 'hidden',
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.2,
//         shadowRadius: 5,
//         elevation: 3,
//         paddingTop: 20,
//         marginBottom: 20,
//     },
//     profileSection: {
//         padding: 20,
//         alignItems: 'center',
//     },
//     profileImage: {
//         width: 120,
//         height: 120,
//         borderRadius: 60,
//         marginBottom: 20,
//     },
//     name: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         textAlign: 'center',
//         marginBottom: 10,
//     },
//     title: {
//         fontSize: 16,
//         color: '#6e6e6e',
//         textAlign: 'center',
//         marginBottom: 20,
//     },
//     inputContainer: {
//         flexDirection: "row",
//         alignItems: "center",
//         backgroundColor: COLORS.lightGray,
//         padding: 15,
//         borderRadius: 5,
//         marginVertical: 10,
//         width: width - 40,
//     },
//     input: {
//         flex: 1,
//         marginLeft: 10,
//         color: COLORS.darkGray,
//     },
//     saveButton: {
//         backgroundColor: COLORS.primary,
//         paddingVertical: 15,
//         borderRadius: 30,
//         alignItems: 'center',
//         width: width - 40,
//         marginVertical: 20,
//     },
//     saveButtonText: {
//         color: '#fff',
//         fontWeight: 'bold',
//         fontSize: 16,
//     },
// });
//     return (
//         <ScrollView>
//             <View style={styles.container}>
//                 <View style={styles.card}>
//                     <View style={styles.profileSection}>
//                         <TouchableOpacity onPress={handleProfileImagePick}>
//                             <Image
//                                 source={{ uri: profileImage }}
//                                 style={styles.profileImage}
//                             />
//                         </TouchableOpacity>
//                         <Text style={styles.name}>{authState?.user?.name}</Text>
//                         <Text style={styles.title}>Edit your profile information</Text>
//                     </View>
//                 </View>

//                 {/* Editable Fields */}
//                 <View style={styles.inputContainer}>
//                     <Ionicons name="person-outline" size={20} color={COLORS.darkGray} />
//                     <TextInput
//                         placeholder="Name"
//                         onChangeText={setName}
//                         value={name}
//                         style={styles.input}
//                         secureTextEntry={false}
//                     />
//                 </View>

//                 {email && (
//                     <View style={styles.inputContainer}>
//                         <Ionicons name="mail-outline" size={20} color={COLORS.darkGray} />
//                         <TextInput
//                             placeholder="Email"
//                             value={email}
//                             style={styles.input}
//                             secureTextEntry={false}
//                             editable={false} // Ensure email is not editable
//                         />
//                     </View>
//                 )}

//                 <View style={styles.inputContainer}>
//                     <Ionicons name="location-outline" size={20} color={COLORS.darkGray} />
//                     <TextInput
//                         placeholder="Address"
//                         onChangeText={setAddress}
//                         value={address}
//                         style={styles.input}
//                     />
//                 </View>

//                 <View style={styles.inputContainer}>
//                     <Ionicons name="location-outline" size={20} color={COLORS.darkGray} />
//                     <TextInput
//                         placeholder="City"
//                         onChangeText={setAddressCity}
//                         value={addressCity}
//                         style={styles.input}
//                     />
//                 </View>

//                 <View style={styles.inputContainer}>
//                     <Ionicons name="location-outline" size={20} color={COLORS.darkGray} />
//                     <TextInput
//                         placeholder="State"
//                         onChangeText={setAddressState}
//                         value={addressState}
//                         style={styles.input}
//                     />
//                 </View>

//                 <View style={styles.inputContainer}>
//                     <Ionicons name="location-outline" size={20} color={COLORS.darkGray} />
//                     <TextInput
//                         placeholder="ZIP Code"
//                         onChangeText={setAddressZip}
//                         value={addressZip}
//                         style={styles.input}
//                     />
//                 </View>

//                 {/* <TouchableOpacity style={styles.saveButton} onPress={handleSave}> */}
//                 <TouchableOpacity style={styles.saveButton} onPress={() => {}}>
//                     <Text style={styles.saveButtonText}>Save Profile</Text>
//                 </TouchableOpacity>
//             </View>
//         </ScrollView>
//     );
// };


// export default ProfilePage;
