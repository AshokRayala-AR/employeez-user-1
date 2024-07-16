import { View, Text, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

function JobCard({ itemData, activeText }) {
  return (
    <View style={styles.container}>
      <View style={styles.leftcontainer}>
        <View style={styles.imgdiv}>
          <Image
            source={itemData.item.imgpath}
            style={{ width: 100,height:100, objectFit: "fill", borderRadius: 24 }}
          />
        </View>
        <View style={styles.skillsDiv}>
          <View>
            <Text style={[styles.textColor,{fontSize:20}]}>{itemData.item.title}</Text>
          </View>
          <View >
            <Text style={[styles.textColor,{textDecorationLine:"underline",fontSize:16}]}>Skills: </Text>
            <Text style={[styles.textColor]}>
              {itemData.item.descp[4].descpinfo
                .map((skill) => skill.list)
                .join(", ")}
            </Text>
          </View>
          <View>
            <Text style={[styles.textColor,{textDecorationLine:"underline", fontSize:16}]}>Experience: </Text>
            <Text style={[styles.textColor]}>
              {itemData.item.cards[1].title}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.rightcontainer}>
        <View>
          <Text style={[styles.textColor,{color:'lightgreen',fontSize:18}]}>{activeText}</Text>
        </View>
        <View>
          <Icon name="trash-outline" size={24} color={"white"}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    backgroundColor: "#333738",
    borderRadius: 14,

  },
  leftcontainer: {
    flexDirection: "row",
    justifyContent:'center',
    alignItems:"center",
    flex: 1,
    gap:8
  },
  rightcontainer: {
    // flex: 2,
    justifyContent:"center",
    alignItems:"center",
    gap:18
  },
  imgdiv: {
    borderRadius: 24,
  },
skillsDiv:{
    flex:1,
    gap:3
},
  textColor: {
    color: "white",
  },
});

export default JobCard;