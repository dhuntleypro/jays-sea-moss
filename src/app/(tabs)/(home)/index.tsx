import { StyleSheet, View, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { router } from 'expo-router';

const Index = () => {
  const { authState } = useAuth();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Ensure the root layout is mounted before navigating
    const timeout = setTimeout(() => {
      if (authState?.authenticated !== null) {
        setIsReady(true);
        if (authState?.authenticated === true) {
          router.push("/(home)");
        } else if (authState?.authenticated === false) {
          router.push("/welcome");
        }
      }
    }, 0); // Adding a 0ms timeout to ensure it waits until the layout is mounted

    return () => clearTimeout(timeout);
  }, [authState?.authenticated]);

  if (!isReady) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return null;
};

export default Index;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
})