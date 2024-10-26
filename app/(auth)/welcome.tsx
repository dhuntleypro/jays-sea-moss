import { StyleSheet } from 'react-native';
import { Pages } from '@dhuntleypro/afm-expo-library';

const Welcome = () => {
  const WelcomePage = Pages.welcome; 

  return (
    <WelcomePage />

  );
};

export default Welcome;



const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#000',
  }
})
