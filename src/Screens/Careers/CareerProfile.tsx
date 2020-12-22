import { connect } from "react-redux";
import React, { useEffect } from "react";
import { ActivityIndicator, Image } from "react-native";
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
}: CareerProfileProps) => {
  const { userId } = route.params;
  useEffect(() => {
    getProfile(userId);
  }, [userId]);
  const {
    careerProfileLoading,
    careerProfileData,
    careerProfileError,
  } = career;
  const { userProfileData } = profileData;
  //     about: null
  // address: null
  // city: null
  // companyName: null
  // designation: null
  // education: null
  // email: "test123@gmail.com"
  // firstName: "test"
  // interest: null
  // isEnabled: false
  // isFriend: false
  // isFriendRequested: true
  // lastName: "testing"
  // livesIn: null
  // phoneNumber: "9123456789"
  // pincode: null
  // state: null
  // uId: 3
  // _links.profilePic.href
  const { _links, firstName, lastName } = careerProfileData;
  return (
    <Box flex={1} backgroundColor="iconBackground">
      {careerProfileLoading ? (
        <Box>
          <ActivityIndicator />
        </Box>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <Box height={10}>
            <Image height={10} source={walls} />
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
            <Text>
              Morbi a suscipit ipsum. Suspendisse mollis libero ante.
              Pellentesque finibus convallis nulla vel placerat. Nulla ipsum
              dolor sit amet, consectetur adipiscing elitut eleifend nisl.
            </Text>
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
    career: state.career,
    profileData: state.profile,
  };
}

const mapDispatchToProps = (dispatch: any) => ({
  getUserDetail: () => dispatch(getUserDetail()),
  getProfile: (userId: number) => dispatch(getCareerProfile(userId)),
});
export default connect(mapStateToProps, mapDispatchToProps)(CareerProfile);
