import React, { useEffect, useState } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  Pressable,
  useColorScheme
} from 'react-native';
import { useAuth } from '@/contexts/AuthContext';
import { COLORS, SIZES } from '@/utils/theme';
import { StoreModelProps } from '@/models/StoreModelProps';
import { getStore, updateStore , postStore } from '@/api/storeApi';
import { Stack } from 'expo-router';
import Colors from '@/constants/Colors';

const ClientStoreView = () => {
  const { authState } = useAuth();
  const [store, setStore] = useState<StoreModelProps | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const colorScheme = useColorScheme();

  useEffect(() => {
    if (authState?.user?.store_owner_id) {
      fetchStoreData(authState.user.store_owner_id);
    }
  }, [authState]);

  const fetchStoreData = async (storeId: string) => {
    try {
      const storeData = await getStore(storeId);
      setStore(storeData);
    } catch (error) {
      Alert.alert('Error', 'Failed to load store data.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    if (!store) return;
    setIsSaving(true);
    try {
    // await updateStore(store, updateKey: ;
    await postStore(store)
      Alert.alert('Success', 'Store data updated successfully.');
      console.log("client store updated")
    } catch (error: any) {
      console.log('Error:', error.response?.data || error.message);
      // Alert.alert(`Error', 'Failed to update store data. ${error.data?.message}`);
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return <ActivityIndicator style={styles.loading} />;
  }

  return (
    <ScrollView style={styles.container}>

<Stack.Screen 
options={{
  headerRight: () => (
      <Pressable>
        {({ pressed }) => (
          <FontAwesome
            name="check"
            size={30}
            color={Colors[colorScheme ?? 'light'].text}
            style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
          />
        )}
      </Pressable>
  ),
}}
/>


      {/* Store Information Section */}
      <Text style={styles.sectionHeader}>Store Information</Text>
      
      <Text style={styles.label}>Store ID</Text>
      <TextInput
        style={styles.input}
        value={store?.id || ''}
        onChangeText={(text) => 
          setStore((prevStore) => 
            prevStore ? { ...prevStore, id: text } : prevStore
          )
        }
      />

<Text style={styles.label}>Store Name</Text>

<TextInput
        style={styles.input}
        value={store?.store_name || ''}
        onChangeText={(text) => 
          setStore((prevStore) => 
            prevStore ? { ...prevStore, store_name: text } : prevStore
          )
        }
      />

      <Text style={styles.label}>Business Email</Text>
      <TextInput
        style={styles.input}
        value={store?.business_email || ''}
        onChangeText={(text) => 
          setStore((prevStore) => 
            prevStore ? { ...prevStore, business_email: text } : prevStore
          )
        }
      />

      <Text style={styles.label}>Phone Number</Text>
      <TextInput
        style={styles.input}
        value={store?.phone_number || ''}
        onChangeText={(text) => 
          setStore((prevStore) => 
            prevStore ? { ...prevStore, phone_number: text } : prevStore
          )
        }
      />

      <Text style={styles.label}>Address</Text>
      <TextInput
        style={styles.input}
        value={store?.store_address || ''}
        onChangeText={(text) => 
          setStore((prevStore) => 
            prevStore ? { ...prevStore, store_address: text } : prevStore
          )
        }
      />

      {/* Store Settings Section */}
      <Text style={styles.sectionHeader}>Store Settings</Text>

      <Text style={styles.label}>Currency</Text>
      <TextInput
        style={styles.input}
        value={store?.storeSettings.currency || ''}
        onChangeText={(text) => 
          setStore((prevStore) => 
            prevStore ? { 
              ...prevStore, 
              storeSettings: { ...prevStore.storeSettings, currency: text } 
            } : prevStore
          )
        }
      />

      <Text style={styles.label}>Free Shipping Amount</Text>
      <TextInput
        style={styles.input}
        value={store?.storeSettings.free_shipping_amount.toString() || ''}
        onChangeText={(text) => 
          setStore((prevStore) => 
            prevStore ? { 
              ...prevStore, 
              storeSettings: { ...prevStore.storeSettings, free_shipping_amount: parseFloat(text) } 
            } : prevStore
          )
        }
        keyboardType="numeric"
      />

      {/* Social Links Section */}
      <Text style={styles.sectionHeader}>Social Links</Text>

      <Text style={styles.label}>Instagram URL</Text>
      <TextInput
        style={styles.input}
        value={store?.socialLinks.instagram_url || ''}
        onChangeText={(text) => 
          setStore((prevStore) => 
            prevStore ? { 
              ...prevStore, 
              socialLinks: { ...prevStore.socialLinks, instagram_url: text } 
            } : prevStore
          )
        }
      />

      <Text style={styles.label}>Facebook URL</Text>
      <TextInput
        style={styles.input}
        value={store?.socialLinks.facebook_url || ''}
        onChangeText={(text) => 
          setStore((prevStore) => 
            prevStore ? { 
              ...prevStore, 
              socialLinks: { ...prevStore.socialLinks, facebook_url: text } 
            } : prevStore
          )
        }
      />





      {/* Social Links Section */}
      <Text style={styles.sectionHeader}>Location</Text>



<Text style={styles.label}>Store Address</Text>

<TextInput
        style={styles.input}
        value={store?.store_address || ''}
        onChangeText={(text) => 
          setStore((prevStore) => 
            prevStore ? { ...prevStore, store_address: text } : prevStore
          )
        }
      />
<Text style={styles.label}>City</Text>

<TextInput
        style={styles.input}
        value={store?.store_address_city || ''}
        onChangeText={(text) => 
          setStore((prevStore) => 
            prevStore ? { ...prevStore, store_address_city: text } : prevStore
          )
        }
      />
<Text style={styles.label}>State</Text>

<TextInput
        style={styles.input}
        value={store?.store_address_state || ''}
        onChangeText={(text) => 
          setStore((prevStore) => 
            prevStore ? { ...prevStore, store_address_state: text } : prevStore
          )
        }
      />
<Text style={styles.label}>Zip</Text>

<TextInput
        style={styles.input}
        value={store?.store_address_zip || ''}
        onChangeText={(text) => 
          setStore((prevStore) => 
            prevStore ? { ...prevStore, store_address_zip: text } : prevStore
          )
        }
      />

            {/* Contact  Section */}
            <Text style={styles.sectionHeader}>Contact Information</Text>

<Text style={styles.label}>Phone #</Text>

<TextInput
        style={styles.input}
        value={store?.phone_number || ''}
        onChangeText={(text) => 
          setStore((prevStore) => 
            prevStore ? { ...prevStore, phone_number: text } : prevStore
          )
        }
      />
<Text style={styles.label}>Email</Text>

<TextInput
        style={styles.input}
        value={store?.email || ''}
        onChangeText={(text) => 
          setStore((prevStore) => 
            prevStore ? { ...prevStore, email: text } : prevStore
          )
        }
      />








      {/* Add more fields and sections as needed */}

      <TouchableOpacity style={styles.saveButton} onPress={handleSave} disabled={isSaving}>
        {isSaving ? (
          <ActivityIndicator color={COLORS.white} />
        ) : (
          <Text style={styles.saveButtonText}>Save Changes</Text>
        )}
      </TouchableOpacity>

      <View style={{paddingBottom: 100}}/>
    </ScrollView>
  );
};

export default ClientStoreView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SIZES.medium,
  },
  sectionHeader: {
    fontSize: SIZES.large,
    color: COLORS.primary,
    marginBottom: SIZES.small,
    fontWeight: 'bold',
  },
  label: {
    fontSize: SIZES.medium,
    color: COLORS.black,
    marginBottom: SIZES.small,
  },
  input: {
    backgroundColor: COLORS.white,
    padding: SIZES.small,
    borderRadius: SIZES.small,
    fontSize: SIZES.medium,
    marginBottom: SIZES.medium,
  },
  saveButton: {
    backgroundColor: COLORS.primary,
    padding: SIZES.medium,
    borderRadius: SIZES.medium,
    alignItems: 'center',
    marginTop: SIZES.large,
  },
  saveButtonText: {
    color: COLORS.white,
    fontSize: SIZES.medium,
    fontWeight: 'bold',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});








//works
// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   ActivityIndicator,
//   Alert
// } from 'react-native';
// import { useAuth } from '@/contexts/AuthContext'; 
// import { COLORS, SIZES } from '@/utils/theme';
// import { StoreModelProps } from '@/models/StoreModelProps';
// import { getStore, updateStore } from '@/api/storeApi';

// const ClientStoreView = () => {
//   const { authState } = useAuth();
//   const [store, setStore] = useState<StoreModelProps | null>(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isSaving, setIsSaving] = useState(false);



//   useEffect(() => {
//     if (authState?.user?.store_owner_id) {
//       fetchStoreData(authState.user.store_owner_id);
//     }
//   }, [authState]);

//   const fetchStoreData = async (storeId: string) => {
//     try {
//       const storeData = await getStore(storeId);
//       setStore(storeData);
//     } catch (error) {
//       Alert.alert('Error', 'Failed to load store data.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleSave = async () => {
//     if (!store) return;
//     setIsSaving(true);
//     try {
//       await updateStore(store.id);
//       Alert.alert('Success', 'Store data updated successfully.');
//     } catch (error) {
//       Alert.alert('Error', 'Failed to update store data.');
//     } finally {
//       setIsSaving(false);
//     }
//   };

//   if (isLoading) {
//     return <ActivityIndicator style={styles.loading} />;
//   }

//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.label}>Store Name</Text>
//       <TextInput
//         style={styles.input}
//         value={store?.store_name || ''}
//         onChangeText={(text) => 
//           setStore((prevStore) => 
//             prevStore ? { ...prevStore, store_name: text } : prevStore
//           )
//         }
//       />

//       <Text style={styles.label}>Business Email</Text>
//       <TextInput
//         style={styles.input}
//         value={store?.business_email || ''}
//         onChangeText={(text) => 
//           setStore((prevStore) => 
//             prevStore ? { ...prevStore, business_email: text } : prevStore
//           )
//         }
//       />

//       <Text style={styles.label}>Phone Number</Text>
//       <TextInput
//         style={styles.input}
//         value={store?.phone_number || ''}
//         onChangeText={(text) => 
//           setStore((prevStore) => 
//             prevStore ? { ...prevStore, phone_number: text } : prevStore
//           )
//         }
//       />

//       <Text style={styles.label}>Address</Text>
//       <TextInput
//         style={styles.input}
//         value={store?.store_address || ''}
//         onChangeText={(text) => 
//           setStore((prevStore) => 
//             prevStore ? { ...prevStore, store_address: text } : prevStore
//           )
//         }
//       />

//       {/* Add more fields as needed */}

//       <TouchableOpacity style={styles.saveButton} onPress={handleSave} disabled={isSaving}>
//         {isSaving ? (
//           <ActivityIndicator color={COLORS.white} />
//         ) : (
//           <Text style={styles.saveButtonText}>Save Changes</Text>
//         )}
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// export default ClientStoreView;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: SIZES.medium,
//     // backgroundColor: COLORS.gray,
//   },
//   label: {
//     fontSize: SIZES.medium,
//     color: COLORS.black,
//     marginBottom: SIZES.small,
//   },
//   input: {
//     backgroundColor: COLORS.white,
//     padding: SIZES.small,
//     borderRadius: SIZES.small,
//     fontSize: SIZES.medium,
//     marginBottom: SIZES.medium,
//   },
//   saveButton: {
//     backgroundColor: COLORS.primary,
//     padding: SIZES.medium,
//     borderRadius: SIZES.medium,
//     alignItems: 'center',
//     marginTop: SIZES.large,
//   },
//   saveButtonText: {
//     color: COLORS.white,
//     fontSize: SIZES.medium,
//     fontWeight: 'bold',
//   },
//   loading: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
