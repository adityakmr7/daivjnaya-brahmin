import React, { useEffect, useLayoutEffect } from "react";
import { ActivityIndicator, Dimensions, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { getJobProfile } from "../../actions/careerActions";
import { Box, Text } from "../../components";
import { RoundedBorderButton } from "../MyProfile/components";
import NetWorkComponentTitle from "./components/NetWorkComponentTitle";
export const companyLogo = require("../../../assets/images/company-logo.png");
const { width: wWidth, height: wHeight } = Dimensions.get("window");

interface CareerJobProfileProps {
  jobProfile: any;
  getProfile: (jpId: number) => void;
  route: any;
  navigation: any;
}
const CareerJobProfile = ({
  jobProfile,
  getProfile,
  route,
  navigation,
}: CareerJobProfileProps) => {
  const { userId, title } = route.params;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: title,
    });
  }, [title]);
  useEffect(() => {
    getProfile(userId);
  }, [userId]);

  const { jobProfileLoading, jobProfileSuccess, jobProfileError } = jobProfile;

  const {
    _links,

    about,
    experiences,
    companyName,
    fullName,
  } = jobProfileSuccess;
  //   addressLine1: "addressLine1"
  // addressLine2: "addressLine2"
  // alreadyApplied: null
  // city: "city"
  // companyName: "companyName"
  // country: "country"
  // creationDate: 1607229449000
  // description: "description"
  // education: "education"
  // employerEmail: "employerEmail@gmail.com"
  // employerName: "employerName"
  // employerPhoneNumber: "9876543210"
  // experience: "experience"
  // jobTitle: "jobTitle"
  // jpId: 3
  // pinCode: "pinCode"
  // state: "state"
  // updatedDate: 1607229449000

  return (
    <Box flex={1} backgroundColor="iconBackground">
      {jobProfileLoading ? (
        <Box>
          <ActivityIndicator />
        </Box>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <Box height={10}>
            {_links && _links.coverImage ? (
              <Image
                style={{ height: wWidth * 0.5 }}
                source={{ uri: _links.coverImage.href }}
              />
            ) : null}
          </Box>
          <Box
            marginHorizontal="xl"
            justifyContent="space-between"
            style={{ marginTop: 115, marginLeft: 20 }}
            flexDirection="row"
          >
            <Box borderRadius="xl" height={140} width={140}>
              {_links && _links.profilePic ? (
                <Image
                  style={{ height: 140, width: 140, borderRadius: 140 / 2 }}
                  source={{ uri: _links.profilePic.href }}
                />
              ) : null}
            </Box>
            <Box
              style={{
                position: "relative",
                top: 80,
              }}
            >
              <RoundedBorderButton label={"Edit Profile"} onPress={() => {}} />
            </Box>
          </Box>
          {/* <IntroSection /> */}
          <Box marginHorizontal="s">
            <Text variant="cardTitle" color="primaryText">
              {companyName}
            </Text>
          </Box>

          <Box borderWidth={1} borderColor="greyish">
            <NetWorkComponentTitle title="About" onPress={() => {}} />
          </Box>
          <Box paddingVertical="s" paddingHorizontal="s">
            {about ? <Text>{about}</Text> : null}
          </Box>
          <Box backgroundColor="mainBackground" height={5} />
          <Box borderWidth={1} borderColor="greyish">
            <NetWorkComponentTitle title="Experience" onPress={() => {}} />
          </Box>

          {experiences && experiences.length > 0
            ? experiences.map((item: any, i: number) => {
                return (
                  <Box
                    key={i}
                    paddingVertical="s"
                    paddingHorizontal="s"
                    flexDirection="row"
                  >
                    <Box>
                      <Image source={companyLogo} />
                    </Box>
                    <Box>
                      <Text>Designation</Text>
                      <Text variant="profileAction">Company Name</Text>
                      <Text variant="profileAction">
                        Feb 2019 - Nov 2019 10 moss
                      </Text>
                    </Box>
                  </Box>
                );
              })
            : null}
        </ScrollView>
      )}
    </Box>
  );
};
function mapStateToProps(state: any) {
  return {
    jobProfile: state.career,
  };
}

const mapDispatchToProps = (dispatch: any) => ({
  getProfile: (jpId: number) => dispatch(getJobProfile(jpId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CareerJobProfile);
