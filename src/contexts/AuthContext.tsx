import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import * as SecureStore from 'expo-secure-store';
import uuid from 'react-native-uuid';
import { BASE_URL } from "../utils/api";
import { CONSTANTS } from "../utils/constants";
import { UserProps } from "../models/UserProps";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AuthProps {
  authState?: {
    user: UserProps | null;
    token: string | null;
    authenticated: boolean | null;
    onboarded: boolean | null;
  };
  onRegister?: (user: UserProps) => Promise<any>;
  onLogin?: (email: string, password: string) => Promise<any>;
  onLogout?: () => Promise<any>;
}

export const TOKEN_KEY = 'your_token_key_here'; // Replace with your actual token key
const USER_KEY = 'your_user_key_here'; // Replace with your actual user key
const ONBOARDED_KEY = 'your_onboarded_key_here'; // Key to store onboarded state

const AuthContext = createContext<AuthProps>({});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: any) => {
  const [authState, setAuthState] = useState<{
    user: UserProps | null;
    token: string | null;
    authenticated: boolean | null;
    onboarded: boolean | null;
  }>({
    user: null,
    token: null,
    authenticated: null,
    onboarded: null
  });

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const token = await SecureStore.getItemAsync(TOKEN_KEY);
        const userString = await SecureStore.getItemAsync(USER_KEY);
        const onboarded = await SecureStore.getItemAsync(ONBOARDED_KEY);

        if (token && userString) {
          const user = JSON.parse(userString);
          axios.defaults.headers.common['Authorization'] = `${token}`;
          setAuthState({
            user,
            token,
            authenticated: true,
            onboarded: onboarded === 'true', // Convert to boolean
          });
        }
      } catch (error) {
        console.error("Error loading user data:", error);
      }
    };

    loadUserData();
  }, []);

  const register = async (userData: UserProps): Promise<any> => {
    userData.id = uuid.v4().toString();

    try {
      const url = `${BASE_URL}/register?store_id=${CONSTANTS.store_id}&tableName=prof-website-user-table`;
      const result = await axios.post(url, userData);
      return result;
    } catch (e: any) {
      console.error("Registration error:", e.data);
      if (e.response && e.response.data) {
        return { error: true, msg: e.response.data.msg };
      } else {
        return { error: true, msg: "Registration failed. Please try again." };
      }
    }
  };

  const login = async (email: string, password: string): Promise<any> => {
    try {
      const result = await axios.post(`${BASE_URL}/login?store_id=${CONSTANTS.store_id}&tableName=prof-website-user-table`, {
        email,
        password,
      });

      const { user, token } = result.data;
      await SecureStore.setItemAsync(TOKEN_KEY, token);
      await SecureStore.setItemAsync(USER_KEY, JSON.stringify(user));
      await SecureStore.setItemAsync(ONBOARDED_KEY, 'true'); // Store onboarded state as true

      axios.defaults.headers.common['Authorization'] = token;
      setAuthState({
        user,
        token,
        authenticated: true,
        onboarded: false,
      });

      return result;
    } catch (e: any) {
      console.error("Login error:", e);
      if (e.response && e.response.data) {
        return { error: true, msg: e.response.data.msg };
      } else {
        return { error: true, msg: "Login failed. Please try again." };
      }
    }
  };

  const logout = async (): Promise<any> => {
    try {
      await SecureStore.deleteItemAsync(TOKEN_KEY);
      await SecureStore.deleteItemAsync(USER_KEY);
      axios.defaults.headers.common['Authorization'] = '';
      setAuthState((prevState) => ({
        ...prevState,
        user: null,
        token: null,
        authenticated: false,
        // Keep onboarded true if it was previously true
        onboarded: false // prevState.onboarded,
      }));

      console.log(`authenticated - ${authState.authenticated}`);
      await AsyncStorage.removeItem("carts");

    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const value = {
    onRegister: register,
    onLogin: login,
    onLogout: logout,
    authState,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
