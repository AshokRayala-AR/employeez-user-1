import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Header from "./Header";

export default function HeaderNotify() {
  return (
    <View style={styles.header}>
      <View>
        <Header />
      </View>
      <View>
        <Image
          source={require("../../assets/images/bell.png")}
          style={{ width: 30, height: 40 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#000",
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 12,
    },
  });