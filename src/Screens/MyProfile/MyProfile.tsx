import { StatusBar } from "expo-status-bar";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ActivityIndicator, Dimensions, Image, Platform } from "react-native";
import { Box, Text } from "../../components";
import { StackNavigationProps } from "../../components/NavigationRoutes";
import { Feather as Icon } from "@expo/vector-icons";
import RBSheet from "react-native-raw-bottom-sheet";
import { connect } from "react-redux";
import {
  FlatList,
  RectButton,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import {
  BottomDrawerComponent,
  CreatePost,
  FriendsThumbnail,
  IntroSection,
  RoundedBorderButton,
} from "./components";
import {
  getUserDetail,
  updateCoverProfile,
  updateUserProfilePicture,
} from "../../actions/userActions";
import { getAllPost, postIdPostLike } from "../../actions/postActions";
import * as ImagePicker from "expo-image-picker";
import { useIsFocused } from "@react-navigation/native";
import PostListComponent from "./components/PostListComponent";
import {
  friendUidRequest,
  getAllFriendRequest,
  getAllFriends,
} from "../../actions/friendsActions";
import { friendListProps, userProfileProps } from "./interfaces";

interface MyProfileProps {
  navigation: StackNavigationProps<"MyProfile"> | any;
  getUserDetail: () => void;
  getPostList: () => void;
  updateProfile: (url: string) => void;
  profileData: any;
  getAllPost: any;
  updateCoverImage: (url: string) => void;
  allFriends: () => void;
  friendList: {
    allFriendList: { _embedded: { userResourceList: [friendListProps] } };
    loading: boolean;
    error: string;
    friendRequestLoading: boolean;
    friendRequest: any;
    friendRequestError: string;
  };
  getAllRequestList: () => void;
}

const MyProfile = ({
  navigation,
  getUserDetail,
  getPostList,
  profileData,
  updateProfile,
  updateCoverImage,
  getAllPost,
  allFriends,
  friendList,
  getAllRequestList,
}: MyProfileProps) => {
  const { width: wWidth } = Dimensions.get("window");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);
  const isFocused = useIsFocused();

  const [profileImage, setProfileImage] = useState<string>("");
  const [coverImage, setCoverImage] = useState<string>("");
  const refRBSheet = useRef<any | undefined>();
  const handleDrawer = () => refRBSheet.current.open();
  const { postList, postLoading } = getAllPost;
  useEffect(() => {
    getUserDetail();
    getPostList();
    allFriends();
    getAllRequestList();
  }, [isFocused]);

  const { loading, userProfileData } = profileData;
  const { _links, firstName, lastName, uId } = userProfileData;
  const {
    loading: friendLoading,
    allFriendList,
    error,
    friendRequestLoading,
    friendRequest,
    friendRequestError,
  } = friendList;

  const { _embedded } = allFriendList;
  useEffect(() => {
    if (_links) {
      setProfileImage(_links.profilePic.href);
      setCoverImage(_links.coverPic.href);
    }
  }, [_links]);

  const handleCoverUpload = async () => {
    if (Platform.OS !== "web") {
      const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera Permissions");
      } else {
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
          base64: true,
        });

        if (!result.cancelled) {
          setCoverImage(result.uri);
          updateCoverImage(result.uri);
        }
      }
    }
  };

  const handleProfileUpdate = async () => {
    if (Platform.OS !== "web") {
      const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera Permissions");
      } else {
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
          base64: true,
        });

        if (!result.cancelled) {
          setProfileImage(result.uri);
          updateProfile(result.uri);
        }
      }
    }
  };
  const { height: wHeight } = Dimensions.get("window");
  const renderItem = ({ item }: { item: any }) => {
    console.log("renderItem", item);
    //     creationDate: "2020-12-03"
    // frId: 8
    // fromUserId: 6
    // fromUsername: "Testing hello kumar kumar"
    // message: null
    // requestedDate: "2020-12-03"
    // toUserId: 6
    // toUsername: "Testing hello kumar kumar"
    // updatedDate: "2020-12-03"
    return (
      // <RectButton
      //   onPress={() =>
      //     navigation.navigate("UserDetail", {
      //       id: item.uId,
      //     })
      //   }
      // >
      <Box
        borderColor="greyish"
        padding="m"
        borderWidth={0.5}
        marginVertical="m"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box flexDirection="row" alignItems="center">
          {item._links ? (
            <Image
              style={{
                width: wWidth / 6,
                height: wWidth / 6,
                borderRadius: wWidth / 12,
              }}
              source={{ uri: item._links.profilePic.href }}
            />
          ) : null}
          <Box paddingHorizontal="s">
            <Text variant="sectionTitle">
              {item.fromUsername} {item.lastName}
            </Text>
            <Text fontSize={10} variant="silentText">
              5 mutual Friends
            </Text>
          </Box>
        </Box>
        <Box>
          <Icon size={26} name="more-horizontal" />
        </Box>
      </Box>
      // </RectButton>
    );
  };

  if (loading) {
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
            <TouchableWithoutFeedback
              style={{ height: "100%" }}
              onPress={() => handleCoverUpload()}
            >
              {coverImage !== "" ? (
                <Image
                  style={{ width: "100%", height: "100%" }}
                  source={{ uri: coverImage !== "" ? coverImage : undefined }}
                />
              ) : (
                <Box
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "white",
                  }}
                ></Box>
              )}
            </TouchableWithoutFeedback>
            <RectButton
              onPress={() => navigation.pop()}
              style={{ position: "absolute", top: 40, left: 10 }}
            >
              <Icon
                size={30}
                name={Platform.OS === "android" ? "arrow-left" : "chevron-left"}
                color="grey"
                style={{
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 12,
                  },
                  shadowOpacity: 0.58,
                  shadowRadius: 16.0,

                  elevation: 24,
                }}
              />
            </RectButton>
          </Box>
          <Box
            marginHorizontal="xl"
            justifyContent="space-between"
            style={{ marginTop: -70, marginLeft: 20 }}
            flexDirection="row"
          >
            <TouchableWithoutFeedback onPress={() => handleProfileUpdate()}>
              <Box borderRadius="xl" height={140} width={140}>
                {profileImage !== "" ? (
                  <Image
                    style={{
                      borderColor: "white",
                      borderWidth: 2,
                      height: 140,
                      width: 140,
                      borderRadius: 140 / 2,
                    }}
                    source={{
                      uri: profileImage !== "" ? profileImage : undefined,
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
              <RoundedBorderButton
                label={"Edit Profile"}
                onPress={() =>
                  navigation.navigate("EditProfile", { ...userProfileData })
                }
              />
            </Box>
          </Box>
          {userProfileData && <IntroSection {...userProfileData} />}

          <Box height={wHeight - 0.8 * wHeight} paddingTop="xl">
            {friendRequestLoading ? (
              <ActivityIndicator />
            ) : (
              <Box height={wHeight - 0.8 * wHeight}>
                <FlatList
                  data={friendRequest}
                  renderItem={renderItem}
                  keyExtractor={(item: friendListProps) => item.frId.toString()}
                />
              </Box>
            )}
          </Box>
          <Box
            paddingTop="xl"
            paddingHorizontal="s"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Box>
              <Text variant="mainIconSubTitle">Friends</Text>
              <Text fontSize={13} variant="silentText">
                {`${_embedded ? _embedded.userResourceList.length : 0} Friends`}
              </Text>
            </Box>
            {/* <TouchableWithoutFeedback
              onPress={() =>
                navigation.navigate("FriendList", {
                  username: `${firstName} ${lastName}`,
                })
              }
            >
              <Text variant="seeAll">See all</Text>
            </TouchableWithoutFeedback> */}
          </Box>
          <Box paddingHorizontal="s" paddingTop="l">
            {_embedded ? (
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
                {/* <Text>No Friends</Text> */}
              </Box>
            )}
          </Box>
          <CreatePost src={profileImage} {...{ navigation }} />
          <Box height={3} backgroundColor="mainBackground" />
          {postLoading ? (
            <Box flex={1} justifyContent="center" alignItems="center">
              <ActivityIndicator />
            </Box>
          ) : (
            <PostListComponent
              postList={postList}
              userProfileData={userProfileData}
              onPress={handleDrawer}
            />
          )}

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
    profileData: state.profile,
    getAllPost: state.post,
    friendList: state.friend,
  };
}

const mapDispatchToProps = (dispatch: any) => ({
  getUserDetail: () => dispatch(getUserDetail()),
  getPostList: () => dispatch(getAllPost()),
  updateProfile: (url: string) => dispatch(updateUserProfilePicture(url)),
  updateCoverImage: (url: string) => dispatch(updateCoverProfile(url)),
  allFriends: () => dispatch(getAllFriends()),
  likePost: (postId: number) => dispatch(postIdPostLike(postId)),
  getAllRequestList: () => dispatch(getAllFriendRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyProfile);
