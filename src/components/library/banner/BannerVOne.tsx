import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '@/utils/theme'
import { Ionicons } from '@expo/vector-icons';

{/* Banner Section */}

const BannerVOne = () => {
  return (
    <View style={styles.container}>
        <View style={styles.bannerSection}>
          <Text style={styles.bannerTitle}>Customize Your Experience</Text>
          <Text style={styles.bannerSubtitle}>
            Manage your preferences, update account settings, and explore options to tailor your experience to your needs.
          </Text>
          <TouchableOpacity style={{ flexDirection: 'row',}}>
          <Text style={styles.editPreferences}>Update Settings</Text>
          <Ionicons name="arrow-forward" size={15} color="white" style={styles.arrow} />
          </TouchableOpacity>
        </View>
        </View>
  )
}

export default BannerVOne

const styles = StyleSheet.create({
    container: {
        // padding:16
    },
    bannerSection: {
      backgroundColor: '#1C1C1E',
      borderRadius: 15,
      padding: 20,
      marginBottom: 20,
    },
    bannerTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#FFFFFF',
      marginBottom: 10,
    },
  
    bannerSubtitle: {
      fontSize: 14,
      color: COLORS.gray3,
      marginBottom: 20,
    },
  
    editPreferences: {
      fontSize: 14,
      color: COLORS.white,
      fontWeight: 'bold',
    },
    
    arrow : {
      marginLeft: 10,
      marginTop: 3,
    },
  });
