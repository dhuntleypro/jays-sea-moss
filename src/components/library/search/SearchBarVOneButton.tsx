import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { AWS_HOLDER_IMAGE } from "@/utils/api";
// import Colors from "@/constants/Colors";
// import { COLORS } from "@/utils/theme";
// import { useAuth } from "@/contexts/AuthContext";
import { Feather, Ionicons } from "@expo/vector-icons"
import { COLORS } from "@/utils/theme";
import { router } from "expo-router";

const SearchBarVOneButton = () => {
  return (
    <View>
    <View style={styles.container}>
    <TouchableOpacity onPress={() => {router.push('/search')}} style={styles.searchSection} >

      <View style={styles.searchInput}>
        <Text style={{color: "#A0A0A0"}}>Search keywords</Text>
       
        
      </View>
      </TouchableOpacity>

      <View style={styles.filterSection}>
        <TouchableOpacity onPress={() => {router.push('/search')}}>
          {/* <Ionicons
            name="options-outline"
            size={24}
            color="black"
            style={styles.filterIcon}
          /> */}
        <Feather name='search' size={24} style={styles.searchIcon} />

        </TouchableOpacity>
      </View>

      </View>
    </View>
  );
};

export default SearchBarVOneButton;

const styles = StyleSheet.create({

  container: {
    flexDirection: "row",
  },
 searchIcon: {
        marginHorizontal: 10,
        color: COLORS.gray,
    },
  talentCount: {
    fontSize: 14,
    color: "#A0A0A0",
    marginBottom: 20,
  },
  searchSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    // backgroundColor: "#transparent",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 12,
    width: "80%",
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#000",
  },
  filterSection: {
    // marginLeft: 10,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginLeft: 15,
    // backgroundColor: "#FFFFFF",
    // backgroundColor: "#transparent",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 12,
  },
  filterIcon: {
    paddingLeft: 3,
    paddingRight: 3,
    // marginLeft: 10,
    // flexDirection: "row",
    // alignItems: "center",
    // marginBottom: 20,
    // backgroundColor: "#FFFFFF",
    // borderRadius: 10,
    // paddingHorizontal: 10,
    // paddingVertical: 12,
  },

  arrow: {
    marginLeft: 10,
    marginTop: 3,
  },
});
