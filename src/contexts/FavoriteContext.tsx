// import React, { createContext, useContext, useEffect, useState } from "react";
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import productsApi from "../api/productsApi";
// import { ProductModelProps } from "../models/ProductModelProps";





// export function removeFromFavorites(product: ProductModelProps) {
//     //  products = this.products.filter((p) => p.id !== product.id);
//     // const itemExistIndex = products.findIndex((cart) => cart.id === item.id);

//     // this.total -= product.price;
//     // this.numberOfProducts = this.products.length;
//     // console.log(this.numberOfProducts);
  

// }


// // Define the CartProvider component
// export const FavoriteContext: React.FC<{ children: React.ReactNode }> = ({ children }) => {
 
//   useEffect(() => {
//     //loadCartItems(); // Load cart items on component mount
//   }, []); // Empty dependency array ensures it only runs once on mount

//   const addToCart = async (item: CartItem) => {
//     try {
//       const itemExistIndex = carts.findIndex((cart) => cart.id === item.id);

//     } catch(error) {

//     }
// }



//   removeFromFavorites(product: ProductModelProps): void {
//     products = this.products.filter((p) => p.id !== product.id);
//     const itemExistIndex = products.findIndex((cart) => cart.id === item.id);

//     this.total -= product.price;
//     this.numberOfProducts = this.products.length;
//     console.log(this.numberOfProducts);
//   }


//   addToFavorites(product: ProductModel): void {
//     const existingProductIndex = this.products.findIndex((p) => p.id === product.id);
//     if (existingProductIndex !== -1) {
//       console.log(`Update quantity for ${product.name}`);
//       this.total += product.price;
//       this.numberOfProducts += 1;
//       console.log(`Added ${product.name} to the cart. Total: ${this.total}`);
//     } else {
//       this.products.push(product);
//       this.total += product.price;
//       this.numberOfProducts += 1;
//       console.log(`Added ${product.name} to the cart. Total: ${this.total}`);
//     }
//   }

//   @action
//   singleAddToFavorites(product: ProductModel): void {
//     this.total = product.price;
//     this.numberOfProducts = 1;
//     if (this.products.length === 0) {
//       this.products.push(product);
//       console.log(`total: ${this.total}`);
//       this.numberOfProducts = this.products.length;
//     }
//   }

//   @action
//   addVariantToFavorites(product: ProductModel, variantInfo: VariantInfo): void {
//     this.products.push(product);
//     this.total += variantInfo.price;
//     this.numberOfProducts += 1;
//     console.log(`total variants: ${this.total}`);
//   }
// }
  
 
//   // Create the value object to be passed to the context provider
//   const value: CartContextType = {
   
//   };

//   // Render the context provider with children
//   return (
//     <CartContext.Provider value={value}>
//       {children}
//     </CartContext.Provider>
//   );
// };

