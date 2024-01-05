import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, SIZES, images } from "../../../constants";

const PopularJobCard = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.jobCard}>
        <Image source={images.profile} style={styles.jobImage} />
        <Text style={styles.companyName} numberOfLines={1}>
          {item.name}
        </Text>
        <Text style={styles.position} numberOfLines={1}>
          {item.role}
        </Text>
        <Text style={styles.location} numberOfLines={1}>
          {item.location}
        </Text>
      </View>
    </View>
  );
};

export default PopularJobCard;

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.medium,
  },
  jobCard: {
    padding: SIZES.xLarge,
    backgroundColor: "#FFF",
    width: 250,
    borderRadius: 10,
  },
  jobImage: {
    width: 50,
    height: 50,
    borderRadius: 12,
  },
  companyName: {
    color: COLORS.gray2,
    fontWeight: "bold",
    fontSize: 16,
    marginTop: SIZES.small,
  },
  position: {
    fontWeight: "500",
    fontSize: 20,
    marginTop: SIZES.large,
  },
  location: {
    marginTop: SIZES.xxSmall,
  },
});
