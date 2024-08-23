import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { useAuth } from "./AuthContext";
import { StoreModelProps } from "@/models/StoreModelProps";
import { getStore } from "@/api/storeApi";
import { CONSTANTS } from "@/utils/constants";

interface ClientStoreContextProps {
  store: StoreModelProps | null;
  addStore: (store: StoreModelProps) => void;
  removeStore: (storeId: string) => void;
  getClientStore: () => void;
  selectedStore: StoreModelProps | null;
  selectStore: (store: StoreModelProps) => void;
  isLoading: boolean;
  error: string | null;
}

const ClientStoreContext = createContext<ClientStoreContextProps | undefined>(undefined);

export const useClientStore = () => {
  const context = useContext(ClientStoreContext);
  if (!context) {
    throw new Error("useClientStore must be used within a ClientStoreProvider");
  }
  return context;
};

export const ClientStoreProvider = ({ children }: { children: ReactNode }) => {
  const { authState } = useAuth();
  const [store, setStore] = useState<StoreModelProps | null>(null);
  const [selectedStore, setSelectedStore] = useState<StoreModelProps | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // if (authState?.token) {
      getClientStore(); // Initial load of the store
      console.log("Auth:::::::")
      console.log(authState?.token)
    // }
  }, []);

  const addStore = (newStore: StoreModelProps) => {
    setStore(newStore);
  };

  const removeStore = () => {
    setStore(null);
  };

  const getClientStore = async () => {
    if (!authState) return;

    setIsLoading(true);
    setError(null);
    try {
      const store_owner_id = CONSTANTS.store_id //  authState?.user?.store_owner_id || '';
      const response = await getStore(store_owner_id);
     // const fetchedStore = response?.data ; // Assuming the API returns a single store object
      setStore(response);
    } catch (error: any) {
      console.error("Failed to fetch store:", error.response?.data?.message || error.message);
      setError(error.response?.data?.message || "Failed to fetch store. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const selectStore = (store: StoreModelProps) => {
    setSelectedStore(store);
  };

  return (
    <ClientStoreContext.Provider 
      value={{ 
        store, 
        addStore, 
        removeStore, 
        getClientStore, 
        selectedStore, 
        selectStore, 
        isLoading, 
        error 
      }}
    >
      {children}
    </ClientStoreContext.Provider>
  );
};
