import React from "react";
import { View, FlatList, Image, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

// const imageUrls = [
//   "https://example.com/image1.jpg",
//   "https://example.com/image2.jpg",
//   "https://example.com/image3.jpg",
//   // Add more image URLs here
// ];

const renderImage = (item : any) => (
  <Image
    source={{ uri: item }}
    style={styles.image}
    resizeMode="cover"
  />
);

const FlashingImages = (imageUrls : string[]) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={imageUrls}
        renderItem={renderImage}
        keyExtractor={(item, index) => index.toString()}
        horizontal={false}
        numColumns={2}  // Adjust this to show images in rows or columns
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: width / 2 - 15,
    height: width / 2 - 15,
    margin: 7.5,
    borderRadius: 10,
  },
});

export default FlashingImages;
