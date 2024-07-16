import React from "react";
import { View, StyleSheet, Alert } from "react-native";
import StyledTextInput from "../ui/textinput/StyledTextInput";
import Header from "../header/Header";
import EnterDetailTextBold from "../ui/entereddetailtext/EnteredDetailTextBold";
import EnterDetailTextSub from "../ui/entereddetailtext/EnteredDetailsTextSub";
import SocialSignUpText from "../sociallogin/SocialSignUpText";
import Next from "../ui/nextbutton/Next";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updateEmail, updatePhoneNumber } from "../../store/slices/SignUpSlice";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

export default function MobileSignUp() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const signUpPress = async (data) => {
    try {
      dispatch(updatePhoneNumber(data.number));
      dispatch(updateEmail(data.email));

      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts"
      );

      if (response.status === 201) {
        navigation.navigate("MobileOtpPage");
      } else {
        Alert.alert("Error", "Failed to sign up. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      Alert.alert("Error", "Failed to sign up. Please try again later.");
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.input}>
        {/* <EnterDetailText
          title="Enter Your Phone Number"
          subtitle="Enter phone number. You can always change it later."
        /> */}
        <EnterDetailTextBold title="Enter Your Phone Number" />
        <EnterDetailTextSub subtitle="Enter phone number. You can always change it later." />
        <View style={styles.inputdiv}>
          <StyledTextInput
            control={control}
            name="number"
            email=""
            mobile=""
            editable={""}
            placeholder="+91 Phone Number"
            secureTextEntry={false}
            keyboardType="number-pad"
            rules={{
              required: "Phone Number is required",
              pattern: {
                value: /^[0-9]*$/,
                message: "Phone Number should contain only numbers",
              },
              minLength: {
                value: 10,
                message: "Phone Number should be 10 digits",
              },
              maxLength: {
                value: 10,
                message: "Phone Number should be 10 digits",
              },
            }}
          />
        </View>
      </View>
      <View style={[styles.input, { marginTop: 24 }]}>
        <EnterDetailTextBold title="Enter Your Email" />
        <EnterDetailTextSub subtitle="Enter email id, You can always change it later." />
        <View style={[styles.inputdiv, styles.inputmarg]}>
          <StyledTextInput
            control={control}
            name="email"
            email=""
            mobile=""
            editable={""}
            placeholder="Enter Your email"
            secureTextEntry={false}
            keyboardType="email-address"
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            }}
          />
        </View>
      </View>

      <View style={[{ width: "90%" }, styles.buttondiv]}>
        <Next btnName="NEXT" onPress={handleSubmit(signUpPress)} />

        <View style={styles.signupTextContainer}>
          <SocialSignUpText
            firstline="Already have an account?"
            secondline="login"
            targetPage="LoginPage"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    justifyContent:"center",
    alignItems: "flex-start",
    width: "90%",
    gap: 12,
  },
  inputmarg: {
    marginBottom: 54,
  },
  buttondiv: {
    flex: 2,
    alignItems: "flex-start",
    marginTop: 24,
  },
  inputdiv: {
    width: "100%",
  },
  signupTextContainer: {
    flexDirection: "row",
    marginBottom: 10,
    width: "100%",
    justifyContent: "center",
    marginTop: 8,
  },
  signupButton: {
    marginLeft: 5,
  },
});