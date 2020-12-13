import { connect } from "react-redux";
import React, { useEffect } from "react";
import { getJob } from "../../actions/careerActions";
import { Box, Text } from "../../components";
import {
  FlatList,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { ActivityIndicator, Dimensions, Image, StyleSheet } from "react-native";
const { width: wWidth, height: wHeight } = Dimensions.get("window");

interface CareerJobsProps {
  getAllJob: (q: string) => void;
  career: any;
}
const CareerJobs = ({ getAllJob, career }: CareerJobsProps) => {
  // Will Navigate to profile
  useEffect(() => {
    getAllJob("");
  }, []);
  const { jobsLoading, jobsAll, jobsError } = career;
  const renderItem = ({ item }: { item: any }) => {
    return (
      <TouchableWithoutFeedback onPress={() => {}}>
        {/* // Will Navigate to profile */}
        <Box
          paddingVertical="s"
          alignItems="center"
          marginHorizontal="s"
          // justifyContent="space-around"
          flexDirection="row"
          style={{
            height: wWidth * 0.2,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderWidth: StyleSheet.hairlineWidth,
            borderColor: "#0000001A",
          }}
        >
          <Box>
            {item._links.coverImage ? (
              <Image
                style={{ height: 50, width: 50, borderRadius: 25 }}
                source={{ uri: item._links.coverImage.href }}
              />
            ) : null}
          </Box>
          <Box paddingHorizontal="s">
            {item && item.companyName ? (
              <Text fontSize={14}>{item.companyName}</Text>
            ) : null}
            <Box>
              <Text>{item.description}</Text>
            </Box>
          </Box>
        </Box>
      </TouchableWithoutFeedback>
    );
  };
  return (
    <Box flex={1}>
      {jobsLoading ? (
        <Box>
          <ActivityIndicator />
        </Box>
      ) : (
        <Box>
          <FlatList
            renderItem={renderItem}
            data={jobsAll}
            keyExtractor={(item: any) => item.jpId.toString()}
          />
        </Box>
      )}
    </Box>
  );
};

function mapStateToProps(state: any) {
  return {
    career: state.career,
  };
}
const mapDispatchToProps = (dispatch: any) => ({
  getAllJob: (q: string) => dispatch(getJob(q)),
});
export default connect(mapStateToProps, mapDispatchToProps)(CareerJobs);
