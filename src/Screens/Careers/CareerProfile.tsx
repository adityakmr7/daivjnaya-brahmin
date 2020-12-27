import { connect } from "react-redux";
import React, { useEffect } from "react";
import { ActivityIndicator, Dimensions, Image } from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import { getCareerProfile, getProfileCv } from "../../actions/careerActions";
import { Box, Text } from "../../components";
import { IntroSection, RoundedBorderButton } from "../MyProfile/components";
import CompanyCard from "./components/CompanyCard";
import NetWorkComponentTitle from "./components/NetWorkComponentTitle";
import { getUserDetail } from "../../actions/userActions";

interface CareerProfileProps {
  career: any;
  route: any;
  profileData: any;
  careerProfile: any;
  getCvProfile: () => void;
}
export const companyLogo = require("../../../assets/images/company-logo.png");

export const friends = require("../../../assets/images/small-image.png");
const walls = require("../../../assets/images/wall.png");
const CareerProfile = ({
  route,

  profileData,
  getCvProfile,
  careerProfile,
}: CareerProfileProps) => {
  useEffect(() => {
    getCvProfile();
  }, []);
  const { cvProfileLoading, cvProfileSuccess, cvProfileError } = careerProfile;
  const {
    about,
    addressLine1,
    addressLine2,
    city,
    collegeName,
    companyCity,
    companyFromMonth,
    companyFromYear,
    companyName,
    companyToMonth,
    companyToYear,
    country,
    currentlyStudyingHere,
    currentlyWorkingHere,
    cvId,
    educationLevel,
    email,
    experiences, // array
    fieldOfStudy,
    fullName,
    isConnected,
    isInvited,
    jobTitle,
    phoneNumber,
    pincode,
    preferedJobSalary,
    preferedJobTitle,
    preferedJobType,
    skills,
    state,
    studyFromMonth,
    studyFromYear,
    studyToMonth,
    studyToYear,
    willingToRelocate,
    workDescription,
    workExperience,
    _links,
  } = cvProfileSuccess;
  console.log("cvprofile", cvProfileSuccess);
  const { width: wWidth, height: wHeight } = Dimensions.get("window");
  return (
    <Box flex={1} backgroundColor="iconBackground">
      {cvProfileLoading ? (
        <Box>
          <ActivityIndicator />
        </Box>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <Box height={10}>
            {_links && _links.coverPic ? (
              <Image
                style={{ height: wWidth * 0.5 }}
                source={{ uri: _links.coverPic.href }}
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
              {fullName}
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

          {experiences && experiences.length > 0 ? (
            experiences.map((item: any, i: number) => {
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
          ) : (
            <Box>
              <Text>Nothing In Here</Text>
            </Box>
          )}
        </ScrollView>
      )}
    </Box>
  );
};

function mapStateToProps(state: any) {
  return {
    careerProfile: state.career,
  };
}

const mapDispatchToProps = (dispatch: any) => ({
  getCvProfile: () => dispatch(getProfileCv()),
});
export default connect(mapStateToProps, mapDispatchToProps)(CareerProfile);
