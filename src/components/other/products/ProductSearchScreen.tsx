import React, { useState } from 'react';
import { SafeAreaView, View, TextInput, TouchableOpacity, Text, FlatList, StyleSheet } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { getProducts } from '../../../api/productsApi';
import { useAuth } from '@/contexts/AuthContext';
import { COLORS, SIZES } from '@/utils/theme';
// import ProductListItem from './ProductListItem';
import { CONSTANTS } from '@/utils/constants';
import { ProductModelProps } from '@/models/ProductModelProps';
import { useClientProduct } from '@/contexts/ProductContext';
import ProductListItem from './ProductSearchTile';

const ProductSearchScreen = () => {
  const { authState } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<ProductModelProps[]>([]);

  const storeID = authState?.user ? authState.user.store_owner_id : '';
  const email = authState?.user ? authState.user.email : '';

  const { products } = useClientProduct();

  const handleSearch = (text: string) => {
    try {
      setSearchTerm(text);
      const results = products.filter((product: ProductModelProps) =>
        product.name.toLowerCase().includes(text.toLowerCase())
      );
      setSearchResults(results);
    } catch (error) {
      console.log("Failed to get products", error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Ionicons 
            name='camera-outline' 
            size={SIZES.xLarge} 
            style={styles.searchIcon}
          />
        </TouchableOpacity>

        <View style={styles.searchWrapper}>
          <TextInput 
            style={styles.searchInput} 
            value={searchTerm}
            onChangeText={handleSearch}
            placeholder='What are you looking for'
          />
        </View>

        <View>
          <TouchableOpacity style={styles.searchBtn} onPress={() => handleSearch(searchTerm)}>
            <Feather name='search' size={24} color={COLORS.offwhite}/>
          </TouchableOpacity>
        </View>
      </View>

      {/* Search result */}
      {searchTerm === '' ? (
        <FlatList
          keyExtractor={(item: ProductModelProps) => item.id.toString()}
          data={products}
          renderItem={({ item }) => <ProductListItem {...item} />}
          contentContainerStyle={{ marginHorizontal: 12 }}
        />
      ) : (
        <FlatList
          keyExtractor={(item: ProductModelProps) => item.id.toString()}
          data={searchResults.length === 0 ? products : searchResults}
          renderItem={({ item }) => <ProductListItem {...item} />}
          contentContainerStyle={{ marginHorizontal: 12 }}
        />
      )}
    </SafeAreaView>
  );
};

export default ProductSearchScreen;

export const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        marginHorizontal: SIZES.small,
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.medium,
        marginVertical: SIZES.medium,
        height: 50

    },
    searchIcon: {
        marginHorizontal: 10,
        color: COLORS.gray,
        marginTop: SIZES.small
    },
    searchWrapper:{ 
        flex: 1,
        backgroundColor: COLORS.secondary,
        marginRight: SIZES.small,
        borderRadius: SIZES.small
    },
    searchInput: {
        fontFamily: "regular",
        width: "100%",
        height: "100%",
        paddingHorizontal: SIZES.small
    },
    searchBtn: {
        width: 50,
        height: "100%",
        borderRadius: SIZES.medium,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.primary
    }
})
