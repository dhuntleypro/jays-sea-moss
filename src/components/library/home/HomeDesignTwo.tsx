import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions , ScrollView} from 'react-native';
import { useClientStore } from '@/contexts/ClientStoreContext';
import { View as MotiView } from 'moti';
import TopHomeSeaction from './TopHomeSeaction';
import SearchBar from '@/components/other/general/SearchBar';
import ProductRow from '@/components/other/cards/other/ProductRow';
import Carousel from '@/components/pages/home/Carousel';
import SectionHeader from '@/components/pages/home/Headings';


const { width } = Dimensions.get('window');

const HomeDesignTwo: React.FC = () => {
  const { store } = useClientStore();

  return (
    <ScrollView 
    showsVerticalScrollIndicator={false} 
    style={{
      backgroundColor: 'white',
      paddingTop: 30

      
    }}>
    <TopHomeSeaction />
    <SearchBar />
    <Carousel />
    <SectionHeader /> 
   <ProductRow client={false} />
   <View style={{paddingBottom: 200}}></View>
   </ScrollView>
  )

}

export default HomeDesignTwo
