import { useAuth } from '@/contexts/AuthContext';
import { AWS_HOLDER_IMAGE } from '@/utils/api';
import React, { useState } from 'react';
import { Alert } from 'react-native';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { COLORS } from '@/utils/theme';
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get('window');

const ProfilePage: React.FC = () => {
    const { authState, updateUserProfile } = useAuth();
    const [name, setName] = useState(authState?.user?.name || '');
    const [email, setEmail] = useState(authState?.user?.email || '');
    const [address, setAddress] = useState(authState?.user?.address || '');
    const [addressCity, setAddressCity] = useState(authState?.user?.address_city || '');
    const [addressState, setAddressState] = useState(authState?.user?.address_state || '');
    const [addressZip, setAddressZip] = useState(authState?.user?.address_zip || '');
    const [profileImage, setProfileImage] = useState(authState?.user?.profile_image || AWS_HOLDER_IMAGE);

    const handleProfileImagePick = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
        });

        if (!result.canceled) {
            setProfileImage(result.assets[0].uri);
            // Save the selected image using your updateUserProfile function or other methods.
        }
    };

    const handleSave = () => {
        if (updateUserProfile) {
            updateUserProfile({
                name,
                address,
                address_city: addressCity,
                address_state: addressState,
                address_zip: addressZip,
                profile_image: profileImage,
            })
                .then(() => {
                    Alert.alert('Success', 'Your profile has been updated successfully!');
                })
                .catch((error: any) => {
                    Alert.alert('Error', 'There was an error updating your profile.');
                    console.error(error);
                });
        } else {
            Alert.alert('Error', 'Profile update functionality is not available.');
        }
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.card}>
                    <View style={styles.profileSection}>
                        <TouchableOpacity onPress={handleProfileImagePick}>
                            <Image
                                source={{ uri: profileImage }}
                                style={styles.profileImage}
                            />
                        </TouchableOpacity>
                        <Text style={styles.name}>{authState?.user?.name}</Text>
                        <Text style={styles.title}>Edit your profile information</Text>
                    </View>
                </View>

                {/* Editable Fields */}
                <View style={styles.inputContainer}>
                    <Ionicons name="person-outline" size={20} color={COLORS.darkGray} />
                    <TextInput
                        placeholder="Name"
                        onChangeText={setName}
                        value={name}
                        style={styles.input}
                        secureTextEntry={false}
                    />
                </View>

                {email && (
                    <View style={styles.inputContainer}>
                        <Ionicons name="mail-outline" size={20} color={COLORS.darkGray} />
                        <TextInput
                            placeholder="Email"
                            value={email}
                            style={styles.input}
                            secureTextEntry={false}
                            editable={false} // Ensure email is not editable
                        />
                    </View>
                )}

                <View style={styles.inputContainer}>
                    <Ionicons name="location-outline" size={20} color={COLORS.darkGray} />
                    <TextInput
                        placeholder="Address"
                        onChangeText={setAddress}
                        value={address}
                        style={styles.input}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Ionicons name="location-outline" size={20} color={COLORS.darkGray} />
                    <TextInput
                        placeholder="City"
                        onChangeText={setAddressCity}
                        value={addressCity}
                        style={styles.input}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Ionicons name="location-outline" size={20} color={COLORS.darkGray} />
                    <TextInput
                        placeholder="State"
                        onChangeText={setAddressState}
                        value={addressState}
                        style={styles.input}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Ionicons name="location-outline" size={20} color={COLORS.darkGray} />
                    <TextInput
                        placeholder="ZIP Code"
                        onChangeText={setAddressZip}
                        value={addressZip}
                        style={styles.input}
                    />
                </View>

                <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                    <Text style={styles.saveButtonText}>Save Profile</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        paddingTop: 20,
    },
    card: {
        width: width * 0.9,
        backgroundColor: '#fff',
        borderRadius: 10,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 3,
        paddingTop: 20,
        marginBottom: 20,
    },
    profileSection: {
        padding: 20,
        alignItems: 'center',
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    title: {
        fontSize: 16,
        color: '#6e6e6e',
        textAlign: 'center',
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: COLORS.lightGray,
        padding: 15,
        borderRadius: 5,
        marginVertical: 10,
        width: width - 40,
    },
    input: {
        flex: 1,
        marginLeft: 10,
        color: COLORS.darkGray,
    },
    saveButton: {
        backgroundColor: COLORS.primary,
        paddingVertical: 15,
        borderRadius: 30,
        alignItems: 'center',
        width: width - 40,
        marginVertical: 20,
    },
    saveButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default ProfilePage;

