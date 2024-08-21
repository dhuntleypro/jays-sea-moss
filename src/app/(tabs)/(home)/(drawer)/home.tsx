import React, { FC } from 'react'
import { TouchableOpacity, Text, View , ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet } from "react-native";
// import { COLORS, SIZES } from "../utils/theme";

import { Ionicons , Fontisto} from '@expo/vector-icons'
// import { TopSectionHeaderV1 } from '@/components/home/TopSectionHeader';
import SearchBar from '@/components/other/general/SearchBar';
// import Carousel from '@/components/home/Carousel';
// import SectionHeader from '@/components/home/Headings';
import ProductRow from '@/components/other/cards/other/ProductRow';
import { COLORS, SIZES } from '@/utils/theme';
import { TopSectionHeaderV1 } from '@/components/pages/home/TopSectionHeader';
import Carousel from '@/components/pages/home/Carousel';
import SectionHeader from '@/components/pages/home/Headings';


const Home: FC = () => {
    return (
 
        <ScrollView 
          showsVerticalScrollIndicator={false} 
          style={{
            backgroundColor: 'white',
            paddingTop: 10

            
          }}>
            <TopSectionHeaderV1 />
            <SearchBar />
            <Carousel />
            <SectionHeader /> 
           <ProductRow client={false} />
           <View style={{paddingBottom: 200}}></View>

        </ScrollView>
  

  )
}


export default Home 



const styles = StyleSheet.create({
  textStyle: {
      fontFamily: "bold",
      fontSize: 40
  },
  appBarWrapper: {
      marginHorizontal: 22,
      marginTop: SIZES.small
  },
  appBar: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
  },
  location: {
      fontFamily: "semibold",
      fontSize: SIZES.medium,
      color: COLORS.gray
  },
  cartCount: {
      position: "absolute",
      bottom: 16,
      width: 16,
      height: 16,
      borderRadius: 8,
      alignItems: "center",
      backgroundColor: "green",
      justifyContent: "center",
      zIndex: 999
  },
  cartNumber: {
      fontFamily: "regular",
      fontWeight: "600",
      fontSize: 10,
      color: COLORS.lightWhite
  }

})

// import { Pressable, StyleSheet } from 'react-native';

// import EditScreenInfo from '@/components/EditScreenInfo';
// import { Text, View } from '@/contexts/Themed';;
// import React from 'react';
// import { Link, Stack } from 'expo-router';
// import { Ionicons } from '@expo/vector-icons'

// export default function Page() {
//   return (
//     <View style={styles.container}>
//     <Stack.Screen 
//     options={{
//       headerRight: () => {
//         return (
//           <Link href={'/modal'} asChild>
//               <Ionicons name='person' size={25} color={"black"} style={{paddingRight: 20}} />
//            </Link>
//         )
//       }
//     }}
    
//     />
//       <Text style={styles.title}>Home</Text>
//       <Link href={'/details'}>product 2</Link>
//       <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
//       <EditScreenInfo path="app/(tabs)/home.tsx" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   separator: {
//     marginVertical: 30,
//     height: 1,
//     width: '80%',
//   },
// });





