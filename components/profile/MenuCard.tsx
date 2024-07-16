
import Icon from "react-native-vector-icons/Ionicons";
import { menuData } from "./CardData";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function MenuCard() {
  return (
    <View style={styles.container}>
      <ScrollView style={{ width: "100%", }}>
        {menuData.map((item, index) => {
          return (
            <View style={{ width: "100%", marginBottom:12 }}>
              <View>
                <Text style={[styles.btext]}>{item.category}</Text>
              </View>
              <View key={index} style={styles.card}>
                <View style={{ gap: 18 }}>
                  {item.items.map((inItem) => {
                    return (
                      <View style={styles.iconcontainer}>
                        <View>
                          <Icon name={inItem.icon} color="white" size={24} />
                        </View>
                        <View>
                          <Text style={[styles.text]}>{inItem.title}</Text>
                        </View>
                      </View>
                    );
                  })}
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "90%",
    justifyContent: "center",
    alignItems: "center",

    gap: 8,
  },
  text: {
    color: "white",
    fontSize: 16,
  },
  btext: {
    color: "white",
    fontSize: 20,
    fontWeight: "500"

  },
  card: {
    flexDirection: "column",
    width: "100%",

    padding: 12,

    marginVertical: 10,
    backgroundColor: "#F8F8FD1A",
    // width: "100%",
    borderRadius: 12,
  },
  iconcontainer: {
    flexDirection: "row",
    gap: 18,
  },
});
