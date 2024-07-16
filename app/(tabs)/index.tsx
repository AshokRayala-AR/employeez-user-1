import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PersonalDetails from "../../components/personaldetails/PersonalDetails";
import SocialLoginWrapper from "../../components/sociallogin/SocialLoginWrapper";
import MobileSignUp from "../../components/phonesignup/MobileSignUp";
import MobileOtpPage from "../../components/phonesignup/MobileOtpPage";
import EducationalDetails from "../../components/educational/EducationalDetails";
import EmailPage from "../../components/emailsignup/EmailPage";
import ProfilePage from "../../components/profile/ProfilePage";
import LoginPage from "../../components/login/LoginPage";
import PreviousWorkPage from "../../components/previouswork/PreviousWorkPage";
import LoginOtpPage from "../../components/login/LoginOtpPage";
import CompanyCardLayout from "../../components/companycards/CompanyCardLayout";
import JobsGridTile from "../../components/jobgrid/JobGridtile";
import JobDetailsButton from "../../components/ui/jobdetailsbutton/JobDetailsButton";
import CompanyInfoPage from "../../components/companyinfo/CompanyInfoPage";

import store from "../../store/Store";
import JobStore from "../../components/jobstore/JobStore";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen
            name="CompanyCardLayout"
            component={CompanyCardLayout}
          />
          <Stack.Screen name="JobsGridTile" component={JobsGridTile} />
          <Stack.Screen
            name="SocialLoginWrapper"
            component={SocialLoginWrapper}
          />
          <Stack.Screen name="JobStore" component={JobStore} />
          <Stack.Screen name="JobDetailsButton" component={JobDetailsButton} />
          <Stack.Screen name="CompanyInfoPage" component={CompanyInfoPage} />

          <Stack.Screen name="MobileSignUp" component={MobileSignUp} />
          <Stack.Screen name="MobileOtpPage" component={MobileOtpPage} />
          <Stack.Screen name="EmailPage" component={EmailPage} />
          <Stack.Screen name="PersonalDetails" component={PersonalDetails} />
          <Stack.Screen name="ProfilePage" component={ProfilePage} />
          <Stack.Screen
            name="EducationalDetails"
            component={EducationalDetails}
          />
          <Stack.Screen name="PreviousWorkPage" component={PreviousWorkPage} />

          <Stack.Screen name="LoginPage" component={LoginPage} />
          <Stack.Screen name="LoginOtpPage" component={LoginOtpPage} />
        </Stack.Navigator>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});