import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { COLORS, SIZES, icons } from "../../constants";

const jobTypes = ["Full-time", "Part time", "Contractor"];
const Welcome = () => {
  const [activeJobType, setActiveJobType] = useState("Full-time");
  return (
    <View>
      <Text style={styles.greeting}>Hello Yan Yan</Text>
      <Text style={styles.header}>Find your perfect job</Text>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            placeholder="what are you looking for?"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn}>
          <Image
            style={styles.searchBtnImage}
            source={icons.search}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tabItem(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          horizontal={true}
          contentContainerStyle={{ columnGap: SIZES.medium }}
        />
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {},
  greeting: {
    fontSize: 18,
    color: COLORS.primary,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 4,
  },
  searchContainer: {
    flexDirection: "row",
    height: 50,
    marginTop: SIZES.medium,
    justifyContent: "center",
    alignContent: "center",
  },
  searchWrapper: {
    flex: 1,
    height: "100%",
  },
  searchInput: {
    height: "100%",
    width: "100%",
    backgroundColor: COLORS.white,
    borderRadius: 12,
    marginRight: SIZES.xxSmall,
  },
  searchBtn: {
    width: 50,
    height: "100%",
    backgroundColor: COLORS.tertiary,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: SIZES.medium,
  },
  searchBtnImage: {
    height: "50%",
    width: "50%",
    tintColor: COLORS.white,
  },
  tabContainer: {
    width: "100%",
    marginTop: SIZES.xxSmall,
    marginTop: SIZES.large,
  },
  tabItem: (activeJobType, item) => ({
    borderRadius: 16,
    borderWidth: 1,
    borderColor: activeJobType === item ? COLORS.secondary : COLORS.gray2,
    paddingVertical: 6,
    paddingHorizontal: 10,
  }),
  tabText: (activeJobType, item) => ({
    color: activeJobType === item ? COLORS.secondary : COLORS.gray2,
  }),
});
