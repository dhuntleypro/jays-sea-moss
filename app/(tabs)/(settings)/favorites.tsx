
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FavoritesPageVOne } from "@dhuntleypro/afm-library"
import Pages from '@/core/routes';

const favorites = () => {
  const FavoritesPage = Pages.favorites; // Dynamically use component from the registry

  return (
    <FavoritesPage />
    // <FavoritesPageVOne />
  )
}

export default favorites

const styles = StyleSheet.create({})

















// import { StyleSheet, Text, View, FlatList } from 'react-native';
// import React from 'react';
// import { ProductModelProps, useAuth, useClientProduct, useClientStore, ProductCardView, COLORS } from '@dhuntleypro/afm-library';
// // import { COLORS } from '@/utils/theme';
// // import { useAuth } from '../../../contexts/AuthContext';
// // import { ProductModelProps } from '@/models/ProductModelProps';
// // import { useClientProduct } from '@/contexts/ClientProductContext';
// // import { useClientStore } from '@/contexts/ClientStoreContext';
// // import ProductCardView from '@/components/library/card/ProductCardView';


// const Favorites: React.FC = () => {
//   const { authState } = useAuth();
//   const { store } = useClientStore();
//   const storeID = authState?.user ? authState.user.store_owner_id : '';
//   const email = authState?.user ? authState.user.email : '';
  
//   const { products } = useClientProduct();
  
//   // Filter products that are in the user's favoriteItems
//   const favoriteProducts = products.filter((product) =>
//     authState.user?.favoriteItems.includes(product.id)
//   );

//   return (
//     <View style={styles.container}>
//       <View style={{ paddingTop: 16 }}>
//         <Text style={styles.title}>Favorites</Text>
//       </View>
//       <FlatList 
//         keyExtractor={(item: ProductModelProps) => item.id.toString()}
//         data={favoriteProducts}
//         renderItem={({ item }) => <ProductCardView product={item} />}
//         contentContainerStyle={{ marginHorizontal: 12 }}
//       />
//     </View>
//   );
// };

// export default Favorites;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: COLORS.lightWhite,
//   },
//   title: {
//     fontWeight: '700',
//     fontSize: 25,
//     paddingHorizontal: 20,
//     paddingBottom: 20,
//   },
// });



// import React, { useContext, useState } from 'react';
// import { View, Text, FlatList, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// // Assuming you have these contexts and models
// import { FavoritesManagerContext } from '../contexts/FavoritesManagerContext';
// // import { ProductViewModelContext } from '../contexts/ProductViewModelContext';
// // import { StoreViewModelContext } from '../contexts/StoreViewModelContext';
// import ProductCard from '../components/ProductCard';
// import { ProductModel } from '../models/ProductModel';
// import { useClientProduct } from '@/contexts/ClientProductContext';
// import { useClientStore } from '@/contexts/ClientStoreContext';
// import { router } from 'expo-router';

// export const FavoritesView: React.FC = () => {
//   const favoritesManager = useContext(FavoritesManagerContext)
 
//   const { store } = useClientStore()
//   const { products } = useClientProduct()
//   // const productVM = {useContext(ProductViewModelContext);}


//   // const storeVM = useContext(StoreViewModelContext);
//   const navigation = useNavigation();

//   const [dismiss, setDismiss] = useState(false); // not using but need

//   const renderProductItem = ({ item }: { item: ProductModel }) => (
//     <TouchableOpacity onPress={() => router.push(`/products/${item.id}`)}>
//       <ProductCard product={item} />
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       <ScrollView>
//         {favoritesManager.products.length > 0 ? (
//           <FlatList
//             data={favoritesManager.products}
//             renderItem={renderProductItem}
//             keyExtractor={(item) => item.id.toString()}
//             numColumns={2} // Assuming a 2-column grid similar to SwiftUI's GridItem
//             columnWrapperStyle={styles.columnWrapper}
//             contentContainerStyle={styles.flatListContainer}
//           />
//         ) : favoritesManager.expenses.length > 0 ? (
//           <View>
//             {favoritesManager.expenses.map((expense) => (
//               <Text key={expense.id}>{expense.title}</Text>
//             ))}
//             <View style={styles.totalContainer}>
//               <Text>Your cart total is</Text>
//               <Text style={styles.totalAmount}>
//                 ${favoritesManager.total.toFixed(2)}
//               </Text>
//             </View>
//           </View>
//         ) : (
//           <View style={styles.emptyContainer}>
//             <Text style={styles.emptyTitle}>Favorites is Empty</Text>
//             <Text>Like items to add them to your favorites list</Text>
//           </View>
//         )}

//         {/* Uncomment and modify according to your payment logic */}
//         {/* 
//         {favoritesManager.paymentSuccess && (
//           <View style={styles.paymentSuccessContainer}>
//             <Text>Thank you for your purchase! Your items will be shipped shortly. You will also receive an email confirmation shortly.</Text>
//           </View>
//         )}
//         */}
//       </ScrollView>
//     </View>
//   );
// };

// // Define styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   flatListContainer: {
//     padding: 10,
//   },
//   columnWrapper: {
//     justifyContent: 'space-between',
//   },
//   totalContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 10,
//   },
//   totalAmount: {
//     fontWeight: 'bold',
//   },
//   emptyContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   emptyTitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   paymentSuccessContainer: {
//     padding: 20,
//     alignItems: 'center',
//   },
// });
