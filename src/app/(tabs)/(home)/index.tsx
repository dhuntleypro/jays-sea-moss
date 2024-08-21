import React, { useEffect, useState } from 'react';
import { Redirect } from 'expo-router';
import { useAuth } from '@/contexts/AuthContext';
import SplashScreenView from '@/components/pages/SplashScreenView';

export default function Page() {
  const { authState } = useAuth();
  const [showSplash, setShowSplash] = useState(false);

  // Uncomment if you want to show the splash screen for a fixed duration before redirecting
  // useEffect(() => {
  //   const splashTimer = setTimeout(() => {
  //     setShowSplash(true);
  //   }, 3000);

  //   // Clean up the timer when the component unmounts
  //   return () => clearTimeout(splashTimer);
  // }, []);

  // if (showSplash) {
  //   return <SplashScreenView />;
  // }

  // Determine where to redirect based on the authentication state
  if (authState?.authenticated === true ) {
    return <Redirect href="/" />;
  } else {
    // return <Redirect href="/onboarding" />;
    return <Redirect href="/welcome" />;
  }
}
