import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '@/utils/theme'
import { Ionicons } from "@expo/vector-icons"
import { Link } from 'expo-router'
// import EditScreenInfo from '../EditScreenInfo'

const SectionHeader = () => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerTitle}>App Types</Text>
            {/* <EditScreenInfo path="app/(tabs)/products.tsx" /> */}

            <Link href={'/products'} asChild>
            <TouchableOpacity>
            {/* <TouchableOpacity onPress={() => navigation.navigate("ProductDetails", { item })}> */}
                    <Ionicons name='grid' size={SIZES.xLarge} color={COLORS.primary}/>
            </TouchableOpacity>
            </Link>
        </View>
   
    </View>
  )
}

export default SectionHeader

const styles = StyleSheet.create({
    container: {
        marginTop: SIZES.medium,
        // marginBottom: SIZES.xSmall,
        marginHorizontal: 12,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between"

    },
    headerTitle: {
       fontWeight: 'bold',
        fontSize: SIZES.xLarge -2
    }
})