import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, SIZES, STRING, images } from "../../../constants";
import { checkImageURL } from "../../../util";

const NearbyJobCard = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: checkImageURL(item.employer_logo)
            ? item.employer_logo
            : STRING.defaultImage,
        }}
        resizeMode="contain"
        style={styles.jobImg}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.companyName}>{item.employer_name}</Text>
        <Text style={styles.roleName}>{item.job_title}</Text>
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
