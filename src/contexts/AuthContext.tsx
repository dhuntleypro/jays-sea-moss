import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import * as SecureStore from 'expo-secure-store';
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from 'react-native-uuid';
import { BASE_URL } from "../utils/api";
import { CONSTANTS } from "../utils/constants";
import { UserProps } from "../models/UserProps";

interface AuthProps {
  authState: { user: UserProps | null; token: string | null; authenticated: boolean };
  onRegister: (user: UserProps) => Promise<any>;
  onLogin: (email: string, password: string) => Promise<any>;
  onLogout: () => Promise<void>;
  updateUserProfile: (updatedUser: Partial<UserProps>) => Promise<void>;
}

export const TOKEN_KEY = 'your_token_key_here'; // Replace with your actual token key
const USER_KEY = 'your_user_key_here'; // Replace with your actual user key
const AUTHENTICATED_KEY = 'authenticated_key_here'; // Key for authenticated status in SecureStore

const AuthContext = createContext<AuthProps | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [authState, setAuthState] = useState<{
    user: UserProps | null;
    token: string | null;
    authenticated: boolean;
  }>({
    user: null,
    token: null,
    authenticated: false,
  });

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const token = await SecureStore.getItemAsync(TOKEN_KEY);
        const userString = await SecureStore.getItemAsync(USER_KEY);
        const authenticated = await SecureStore.getItemAsync(AUTHENTICATED_KEY);

        console.log('Loaded from SecureStore:', { token, userString, authenticated });

        if (token && userString && authenticated === 'true') {
          const user = JSON.parse(userString);
          axios.defaults.headers.common['Authorization'] = `${token}`;
          setAuthState({
            user,
            token,
            authenticated: true,
          });
          console.log('User data loaded successfully:', user);
        } else {
          setAuthState({
            user: null,
            token: null,
            authenticated: false,
          });
          console.log('No valid user data found, setting authenticated to false.');
        }
      } catch (error) {
        console.error("Error loading user data:", error);
        setAuthState({
          user: null,
          token: null,
          authenticated: false,
        });
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
      await SecureStore.setItemAsync(AUTHENTICATED_KEY, 'true');

      axios.defaults.headers.common['Authorization'] = token;
      setAuthState({
        user,
        token,
        authenticated: true
      });

      console.log('User logged in successfully:', user);

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

  const logout = async (): Promise<void> => {
    try {
      await SecureStore.deleteItemAsync(TOKEN_KEY);
      await SecureStore.deleteItemAsync(USER_KEY);
      await SecureStore.deleteItemAsync(AUTHENTICATED_KEY);
      axios.defaults.headers.common['Authorization'] = '';
      setAuthState({
        user: null,
        token: null,
        authenticated: false
      });
      await AsyncStorage.removeItem("carts");
      console.log('User logged out successfully.');
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const updateUserProfile = async (updatedUser: Partial<UserProps>) => {
    try {
      const result = await axios.put(`${BASE_URL}/users/${authState.user?.id}`, updatedUser, {
        headers: {
          Authorization: `Bearer ${authState.token}`,
        },
      });

      const updatedUserData = { ...(authState.user as UserProps), ...updatedUser };
      await SecureStore.setItemAsync(USER_KEY, JSON.stringify(updatedUserData));

      setAuthState({
        ...authState,
        user: updatedUserData,
      });

      console.log('User profile updated successfully:', updatedUserData);
    } catch (e: any) {
      console.error("Failed to update user profile:", e);
      throw new Error('Failed to update user profile');
    }
  };

  return (
    <AuthContext.Provider value={{ authState, onRegister: register, onLogin: login, onLogout: logout, updateUserProfile }}>
      {children}
    </AuthContext.Provider>
  );
};






// import React, { createContext, useContext, useEffect, useState } from "react";
// import axios from "axios";
// import * as SecureStore from 'expo-secure-store';
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import uuid from 'react-native-uuid';
// import { BASE_URL } from "../utils/api";
// import { CONSTANTS } from "../utils/constants";
// import { UserProps } from "../models/UserProps";

// interface AuthProps {
//   authState?: { user: UserProps | null; token: string | null; authenticated: boolean  };
//   onRegister?: (user: UserProps) => Promise<any>;
//   onLogin?: (email: string, password: string) => Promise<any>;
//   onLogout?: () => Promise<any>;
//   updateUserProfile?: (updatedUser: Partial<UserProps>) => Promise<void>; // Add this line

// }

// export const TOKEN_KEY = 'your_token_key_here'; // Replace with your actual token key
// const USER_KEY = 'your_user_key_here'; // Replace with your actual user key
// const AUTHENTICATED_KEY = 'authenticated_key_here'; // Key for authenticated status in SecureStore
// const AuthContext = createContext<AuthProps>({});

// export const useAuth = () => useContext(AuthContext);

// export const AuthProvider = ({ children }: any) => {
//   const [authState, setAuthState] = useState<{
//     user: UserProps | null;
//     token: string | null;
//     authenticated: boolean 
//   }>({
//     user: null,
//     token: null,
//     authenticated: false,
//   });

//   useEffect(() => {
//     const loadUserData = async () => {
//       try {
//         const token = await SecureStore.getItemAsync(TOKEN_KEY);
//         const userString = await SecureStore.getItemAsync(USER_KEY);
//         const authenticated = await SecureStore.getItemAsync(AUTHENTICATED_KEY);

//         console.log('Loaded from SecureStore:', { token, userString, authenticated });

//         if (token && userString && authenticated === 'true') {
//           const user = JSON.parse(userString);
//           axios.defaults.headers.common['Authorization'] = `${token}`;
//           setAuthState({
//             user,
//             token,
//             authenticated: true,
//           });
//           console.log('User data loaded successfully:', user);
//         } else {
//           setAuthState({
//             user: null,
//             token: null,
//             authenticated: false,
//           });
//           console.log('No valid user data found, setting authenticated to false.');
//         }
//       } catch (error) {
//         console.error("Error loading user data:", error);
//         setAuthState({
//           user: null,
//           token: null,
//           authenticated: false,
//         });
//       }
//     };

//     loadUserData();
//   }, []);

//   const register = async (userData: UserProps): Promise<any> => {
//     userData.id = uuid.v4().toString();

//     try {
//       const url = `${BASE_URL}/register?store_id=${CONSTANTS.store_id}&tableName=prof-website-user-table`;
//       const result = await axios.post(url, userData);
//       return result;
//     } catch (e: any) {
//       console.error("Registration error:", e.data);
//       if (e.response && e.response.data) {
//         return { error: true, msg: e.response.data.msg };
//       } else {
//         return { error: true, msg: "Registration failed. Please try again." };
//       }
//     }
//   };

//   const login = async (email: string, password: string): Promise<any> => {
//     try {
//       const result = await axios.post(`${BASE_URL}/login?store_id=${CONSTANTS.store_id}&tableName=prof-website-user-table`, {
//         email,
//         password,
//       });

//       const { user, token } = result.data;
//       await SecureStore.setItemAsync(TOKEN_KEY, token);
//       await SecureStore.setItemAsync(USER_KEY, JSON.stringify(user));
//       await SecureStore.setItemAsync(AUTHENTICATED_KEY, 'true');

//       axios.defaults.headers.common['Authorization'] = token;
//       setAuthState({
//         user,
//         token,
//         authenticated: true
//       });

//       console.log('User logged in successfully:', user);

//       const authStatus = await SecureStore.getItemAsync(AUTHENTICATED_KEY);
//       console.log('Authenticated after login:', authStatus);

//       return result;
//     } catch (e: any) {
//       console.error("Login error:", e);
//       if (e.response && e.response.data) {
//         return { error: true, msg: e.response.data.msg };
//       } else {
//         return { error: true, msg: "Login failed. Please try again." };
//       }
//     }
//   };

//   const logout = async (): Promise<any> => {
//     try {
//       await SecureStore.deleteItemAsync(TOKEN_KEY);
//       await SecureStore.deleteItemAsync(USER_KEY);
//       await SecureStore.deleteItemAsync(AUTHENTICATED_KEY);
//       axios.defaults.headers.common['Authorization'] = '';
//       setAuthState({
//         user: null,
//         token: null,
//         authenticated: false
//       });
//       await AsyncStorage.removeItem("carts");
//       console.log('User logged out successfully.');
//     } catch (error) {
//       console.error("Error logging out:", error);
//     }
//   };

//   const updateUserProfile = async (updatedUser: Partial<UserProps>) => {
//     try {
//       // Example: Update user in your backend
//       const result = await axios.put(`${BASE_URL}/users/${authState.user?.id}`, updatedUser, {
//         headers: {
//           Authorization: `Bearer ${authState.token}`,
//         },
//       });
  
//       // Update the user data in SecureStore and authState
//       const updatedUserData = { ...(authState.user as UserProps), ...updatedUser };
//       await SecureStore.setItemAsync(USER_KEY, JSON.stringify(updatedUserData));
  
//       setAuthState({
//         ...authState,
//         user: updatedUserData,
//       });
  
//       console.log('User profile updated successfully:', updatedUserData);
//     } catch (e: any) {
//       console.error("Failed to update user profile:", e);
//       throw new Error('Failed to update user profile');
//     }
//   };
  
//     const value = {
//       onRegister: register,
//       onLogin: login,
//       onLogout: logout,
//       updateUserProfile, // Add the function to context value
//       authState
//     };
   

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };



