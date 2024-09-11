import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { SAMPLE_PRODUCT , ProductCrudCard , ProductCardView , ProductCardV2 , ProductListItem} from "@dhuntleypro/afm-library"
import { ViewItem } from '../lib-views/view-controller';


const ButtonController = () => {
  return (
    <ScrollView>
      <View style={{ padding: 16 }}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Cards</Text>

          <ViewItem
            title={"ProductCardV2"}
            children={<ProductCardV2 {...SAMPLE_PRODUCT[0]} />}
          /> 
          <ViewItem
            title={"ProductCardView"}
            children={<ProductCardView product={SAMPLE_PRODUCT[0]} />}
          />
          <ViewItem
            title={"ProductCrudCard"}
            children={<ProductCrudCard {...SAMPLE_PRODUCT[0]} />}
          />
          <ViewItem
            title={"ProductListItem"}
            children={<ProductListItem {...SAMPLE_PRODUCT[0]} />}
          />
        </View>
      </View>
    </ScrollView>
  );
}

export default ButtonController


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  upperSection: {
  
  },
  divider: {
    height: 1,
    backgroundColor: '#EAEAEA',
    // paddingBottom: 20
    // marginBottom: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'left',
    marginVertical: 20,
    marginLeft: 16,
    paddingBottom: 20,
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 4, // for Android shadow
    marginTop: 12,

  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 10,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EAEAEA',
  },
  optionText: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    marginLeft: 10,
  },
  logoutButton: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
    marginTop: 20,
  },
  logoutText: {
    color: '#000',
    fontSize: 16,
  },
});

