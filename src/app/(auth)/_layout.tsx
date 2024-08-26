import { StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Stack } from "expo-router";
import { useMankindProduct } from "@/contexts/MankindProductContext";
import AuthLayout from "@/components/layouts/AuthLayout";

const LayoutForAuthLayout = () => {
  return (
    <AuthLayout />
  )

};

export default LayoutForAuthLayout;

const styles = StyleSheet.create({});
