import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import JobDetailsButton from "../ui/jobdetailsbutton/JobDetailsButton";
import { JobDetails } from "./CompanyInfoData";
import Icon from "react-native-vector-icons/Ionicons";
import Next from "../ui/nextbutton/Next";
import { useState } from "react";
import { CompanyAboutData } from "./CompanyInfoData";
import { useDispatch } from "react-redux";
import { updateSavedJob } from "../../store/slices/SavedSlice";
import { updateAppliedJob } from "../../store/slices/AppliedSlices";
import { useNavigation } from "@react-navigation/native";
function CompanyInfoPage() {
  const [jobDetailToggler, setJobDetailToggler] = useState(true);
  const dispatch = useDispatch();
const navigation = useNavigation()
  function saveHandler() {
    dispatch(updateSavedJob(JobDetails[0]));
    navigation.navigate('JobStore')
    console.log(JobDetails[0]);
  }
  function applyHandler() {
    dispatch(updateAppliedJob(JobDetails[0]));
    navigation.navigate('JobStore')
    console.log(JobDetails[0]);
  }

  function jobInfoHandler() {
    setJobDetailToggler(true)
  }

  function aboutHandler() {
    setJobDetailToggler(false);
  }

  return (
    <View style={styles.container}>
      <View style={styles.imgcont}>
        <Image
          source={JobDetails[0].imgpath}
          style={{ width: "100%", height: "100%", borderRadius: 28 }}
        />
      </View>

      <View>
        <JobDetailsButton btnNameA="Job Details" btnNameB="About Company" onPressA={jobInfoHandler} onPressB={aboutHandler} activeButton={jobDetailToggler ? "JobDetails" : "AboutCompany"}/>
      </View>

      {jobDetailToggler ? (
        <ScrollView>
          <View style={styles.iconwrapper}>
            {JobDetails[0].cards.map((item, index) => {
              return (
                <View style={styles.iconcard} key={index}>
                  <Icon name={item.icon} size={24} />
                  <Text style={{ fontSize: 14, fontWeight: "500" }}>
                    {item.title}
                  </Text>
                </View>
              );
            })}
          </View>
          <View style={{ gap: 24 }}>
            {JobDetails[0].descp.map((item, index) => {
              return (
                <View style={styles.textview} key={index}>
                  <Text style={styles.infotextb}>{item.descptitle}:</Text>

                  {item.descpinfo.map((inItem, index1) => {
                    return (
                      <View
                        key={index1}
                        style={
                          inItem.skill
                            ? { flexDirection: "row" }
                            : { flexDirection: "column" }
                        }
                      >
                        <View key={index1} style={styles.bulletItem}>
                          {!inItem.skill && (
                            <Text style={styles.bullet}>&bull;</Text>
                          )}
                          <Text
                            style={
                              inItem.skill ? styles.skillText : styles.infotext
                            }
                          >
                            {inItem.list}
                          </Text>
                        </View>
                      </View>
                    );
                  })}
                </View>
              );
            })}
          </View>
        </ScrollView>
      ) : (
        <ScrollView>
          <View style={{padding: 4, gap: 18}}>
            <View>
              <Text style={styles.abouttext}>
                {CompanyAboutData[0].descpa}
              </Text>
            </View>

            <View>
              <Text style={styles.abouttext}>
                {CompanyAboutData[0].descpb}
              </Text>
            </View>
          </View>
        </ScrollView>
      )}

      <View style={{ width: "100%", flexDirection: "row", gap: 8 }}>
        <View style={{ flex: 1 }}>
          <Next btnName="Save" onPress={saveHandler} />
        </View>
        <View style={{ flex: 1 }}>
          <Next btnName="Apply" onPress={applyHandler} />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
    padding: 24,
    gap: 16,
  },
  imgcont: {
    width: "100%",
    height: 180,
    borderRadius: 28,
  },
  iconcard: {
    backgroundColor: "white",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 14,
    paddingVertical: 8,
    alignItems: "center",
    gap: 6,
  },
  iconwrapper: {
    width: "100%",
    flexDirection: "row",
    gap: 6,
    marginBottom: 12,
    marginTop: 6,
  },
  infotext: {
    color: "white",
    fontSize: 16,
    padding: 10,
    textDecorationStyle: "dotted",
  },
  infotextb: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
    textDecorationLine: "underline",
  },
  textview: {
    gap: 4,
  },

  skillText: {
    backgroundColor: "white",
    color: "black",
    fontSize: 16,
    padding: 10,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 6,
  },
  bulletItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginLeft: 24,
  },
  bullet: {
    color: "white",
    fontSize: 20,
    marginRight: 8,
  },
  abouttext: {
    color: "white",
    fontSize: 16,
    textAlign: "justify"
  }
});

export default CompanyInfoPage;