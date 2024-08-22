import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useClientStore } from '@/contexts/ClientStoreContext';
import { View as MotiView } from 'moti';


const { width } = Dimensions.get('window');

const TopHomeSeaction: React.FC = () => {
  const { store } = useClientStore();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome to</Text>
        
        <MotiView
          key={`menu`} // Force re-render to reset animation
          from={{ opacity: 0, translateY: 50, scale: 0.85 }}
          animate={{ opacity: 1, translateY: 0, scale: 1 }}
          transition={{
            type: 'timing',
            duration: 600,
            delay: 300,
          }}
        >
        <TouchableOpacity style={styles.menuIcon}>
          <Ionicons name="menu-outline" size={24} color="black" />
        </TouchableOpacity>
        </MotiView>
      </View>

      {/* Title */}
      <View style={styles.titleContainer}>
        <Text style={styles.mainTitle}>Jays</Text>
        <Text style={styles.subTitle}>Sea Moss</Text>
      </View>

      {/* Product List */}
      <View style={styles.productList}>
      <MotiView
          key={`menu`} // Force re-render to reset animation
          from={{ opacity: 0, translateY: 50, scale: 0.85 }}
          animate={{ opacity: 1, translateY: 0, scale: 1 }}
          transition={{
            type: 'timing',
            duration: 600,
            delay: 600,
          }}
        >
        <Text style={styles.productItem}>All Products</Text>
        </MotiView>
        <Text style={styles.productItem}>Raw Sea Moss</Text>
        <Text style={styles.productItem}>Sea Moss Gel</Text>
        <Text style={styles.productItem}>Sea Moss Capsules</Text>
        <Text style={styles.productItem}>Sea Moss Powder</Text>
      </View>

      {/* Image */}
      <Image 
        source={{ uri: store?.images.welcome_image }} // Replace with your image URL
        style={styles.image}
        resizeMode="cover"
      />

      {/* Description */}
      <Text style={styles.description}>
        Discover the natural benefits of Sea Moss, rich in essential minerals and nutrients to support your health and well-being.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 14,
    color: 'black',
  },
  menuIcon: {
    paddingVertical: 10,
  },
  titleContainer: {
    marginTop: 20,
  },
  mainTitle: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'black',
    lineHeight: 50,
  },
  subTitle: {
    fontSize: 48,
    fontWeight: '300',
    color: 'black',
    lineHeight: 50,
  },
  productList: {
    position: 'absolute',
    top: 60,
    right: 20,
    alignItems: 'flex-end',
  },
  productItem: {
    fontSize: 16,
    color: 'black',
    marginBottom: 5,
  },
  image: {
    width: width - 40,
    height: 300,
    borderRadius: 10,
    marginTop: 20,
  },
  description: {
    fontSize: 16,
    color: 'black',
    textAlign: 'left',
    marginTop: 20,
  },
});

export default TopHomeSeaction;
