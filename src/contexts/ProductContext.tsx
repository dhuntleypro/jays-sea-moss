import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { ProductModelProps } from "../models/ProductModelProps";
import { getProducts, postProduct, updateProduct, deleteProduct } from "../api/productsApi";
import { useAuth } from "./AuthContext";
import { Alert } from "react-native";
import { router } from "expo-router";
import MyAlert from "@/components/library/interfaces/MyAlert";
import { CONSTANTS } from "@/utils/constants";

interface ProductContextProps {
  products: ProductModelProps[];
  addProduct: (product: ProductModelProps) => Promise<void>;
  removeProduct: (productId: string) => Promise<void>;
  updateProduct: (product: ProductModelProps) => Promise<void>;
  getClientProducts: () => void;
  selectedProduct: ProductModelProps | null;
  selectProduct: (product: ProductModelProps) => void;
  isLoading: boolean;
  error: string | null;
}

const ProductContext = createContext<ProductContextProps | undefined>(undefined);

export const useClientProduct = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useClientProduct must be used within an ProductProvider");
  }
  return context;
};

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const { authState } = useAuth();
  const [products, setProducts] = useState<ProductModelProps[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<ProductModelProps | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (authState?.token) {
      getClientProducts(); // Initial load of products
    }
  }, [authState?.token]);

  const addProduct = async (product: ProductModelProps) => {
    if (!authState?.user) return;

    const storeID = authState.user.store_owner_id || '';
    const email = authState.user.email || '';
    const token = authState?.token || ""

    setIsLoading(true);
    try {
      await postProduct(product, storeID, email, token );
      setProducts((prevProducts) => [...prevProducts, product]);
      console.log("product added", product );

      // change fix
      router.push('/')

    } catch (error: any) {
      console.error("Failed to add product:", error.response?.data );
      

      <MyAlert
      title="Product not Created"
      message="You are missing information. Please update your store."
      onCancelPress={() => console.log("Cancel Pressed")}
      onUpdatePress={() => router.push('/store')}
      />   
      setError(error.response?.data || "Failed to add product. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const removeProduct = async (productId: string) => {
    setIsLoading(true);
    try {
      await deleteProduct({ id: productId });
      setProducts((prevProducts) => prevProducts.filter(product => product.id !== productId));
    } catch (error: any) {
      console.error("Failed to remove product:", error.response?.data?.message || error.message);
      setError(error.response?.data?.message || "Failed to remove product. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const updateProduct = async (product: ProductModelProps) => {
    setIsLoading(true);
    try {
      await updateProduct(product);
      setProducts((prevProducts) => prevProducts.map(o => o.id === product.id ? product : o));
    } catch (error: any) {
      console.error("Failed to update product:", error.response?.data?.message || error.message);
      setError(error.response?.data?.message || "Failed to update product. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const getClientProducts = async () => {
    if (!authState?.user) return;

    setIsLoading(true);
    setError(null);
    try {
      const email = authState.user.email || '';
      const store_owner_id = CONSTANTS.store_id // authState.user.store_owner_id || '';

      const response = await getProducts(store_owner_id, email);
      const fetchedProducts = response.data;
      setProducts(fetchedProducts);
    } catch (error: any) {
      console.error("Failed to fetch products:", error.response?.data?.message || error.message);
      setError(error.response?.data?.message || "Failed to fetch products. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const selectProduct = (product: ProductModelProps) => {
    setSelectedProduct(product);
  };

  return (
    <ProductContext.Provider 
      value={{ 
        products, 
        addProduct, 
        removeProduct, 
        updateProduct, 
        getClientProducts, 
        selectedProduct, 
        selectProduct, 
        isLoading, 
        error 
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};





// import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
// import { ProductModelProps } from "../models/ProductModelProps";
// import { getProducts } from "../api/productsApi";
// import { CONSTANTS } from "@/utils/constants";
// import { useAuth } from "./AuthContext";

// interface ProductContextProps {
//   products: ProductModelProps[];
//   addProduct: (product: ProductModelProps) => void;
//   removeProduct: (productId: string) => void;
//   getClientProducts: () => void;
//   selectedProduct: ProductModelProps | null;
//   selectProduct: (product: ProductModelProps) => void;
//   isLoading: boolean;
//   error: string | null;
// }

// const ProductContext = createContext<ProductContextProps | undefined>(undefined);

// export const useClientProduct = () => {
//   const context = useContext(ProductContext);
//   if (!context) {
//     throw new Error("useClientProduct must be used within an ProductProvider");
//   }
//   return context;
// };

// export const ProductProvider = ({ children }: { children: ReactNode }) => {
//   const { authState } = useAuth(); // Access authState from the AuthContext
//   const [products, setProducts] = useState<ProductModelProps[]>([]);
//   const [selectedProduct, setSelectedProduct] = useState<ProductModelProps | null>(null);
//   const [isLoading, setIsLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     if (authState?.token) {
//       getClientProducts(); // Initial load of products
//     }
//   }, [authState?.token]);

//   const addProduct = (product: ProductModelProps) => {
//     setProducts((prevProducts) => [...prevProducts, product]);
  
  
//   };

//   const removeProduct = (productId: string) => {
//     setProducts((prevProducts) => prevProducts.filter(product => product.id !== productId));
//   };

//   const getClientProducts = async () => {
//     if (!authState) return;

//     setIsLoading(true);
//     setError(null);
//     try {
//       const email = authState?.user?.email || '';
//       const store_owner_id = authState?.user?.store_owner_id || '';

//       const response = await getProducts(store_owner_id, email);
//       const fetchedProducts = response.data; // Extract the data from the Axios response
//       setProducts(fetchedProducts);
//     } catch (error: any) {
//       console.error("Failed to fetch products:", error.response?.data?.message || error.message);
//       setError(error.response?.data?.message || "Failed to fetch products. Please try again later.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const selectProduct = (product: ProductModelProps) => {
//     setSelectedProduct(product);
//   };

//   return (
//     <ProductContext.Provider 
//       value={{ 
//         products, 
//         addProduct, 
//         removeProduct, 
//         getClientProducts, 
//         selectedProduct, 
//         selectProduct, 
//         isLoading, 
//         error 
//       }}
//     >
//       {children}
//     </ProductContext.Provider>
//   );
// };
