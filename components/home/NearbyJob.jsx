import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constants";
import NearbyJobCard from "../common/card/NearbyJobCard";
import PopularJobCard from "../common/card/PopularJobCard";
const nearbyJobs = [
  { id: 1, name: "Job Hunting Company", role: "React Dev", location: "US" },
  {
    id: 2,
    name: "Job Company Name",
    role: "React Developer (Senior)",
    location: "US",
  },
];
const NearbyJob = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Nearby Jobs</Text>
        <Text style={styles.showAllText}>Show all</Text>
      </View>
      {nearbyJobs.map((item) => (
        <NearbyJobCard item={item} />
      ))}
    </View>
  );
};

export default NearbyJob;

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.large,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerText: {
    color: COLORS.primary,
    fontWeight: "bold",
    fontSize: 20,
  },
  showAllText: {
    fontSize: SIZES.medium,
    color: COLORS.gray,
  },
});
