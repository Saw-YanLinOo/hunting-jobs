import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const HeaderBtn = ({ iconUrl, dimension, onPressed }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPressed}>
      <Image source={iconUrl} style={styles.image(dimension)} />
    </TouchableOpacity>
  );
};

export default HeaderBtn;

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  image: (dimension) => ({
    width: dimension,
    height: dimension,
    resizeMode: "cover",
    borderRadius: 12,
  }),
});
