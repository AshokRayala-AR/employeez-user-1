import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import HeaderNotify from "../header/HeaderNotify";
import ProfileCard from "./ProfileCard";
import MenuCard from "./MenuCard";
import ProfilePic from "./ProfilePic";

export default function ProfilePage() {
  return (
    <ScrollView style={styles.container}>
      <HeaderNotify />
      <View style={styles.profileContainer}>
        <View style={{width:'100%'}}>
          <ProfilePic />
        </View>
        <View>
          <ProfileCard />
        </View>
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            
          }}
        >
          <MenuCard />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
  },

  profileContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "auto",
  },

  headerview: {
    position: "relative",
  },
});