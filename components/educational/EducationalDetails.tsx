import React from "react";
import { View, StyleSheet, Text, Pressable,Alert } from "react-native";
import Header from "../header/Header";
import Next from "../ui/nextbutton/Next";
import StyledTextInput from "../ui/textinput/StyledTextInput";
import StyledDateInput from "../ui/datebutton/StyledDateInput";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
export default function EducationalDetails() {
  function inputHandler() {}
  function anotherDetailsHandler() {}
  const navigation = useNavigation();
  const eduDetailsHandler = async (data) => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts"
      );

      if (response.status === 201) {
        navigation.navigate("PreviousWorkPage");
      } else {
        Alert.alert("Error", "Failed to sign up. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      Alert.alert("Error", "Failed to sign up. Please try again later.");
    }
  }; 
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.title}>Add your educational details</Text>
        <View>
          <StyledTextInput
            control={control}
            name="college"
            email=""
            mobile=""
            editable={""}
            placeholder="College Name"
            secureTextEntry={false}
            keyboardType="default"
            rules={{
              required: "college Name is required",
            }}
          />
        </View>
        <View>
          <StyledTextInput
            control={control}
            name="university"
            email=""
            mobile=""
            editable={""}
            placeholder="University"
            secureTextEntry={false}
            keyboardType="default"
            rules={{
              required: "University is required",
            }}
          />
        </View>
        <View>
          <StyledTextInput
            control={control}
            name="course"
            email=""
            mobile=""
            editable={""}
            placeholder="Course"
            secureTextEntry={false}
            keyboardType="default"
            rules={{
              required: "Course is required",
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            marginTop: 6,
            marginBottom: 6,
          }}
        >
          <StyledDateInput
            control={control}
            name="startdate"
            placeholder="Start Date"
            keyboardType="default"
            rules={{
              required: "date is required",
            }}
          />
          <StyledDateInput
            placeholder="End Date"
            keyboardType="default"
            control={control}
            name="enddate"
            rules={{
              required: "date is required",
            }}
          />
        </View>
        <View>
          <StyledTextInput
            control={control}
            name="Percentage"
            email=""
            mobile=""
            editable={""}
            placeholder="Percentage"
            secureTextEntry={false}
            keyboardType="default"
            rules={{
              required: "Percentage is required",
            }}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Next btnName="Next" onPress={handleSubmit(eduDetailsHandler)} />
      </View>
      <Pressable onPress={anotherDetailsHandler}>
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "600",
            textDecorationLine: "underline",
          }}
        >
          Add Another
        </Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#000",
    alignItems: "center",
  },
  content: {
    width: "80%",
    gap: 6,
  },
  buttonContainer: {
    width: "80%",
    marginVertical: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    color: "#fff",
    marginBottom: 16,
  },
});