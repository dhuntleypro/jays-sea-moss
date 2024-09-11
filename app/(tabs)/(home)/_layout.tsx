import { StyleSheet, Text, TouchableOpacity, useColorScheme, View } from "react-native";
import React, { useContext } from "react";
import { router, Stack } from "expo-router";
import { Fontisto, Feather, Ionicons } from "@expo/vector-icons";
// import { COLORS } from "@/utils/theme";
import {COLORS, HomeLayoutContent, useCart } from "@dhuntleypro/afm-library"
// import HomeLayoutContent from "@/layouts/HomeLayoutContent";


const HomeLayout = () => {
  return (
   <HomeLayoutContent />
  );
};

export default HomeLayout;
