import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Pages from '@/core/routes';

const faq = () => {
  const FAQPage = Pages.faq; // Dynamically use component from the registry

  return (
    <FAQPage />
  )
}

export default faq

const styles = StyleSheet.create({})