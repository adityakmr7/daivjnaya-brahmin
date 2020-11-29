import { RouteProp } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef } from "react";
import { ActivityIndicator, Dimensions, Platform, Image } from "react-native";
import {
  RectButton,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { connect } from "react-redux";
import IntroSection from "../MyProfile/components/IntroSection";
import { getUserDetailById } from "../../actions/userActions";
import { Box, Text } from "../../components";
import { AppRoutes } from "../../components/NavigationRoutes";
import { Feather as Icon } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";
import { BottomDrawerComponent, RoundedBorderButton } from "./components";
import RBSheet from "react-native-raw-bottom-sheet";

interface UserDetailProps {
  navigation: StackNavigationProp<AppRoutes, "UserDetail">;
  route: RouteProp<AppRoutes, "UserDetail">;

  detail: {
    userDetailByIdLoading: boolean;
    userDetailByIdError: boolean;
    userDetailById: {
      about: string | null;
      address: string | null;
      city: string | null;
      companyName: string | null;
      designation: string | null;
      education: string | null;
      email: string;
      firstName: string;
      interest: string | null;
      isEnabled: boolean;
      isFriend: boolean;
      isFriendRequested: boolean;
      lastName: string;
      livesIn: null | string;
      phoneNumber: string;
      pincode: null | string;
      state: null | string;
      uId: number;
      _links: {
        profilePic: { href: string };
      };
    };
  };
  getDetail: (userId: number) => void;
}
const { width: wWidth } = Dimensions.get("window");

const UserDetail = ({
  route,
  detail,
  getDetail,
  navigation,
}: UserDetailProps) => {
  const { id } = route.params;
  useEffect(() => {
    getDetail(id);
  }, [id]);
  const { userDetailByIdLoading, userDetailById, userDetailByIdError } = detail;
  const refRBSheet = useRef<any | undefined>();
  const {
    _links,
    firstName,
    lastName,
    companyName,
    city,
    address,
    coverImage,
    isEnabled,
    isFriend,
    isFriendRequested,
  } = userDetailById;

  let buttonLabel: string = "";
  if (isFriendRequested) {
    buttonLabel = "Friend Requested";
  } else if (isFriend) {
    buttonLabel = "Unfriend";
  } else {
    buttonLabel = "Add Friend";
  }

  if (userDetailByIdLoading) {
    return (
      <Box flex={1} justifyContent="center" alignItems="center">
        <ActivityIndicator />
      </Box>
    );
  } else {
    return (
      <Box flex={1} backgroundColor="iconBackground">
        <StatusBar backgroundColor="white" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Box width={wWidth} height={200}>
            {coverImage && coverImage !== "" ? (
              <Image
                style={{ width: "100%", height: "100%" }}
                source={{ uri: coverImage !== "" ? coverImage : undefined }}
              />
            ) : (
              <Box
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "grey",
                }}
              ></Box>
            )}
          </Box>
          <Box
            marginHorizontal="xl"
            justifyContent="space-between"
            style={{ marginTop: -70, marginLeft: 20 }}
            flexDirection="row"
          >
            <TouchableWithoutFeedback>
              <Box borderRadius="xl" height={140} width={140}>
                {_links ? (
                  <Image
                    style={{
                      borderColor: "white",
                      borderWidth: 2,
                      height: 140,
                      width: 140,
                      borderRadius: 140 / 2,
                    }}
                    source={{
                      uri: _links.profilePic.href,
                    }}
                  />
                ) : (
                  <Box
                    justifyContent="center"
                    alignItems="center"
                    height={140}
                    width={140}
                    borderRadius={"xl"}
                    style={{ backgroundColor: "grey" }}
                  >
                    <Icon name="plus" size={26} color="white" />
                  </Box>
                )}
              </Box>
            </TouchableWithoutFeedback>

            <Box
              style={{
                position: "relative",
                top: 80,
              }}
            >
              <RoundedBorderButton label={buttonLabel} onPress={() => {}} />
            </Box>
          </Box>
          {userDetailById && (
            <IntroSection
              {...{ firstName, lastName, city, companyName, address }}
            />
          )}
          <Box
            paddingTop="xl"
            paddingHorizontal="s"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Box>
              <Text variant="mainIconSubTitle">Friends</Text>
              <Text fontSize={13} variant="silentText">
                {/* {`${_embedded ? _embedded.userResourceList.length : 0} Friends`} */}
              </Text>
            </Box>
            <TouchableWithoutFeedback
              onPress={() =>
                navigation.navigate("FriendList", {
                  username: `${firstName} ${lastName}`,
                })
              }
            >
              <Text variant="seeAll">See all</Text>
            </TouchableWithoutFeedback>
          </Box>
          <Box paddingHorizontal="s" paddingTop="l">
            {/* {_embedded ? (
                  <Box
                    marginBottom="s"
                    flexDirection="row"
                    justifyContent="space-between"
                  >
                    {_embedded &&
                      _embedded.userResourceList.map(
                        (item: friendListProps, i: number) => {
                          if (i < 3) {
                            return <FriendsThumbnail key={i} {...{ item }} />;
                          }
                        }
                      )}
                  </Box>
                ) : (
                  <Box>
                    <Text>No Friends</Text>
                  </Box>
                )} */}
          </Box>
          {/* <CreatePost src={profileImage} {...{ navigation }} /> */}
          <Box height={3} backgroundColor="mainBackground" />
          {/* {postLoading ? (
                <Box flex={1} justifyContent="center" alignItems="center">
                  <ActivityIndicator />
                </Box>
              ) : (
                <PostListComponent
                  postList={postList}
                  userProfileData={userProfileData}
                  onPress={handleDrawer}
                />
              )} */}

          <Box backgroundColor="mainBackground" height={10} />
          <RBSheet
            ref={refRBSheet}
            closeOnDragDown={true}
            closeOnPressMask={false}
            customStyles={{
              wrapper: {
                backgroundColor: "transparent",
              },
              draggableIcon: {
                backgroundColor: "#000",
              },
            }}
          >
            <BottomDrawerComponent />
          </RBSheet>
        </ScrollView>
      </Box>
    );
  }
};

function mapStateToProps(state: any) {
  return {
    detail: state.profile,
  };
}

const mapDispatchToProps = (dispatch: any) => ({
  getDetail: (userId: number) => dispatch(getUserDetailById(userId)),
});
export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);
