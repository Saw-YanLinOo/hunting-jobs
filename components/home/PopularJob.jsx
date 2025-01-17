import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constants";
import PopularJobCard from "../common/card/PopularJobCard";
import useFetch from "../../hooks/useFetch";

const popularJob = [
  { id: 1, name: "Job Hunting Company", role: "React Dev", location: "US" },
  {
    id: 2,
    name: "Job Company Name",
    role: "React Developer (Senior)",
    location: "US",
  },
];
const PopularJob = () => {
  const { data, isLoading, error, request } = useFetch("search", {
    query: "React Developer",
    num_page: 1,
  });

  return (
    <View>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Popular Jobs</Text>
        <Text style={styles.showAllText}>Show all</Text>
      </View>
      {isLoading ? (
        <ActivityIndicator size="large" color={COLORS.primary} />
      ) : error ? (
        <Text>{error}</Text>
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => <PopularJobCard item={item} />}
          keyExtractor={(item) => item.job_id}
          contentContainerStyle={{ columnGap: SIZES.medium }}
          horizontal
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default PopularJob;

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: SIZES.large,
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
