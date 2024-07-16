
import React, { useState } from "react";
import {
  FlatList,
  View,
  Image,
  Text,
  StyleSheet,
  PanResponder,
  Animated,
  Pressable,
} from "react-native";
import { CompanyCardData } from "./CompanyCardData";

export default function CompanyCard({ onApply }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [pan, setPan] = useState(new Animated.ValueXY());

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event(
      [
        null,
        {
          dx: pan.x,
          dy: pan.y,
        },
      ],
      { useNativeDriver: false }
    ),
    onPanResponderRelease: (e, gesture) => {
      if (gesture.dx > 120) {
        saveCard();
      } else if (gesture.dx < -120) {
        removeCard();
      } else {
        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false,
        }).start();
      }
    },
  });

  const saveCard = () => {
    console.log("Card saved");
    nextCard();
  };

  const removeCard = () => {
    console.log("Card removed");
    nextCard();
  };

  const nextCard = () => {
    Animated.timing(pan, {
      toValue: { x: 0, y: 0 },
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex === CompanyCardData.length - 1) {
          return 0;
        } else {
          return prevIndex + 1;
        }
      });
    });
  };

  const getCardStyle = () => {
    const rotate = pan.x.interpolate({
      inputRange: [-200, 0, 200],
      outputRange: ["-10deg", "0deg", "10deg"],
    });

    return {
      ...pan.getLayout(),
      transform: [{ rotate }],
    };
  };

  const renderItem = ({ item, index }) => {
    if (index !== currentIndex) return null;
    return (
      <Animated.View
        key={index}
        style={[styles.card, getCardStyle()]}
        {...panResponder.panHandlers}
      >
        <View style={styles.container}>
          <View
            style={{
              backgroundColor: "white",
              borderRadius: 8,
              elevation: 5,
            }}
          >
            <Image source={item.path} style={styles.image} />
          </View>
          <Text style={styles.textsizeb}>Hiring For: </Text>
          <Text style={{ fontSize: 24, fontWeight: "600" }}>{item.title}</Text>
          {item.skillsTitle.map((skill, skillIndex) => (
            <View key={skillIndex} style={styles.carddetails}>
              <Text style={styles.textsizeb}>{skill.name}</Text>
              <Text style={styles.textsize}>: {skill.descp}</Text>
            </View>
          ))}
        </View>
        {/* Add apply button */}
        <Pressable onPress={() => onApply(item)}>
          <Text>Apply</Text>
        </Pressable>
      </Animated.View>
    );
  };

  return (
    <FlatList
      data={CompanyCardData}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
  card: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "lightgrey",
    margin: 10,
    marginBottom: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    gap: 8,
  },
  image: {
    width: "100%",
    height: 100,

    borderRadius: 28,
  },
  textsize: {
    fontSize: 18,
    fontWeight: "400",
    flex: 2,
  },
  textsizeb: {
    fontSize: 20,
    fontWeight: "400",
    flex: 1,
  },
  carddetails: {
    flexDirection: "row",
  },
});