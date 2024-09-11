import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { Link, Stack } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import {BannerVOne , TextFieldVOne, DeleteSectionView, Divider} from "@dhuntleypro/afm-library"

interface ViewItemProps {
  title: string;
  children: React.ReactNode;
}

export const ViewItem: React.FC<ViewItemProps> = ({ title, children }) => {
  return (
    <View>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
      <Divider />
    </View>
  );
};

const ViewController = () => {

  return (
    <ScrollView>
      <View style={{padding: 16}}>
        <View style={styles.section}>

            {/* <Link href={'(component-library)/buttons/roundedButton' as never} asChild>
            <TouchableOpacity style={styles.option}>
              <FontAwesome5 name="user" size={20} color="black" />
              <Text style={styles.optionText}>Rounded Buttons</Text>
              <Ionicons name="chevron-forward" size={20} color="black" />
            </TouchableOpacity>
            </Link> */}

            <ViewItem title={'BannerVOne'} children={<BannerVOne />} />
            <ViewItem title={'TextFieldVOne'} children={   
              <TextFieldVOne label={'email'} value={'emailhere@gmail.com'} />
            } />
            <ViewItem title={'DeleteSectionView'} children={<DeleteSectionView />} />
                      
    
         


        </View>
      </View>
     </ScrollView>
  )
}

export default ViewController

 

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
    paddingTop: 30
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

