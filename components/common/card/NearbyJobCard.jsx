import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, SIZES, images } from "../../../constants";

const NearbyJobCard = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image source={images.profile} style={styles.jobImg} />
      <View style={styles.infoContainer}>
        <Text style={styles.companyName}>{item.name}</Text>
        <Text style={styles.roleName}>{item.role}</Text>
      </View>
    </View>
  );
};

export default NearbyJobCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    padding: SIZES.medium,
    marginTop: SIZES.medium,
    flexDirection: "row",
  },
  jobImg: {
    width: 50,
    height: 50,
    borderRadius: 12,
  },
  infoContainer: {
    flex: 1,
    marginLeft: SIZES.medium,
    justifyContent: "center",
  },
  companyName: {
    fontSize: 16,
    fontWeight: "500",
  },
  roleName: {
    fontSize: 14,
    color: COLORS.gray,
  },
});
