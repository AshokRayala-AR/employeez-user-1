// CompanyCardLayout.js
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "../header/Header";
import CompanyCard from "./CompanyCard";
import CompanyCardFooter from "../footernav/CompanyCardFooter";
import Next from "../ui/nextbutton/Next";
import { useNavigation } from "@react-navigation/native";

export default function CompanyCardLayout() {
  const navigation = useNavigation();
  const [selectedCompany, setSelectedCompany] = useState(null);

  function ApplyHandler(company) {
    navigation.navigate("CompanyInfoPage", { company: company });
    
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>
      <View style={styles.content}>
        <CompanyCard onApply={(company) => setSelectedCompany(company)} />
      </View>
      <View style={{ width: "50%" }}>
        <Next btnName="Apply" onPress={() => ApplyHandler(selectedCompany)} />
      </View>
      <View style={styles.footer}>
        <CompanyCardFooter />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flex: 1,
  },
  content: {
    width: "90%",
  },
  footer: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
  },
});