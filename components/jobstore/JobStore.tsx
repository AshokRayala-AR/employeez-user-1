import { View, Text, FlatList, Image } from "react-native";
import JobDetailsButton from "../ui/jobdetailsbutton/JobDetailsButton";
import { useState } from "react";
import { useSelector } from "react-redux";
import JobCard from "./JobCard";

function JobStore() {
  const [jobDetailToggler, setjobDetailToggler] = useState(true);
  const appliedJobsArray = useSelector((store) => {
    return store.applied.appliedJob;
  });
  const savedJobsArray = useSelector((store) => {
    return store.saved.savedJob;
  });
  function appliedJobs() {
    setjobDetailToggler(true);
  }
  function savedJobs() {
    setjobDetailToggler(false);
  }
  function JobCardComp(itemData) {
    return (
      <View style={{ padding: 15 }}>
        <JobCard
          itemData={itemData}
          activeText={jobDetailToggler ? "Applied" : "Saved"}
        />
      </View>
    );
  }
  return (
    <View>
      <View>
        <JobDetailsButton
          btnNameA="Applied"
          btnNameB="Saved"
          onPressA={appliedJobs}
          onPressB={savedJobs}
          activeButton={jobDetailToggler ? "JobDetails" : "AboutCompany"}
        />
      </View>

      {jobDetailToggler ? (
        <FlatList
          data={appliedJobsArray}
          renderItem={JobCardComp}
          keyExtractor={(item, index) => {
            return index;
          }}
        />
      ) : (
        <FlatList
          data={savedJobsArray}
          renderItem={JobCardComp}
          keyExtractor={(item, index) => {
            return index;
          }}
        />
      )}
    </View>
  );
}

export default JobStore;