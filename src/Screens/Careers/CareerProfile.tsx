import { connect } from "react-redux";
import React, { useEffect } from "react";
import { ActivityIndicator, Dimensions, Image } from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import { getCareerProfile } from "../../actions/careerActions";
import { Box, Text } from "../../components";
import { IntroSection, RoundedBorderButton } from "../MyProfile/components";
import CompanyCard from "./components/CompanyCard";
import NetWorkComponentTitle from "./components/NetWorkComponentTitle";
import { getUserDetail } from "../../actions/userActions";

interface CareerProfileProps {
  career: any;
  getProfile: (userId: number) => void;
  route: any;
  getUserDetail: () => void;
  profileData: any;
  getUserProfile: () => void;
}
export const companyLogo = require("../../../assets/images/company-logo.png");

export const friends = require("../../../assets/images/small-image.png");
const walls = require("../../../assets/images/wall.png");
const CareerProfile = ({
  getProfile,
  career,
  route,
  getUserDetail,
  profileData,
  getUserProfile,
}: CareerProfileProps) => {
  useEffect(() => {
    getUserProfile();
  }, []);
  // const { userId } = route.params;
  // useEffect(() => {
  //   getProfile(userId);
  // }, [userId]);
  // const {
  //   careerProfileLoading,
  //   careerProfileData,
  //   careerProfileError,
  // } = career;
  const { userProfileData, loading } = profileData;
  const {
    about,
    address,
    city,
    companyName,
    designation,
    education,
    email,
    firstName,
    interest,
    isEnabled,
    isFriend,
    isFriendRequested,
    lastName,
    livesIn,
    phoneNumber,
    pincode,
    state,
    uId,
    _links,
  } = userProfileData;
  const { width: wWidth, height: wHeight } = Dimensions.get("window");
  return (
    <Box flex={1} backgroundColor="iconBackground">
      {loading ? (
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
              {_links ? (
                <Image
                  style={{ height: 140, width: 140, borderRadius: 140 / 2 }}
                  source={{ uri: _links.profilePic.href }}
                />
              ) : null}
            </Box>
            <Box
              style={{
                position: "relative",
                top: 90,
              }}
            >
              <RoundedBorderButton label={"Edit Profile"} onPress={() => {}} />
            </Box>
          </Box>
          {/* <IntroSection /> */}
          <Box marginHorizontal="s">
            <Text variant="cardTitle" color="primaryText">
              {firstName} {lastName}
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

          {[1, 2, 3, 4, 5].map((_, i) => {
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
          })}
        </ScrollView>
      )}
    </Box>
  );
};

function mapStateToProps(state: any) {
  return {
    // career: state.career,
    profileData: state.profile,
  };
}

const mapDispatchToProps = (dispatch: any) => ({
  getUserProfile: () => dispatch(getUserDetail()),
  //getProfile: (userId: number) => dispatch(getCareerProfile(userId)),
});
export default connect(mapStateToProps, mapDispatchToProps)(CareerProfile);
