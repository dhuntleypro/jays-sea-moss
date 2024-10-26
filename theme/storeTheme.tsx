
// Add to store API

import { StoreTheme } from "@dhuntleypro/afm-expo-library";

export const storeTheme: StoreTheme = {
  light: {
    pageBackground: "#FFFFFF",  // White
    pageText: "#000000",        // Black
    buttonBackground: "#000000", // Black
    buttonText: "#FFFFFF",       // White
    buttonShadow: "#999999",     // Gray
    tint: "#555555",             // Dark gray
    tabIconDefault: "#CCCCCC",   // Light gray
    tabIconSelected: "#000000",  // Black
    cardBackground: "#F5F5F5",   // Light gray
    cardText: "#000000",         // Black
    cardSecondaryText: "#777777", // Medium gray
    cardPrice: "#000000",        // Black
    cardBorder: "#DDDDDD",       // Light gray
    background: "#FFFFFF",       // White
    title: "#000000",            // Black
    subtitle: "#777777",         // Medium gray
    border: "#DDDDDD",           // Light gray
    card: "#FFFFFF",             // White
    primary: "#3f5a36",          // Dark green
    secondary: "#777777",        // Medium gray
  },
  dark: {
    pageBackground: "#1C1C1C",   // Black
    pageText: "#FFFFFF",         // White
    buttonBackground: "#FFFFFF", // White
    buttonText: "#000000",       // Black
    buttonShadow: "#333333",     // Dark gray
    tint: "#BBBBBB",             // Light gray
    tabIconDefault: "#555555",   // Dark gray
    tabIconSelected: "#FFFFFF",  // White
    cardBackground: "#1C1C1C",   // Dark gray
    cardText: "#FFFFFF",         // White
    cardSecondaryText: "#AAAAAA", // Light gray
    cardPrice: "#FFFFFF",        // White
    cardBorder: "#444444",       // Dark gray
    background: "#1C1C1C",       // Dark gray
    title: "#FFFFFF",            // White
    subtitle: "#AAAAAA",         // Light gray
    border: "#444444",           // Dark gray
    card: "#1C1C1C",             // Dark gray
    primary: "#3f5a36",          // Dark green
    secondary: "#AAAAAA",        // Light gray
  },
};





export const storeThemeV2 : StoreTheme = {
    light: {
      pageBackground: "#F0F4F3",  // Light forest green background
      pageText: "#2C3E50",        // Darker forest green text
      buttonBackground: "#2E8B57", // Forest green button
      buttonText: "#FFFFFF",      // White button text
      buttonShadow: "#1C5E44",    // Darker forest green shadow

      tint: '#FFFFFF', // Royal blue
      tabIconDefault: '#FFFFFF',
      tabIconSelected: '#FFFFFF',
      cardBackground: '#FFFFFF',
      cardText: '#000000',
      cardSecondaryText: '#83829A',  // Gray
      cardPrice: '#000000',
      cardBorder: '#E0E0E0',

      
      background: "#E0EFEF",      // Light green background
      title: "#FFFFFF",                 // White text for general UI titles
      subtitle: "#FFFFFF",              // White text for subtitles
      border: "#A3C2C2",          // Soft green border
      card: "#FFFFFF",            // White cards
      primary: "#228B22",         // Primary forest green
      secondary: "#006400",       // Darker secondary green
    },
    dark: {
      pageBackground: "#1C3A3A",  // Darker forest green background
      pageText: "#E0EFEF",        // Light forest green text
      buttonBackground: "#006400", // Darker forest green button
      buttonText: "#FFFFFF",      // White button text
      buttonShadow: "#003300",    // Dark green shadow

      tint: '#111111', // Royal blue
      tabIconDefault: '#FFFFFF',
      tabIconSelected: '#FFFFFF',
      cardBackground: '#FFFFFF',
      cardText: '#000000',
      cardSecondaryText: '#83829A',  // Gray
      cardPrice: '#000000',
      cardBorder: '#E0E0E0',

      background: "#000000",      // Dark green background
      title: "#FFFFFF",                 // White text for general UI titles
      subtitle: "#FFFFFF",              // White text for subtitles
      border: "#A3C2C2",          // Soft green border
      card: "#2C2C2E",            // Dark gray card
      primary: "#228B22",         // Forest green primary
      secondary: "#006400",       // Dark green secondary
    },
  };
  