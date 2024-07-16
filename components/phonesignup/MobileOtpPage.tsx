import React from "react";
import { View, StyleSheet } from "react-native";
import StyledTextInput from "../ui/textinput/StyledTextInput";
import Header from "../header/Header";
import EnterDetailTextBold from "../ui/entereddetailtext/EnteredDetailTextBold";
import EnterDetailTextSub from "../ui/entereddetailtext/EnteredDetailsTextSub";
import SocialSignUpText from "../sociallogin/SocialSignUpText";
import Next from "../ui/nextbutton/Next";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import axios from "axios";
interface RootState {
  SignUp: {
    phoneNumber: string;
  };
}
export default function MobileSignUp() {
  const navigation = useNavigation();
  const signUpNumber = useSelector(
    (store: RootState) => store.SignUp.details.phoneNumber
  );
  console.log(signUpNumber);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  function otpPress() {
    console.log("ahsok");
  }
  const signUpPress = async (data) => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts"
      );

      if (response.status === 201) {
        navigation.navigate("EmailPage");
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
        <EnterDetailTextBold title="Enter Your Phone Number" />
        <EnterDetailTextSub subtitle="Enter phone number. You can always change it later." />
        <View style={styles.inputdiv}>
          <StyledTextInput
            control={control}
            name="number"
            email=""
            rules={""}
            editable={false}
            mobile={signUpNumber}
            secureTextEntry={false}
            keyboardType="number-pad"
            placeholder=""
          />
        </View>
      </View>
      <View style={[styles.input, { marginTop: 24 }]}>
        <EnterDetailTextBold title="Enter otp number" />
        <EnterDetailTextSub subtitle="OTP has been sent to your registered mobile number." />
        <View style={[styles.inputdiv, styles.inputmarg]}>
          <StyledTextInput
            control={control}
            editable={""}
            name="otp"
            mobile=""
            email=""
            placeholder="Enter OTP"
            secureTextEntry={false}
            keyboardType="number-pad"
            rules={{
              required: "OTP is required",
              pattern: {
                value: /^[0-9]*$/,
                message: "OTP should contain only numbers",
              },
              minLength: {
                value: 6,
                message: "OTP should be 6 digits",
              },
              maxLength: {
                value: 6,
                message: "OTP should be 6 digits",
              },
            }}
          />
          <View style={{ width: "35%" }}>
            <Next btnName="Verify" onPress={otpPress} />
          </View>
        </View>
      </View>

      <View style={[{ width: "90%" }, styles.buttondiv]}>
        <Next btnName="NEXT" onPress={handleSubmit(signUpPress)} />

        <View style={styles.signupTextContainer}>
          <SocialSignUpText
            firstline="Already have an account?"
            secondline="login"
            targetPage="LoginOtpPage"
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
    justifyContent: "center",
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