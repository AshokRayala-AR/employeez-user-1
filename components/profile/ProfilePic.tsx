import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function ProfilePic() {
  return (
    <View style={styles.profileDpContainer}>
      <Image source={require("../../assets/images/propic.jpeg")} style={styles.dp} />
      <View style={styles.editicon}>
        <Icon name="pencil-outline" size={20} color="black" />
      </View>
      <View style={styles.imgText}>
        <Text style={{ paddingHorizontal: 24, paddingVertical: 6 }}>
          60% Completed
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  profileDpContainer: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    width: "100%",
  },
  editicon: {
    backgroundColor: "lightgrey",
    position: "absolute",
    top: 0,
    right: 145,
    width: 35,
    height: 35,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  imgText: {
    backgroundColor: "#8DFFC1",
    borderRadius: 20,
    position: "absolute",
    bottom: 0,
  },
  dp: {
    width: "40%",
    height: 160,
    borderRadius: 80,
    borderWidth: 6,
    borderColor: "lightgreen",
  },
});