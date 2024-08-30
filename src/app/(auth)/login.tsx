import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {LoginComponentTwo} from "@dhuntleypro/afm-library"

    
const Login = () => {
  return (
     <LoginComponentTwo />    
  )
}

export default Login

const styles = StyleSheet.create({})







// import React, { useState } from 'react';
// import { View, TextInput, Button, Text } from 'react-native';
// import { useAuth } from '../contexts/AuthContext';
// import { useRouter } from 'expo-router';

// export default function LoginScreen() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const { login } = useAuth();
//   const router = useRouter();

//   const handleLogin = async () => {
//     // Replace with your API call
//     const response = await fetch('https://your-api.com/login', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ email, password }),
//     });
//     const data = await response.json();

//     if (response.ok) {
//       login(data.token);
//       router.push('/'); // Navigate to the home page
//     } else {
//       // Handle error (e.g., show an alert)
//       console.error('Login failed', data.message);
//     }
//   };

//   const skipLogin = () => {
//     router.push('/');
//   };

//   return (
//     <View>
//       <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
//       <TextInput
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
//       <Button title="Login" onPress={handleLogin} />
//       <Button title="Skip Login" onPress={skipLogin} />
//     </View>
//   );
// }
