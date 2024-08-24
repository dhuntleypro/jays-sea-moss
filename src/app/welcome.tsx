import { StyleSheet, View } from 'react-native';
import React from 'react';
import WelcomePageTwo from '@/components/pages/welcome/WelcomePageTwo';

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
