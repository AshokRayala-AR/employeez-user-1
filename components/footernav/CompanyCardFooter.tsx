

import React from "react";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function CompanyCardFooter() {
  return (
    <View style={styles.container}>
      <Icon name="home" size={24} color="black" />
      <Icon name="grid" size={24} color="black" />
      <Icon name="chatbubbles" size={24} color="black" />
      <Icon name="person" size={24} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "lightgray",
  },
});