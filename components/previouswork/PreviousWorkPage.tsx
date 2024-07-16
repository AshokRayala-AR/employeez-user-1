import React, {useState} from "react";
import { View, StyleSheet, Text, Pressable,Alert } from "react-native";
import Header from "../header/Header";
import Next from "../ui/nextbutton/Next";
import StyledTextInput from "../ui/textinput/StyledTextInput";
import StyledDateInput from "../ui/datebutton/StyledDateInput";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
export default function PreviousWorkPage() {
  const navigation = useNavigation();
  const [isChecked, setIsChecked] = useState(false);
  function anotherDetailsHandler() {


  }
  function NxtPageHandler() {
    navigation.navigate("ProfilePage");
  }
  const workHandler = async (data) => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts"
      );

      if (response.status === 201) {
        // navigation.navigate("PreviousWorkPage");
        console.log(data)
      } else {
        Alert.alert("Error", "Failed to sign up. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      Alert.alert("Error", "Failed to sign up. Please try again later.");
    }
  }

  const { control, handleSubmit, formState: {errors}} = useForm();
    return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.title}>Previous Work</Text>
        <View>
        <StyledTextInput
            control={control}
            name="employer"
            email=""
            mobile=""
            editable={""}
            placeholder="Employer Name"
            secureTextEntry={false}
            keyboardType="default"
            rules={{
              required: "Employer is required",
            }}
          />
        </View>
        <View>
        <StyledTextInput
            control={control}
            name="role"
            email=""
            mobile=""
            editable={""}
            placeholder="Role"
            secureTextEntry={false}
            keyboardType="default"
            rules={{
              required: "Role is required",
            }}
          />
        </View>
        <View>
        <StyledTextInput
            control={control}
            name="Department"
            email=""
            mobile=""
            editable={""}
            placeholder="Department"
            secureTextEntry={false}
            keyboardType="default"
            rules={{
              required: "Department is required",
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
            placeholder="Start Date"
            keyboardType="default"
            control={control}
            name="startdate"
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
            name="package"
            email=""
            mobile=""
            editable={""}
            placeholder="Current Package"
            secureTextEntry={false}
            keyboardType="default"
            rules={{
              required: "Package is required",
            }}
          />
        </View>
      </View>
      <View style={styles.checkboxContainer}>
          <Pressable
            style={[styles.checkbox, isChecked && styles.checked]}
            onPress={() => setIsChecked(!isChecked)}
          />
          <Text style={styles.checkboxLabel}>Currently Working Here</Text>
        </View>
      <View style={styles.buttonContainer}>
        <Next btnName="Next" onPress={workHandler}/>
        <Next btnName="Skip" onPress={NxtPageHandler}/>
      </View>
      <Pressable onPress={anotherDetailsHandler}>
      <Text style={{ color: 'white',fontSize: 20, fontWeight :"600", textDecorationLine: "underline" }}>Add Another</Text>
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
  checkboxContainer: {
    flexDirection: "row",
    marginTop: 16,
    alignItems: "flex-start",
    width: "78%",

  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#FFFFFF",
    marginRight: 8,
  },
  checked: {
    backgroundColor: "#EA4080",
    borderColor: "#EA4080",
  },
  checkboxLabel: {
    color: "#FFFFFF",
    fontSize: 16,
    
  },
});