import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

// import Colors from '@/constants/Colors';
// import { useColorScheme } from '@/components/useColorScheme';
// import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { COLORS } from '@/utils/theme';
import { useClientOnlyValue } from '@/hooks/useClientOnlyValue';
import TabLayout from '@/components/layouts/TabLayout';


export default function LayoutForTabs() {

  return (
    <TabLayout />
   
  );
}
