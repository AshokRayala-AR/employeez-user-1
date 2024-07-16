import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { CardData } from "./CardData";

export default function ProfileCard() {
  return (
    <View style={styles.container}>
      {CardData.map((item, index) => {
        return (
          <View key={index} style={styles.card}>
            <View style={styles.iconContainer}>
              <Icon name={item.icon} size={40} color={item.iconColor} />
            </View>
            <View >
              <Text style={styles.title}>{item.title}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    height: "auto",
    gap: 8,

  },
  card: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    padding: 3,
    alignItems: "center",
    marginVertical: 10,
    backgroundColor: "#F8F8FD1A",
    width: 120,
    height: 150,
    borderRadius: 12,
    
  },
  iconContainer: {
    marginRight: 10,
    
  },

  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "400"
  },
});