import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ImageBackground,
} from "react-native";

import { JobsGridData } from "../../components/jobgrid/JobGridData";
import Header from "../header/Header";
import CompanyCardFooter from "../footernav/CompanyCardFooter";

const GridItem = ({ text, imgpath }) => (
  <View style={styles.item}>
    <ImageBackground source={imgpath} style={styles.backgroundImage}>
      <Text style={styles.text}>{text}</Text>
    </ImageBackground>
  </View>
);

const Grid = () => {
  const renderItem = ({ item, index }) => {
    if (index === 0) {
      return (
        <View style={styles.row}>
          <GridItem text={item.text} imgpath={item.imgpath} />
        </View>
      );
    } else if ((index - 1) % 2 === 0) {
      const nextIndex = index + 1;
      return (
        <View style={styles.row}>
          <GridItem text={item.text} imgpath={item.imgpath} />
          {nextIndex < JobsGridData.length && (
            <GridItem
              text={JobsGridData[nextIndex].text}
              imgpath={JobsGridData[nextIndex].imgpath}
            />
          )}
        </View>
      );
    }
    return null;
  };

  const keyExtractor = (item) => item.id;

  return (
    <View style={{height: "100%", backgroundColor: "#000"}}>
        <Header />
        <FlatList
          data={JobsGridData}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
        <CompanyCardFooter />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    padding: 16,
    height: "100%",
    borderRadius: 36,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", 
    justifyContent: "center",
    borderRadius: 36,
    
  },
  text: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    flex: 1,
    height: 210,
    
    
  },
});

export default Grid;