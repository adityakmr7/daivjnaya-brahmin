import { StatusBar } from "expo-status-bar";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import { ActivityIndicator, Image, Platform } from "react-native";
import { Box, Text } from "../../components";
import { StackNavigationProps } from "../../components/NavigationRoutes";
import { Feather as Icon } from "@expo/vector-icons";
import RBSheet from "react-native-raw-bottom-sheet";
import { connect } from "react-redux";
import {
  RectButton,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import {
  BottomDrawerComponent,
  CreatePost,
  FriendsThumbnail,
  IntroSection,
  PostCard,
  RoundedBorderButton,
} from "./components";
import { getUserDetail } from "../../actions/userActions";

export const friends = [
  {
    id: 1,
    src: require("../../../assets/images/ak.png"),
    name: "Akshay Kumar",
  },
  {
    id: 2,
    src: require("../../../assets/images/pa.png"),
    name: "Anany Panday",
  },
  { id: 3, src: require("../../../assets/images/sm.png"), name: "Hello world" },
];

export const Posts = [
  {
    id: 1,
    user: "Siddharth Revankar",
    userImage: require("../../../assets/images/ak.png"),
    date: "17 Jun 2019",
    caption: "Caption here",
    image: require("../../../assets/images/post.png"),
    comments: 10,
    likes: 25,
    video: require("../../../assets/images/video.mp4"),
  },
  {
    id: 2,
    user: "Siddharth Revankar",
    userImage: require("../../../assets/images/pa.png"),
    date: "17 Jun 2019",
    caption: "Caption here",
    image: require("../../../assets/images/post.png"),
    comments: 10,
    likes: 25,
    video: require("../../../assets/images/video.mp4"),
  },
];

export const profileAssets = Posts.map((item) => [
  item.image,
  item.userImage,
  item.video,
]);

interface MyProfileProps {
  navigation: StackNavigationProps<"MyProfile"> | any;
  getUserDetail: () => void;
  profileData: any;
}

const MyProfile = ({
  navigation,
  getUserDetail,
  profileData,
}: MyProfileProps) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);
  const refRBSheet = useRef();
  const handleDrawer = () => refRBSheet.current.open();
  // "loading": false,
  // "userProfileData"
  useEffect(() => {
    getUserDetail();
  }, []);
  const { loading, userProfileData } = profileData;
  const {
    firstName,
    lastName,
    location,
    email,
    work,
    workAt,
    phoneNumber,
  } = userProfileData;
  if (loading) {
    return (
      <Box flex={1} justifyContent="center" alignItems="center">
        <ActivityIndicator />
      </Box>
    );
  }
  return (
    <Box flex={1} backgroundColor="iconBackground">
      <StatusBar translucent={true} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box height={20}>
          <Image height={20} source={require("./assets/wall.png")} />
          <RectButton
            onPress={() => navigation.pop()}
            style={{ position: "absolute", top: 40, left: 10 }}
          >
            <Icon
              size={30}
              name={Platform.OS === "android" ? "arrow-left" : "chevron-left"}
              color="white"
            />
          </RectButton>
        </Box>
        <Box
          marginHorizontal="xl"
          justifyContent="space-between"
          style={{ marginTop: 115, marginLeft: 20 }}
          flexDirection="row"
        >
          <Box borderRadius="xl" height={140} width={140}>
            <Image
              style={{ height: 140, width: 140, borderRadius: 140 / 2 }}
              source={friends[0].src}
            />
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
        <IntroSection {...{ firstName, lastName, location, work, workAt }} />
        <Box
          paddingTop="xl"
          paddingHorizontal="s"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Box>
            <Text variant="mainIconSubTitle">Friends</Text>
            <Text fontSize={13} variant="silentText">
              100 friends
            </Text>
          </Box>
          <TouchableWithoutFeedback
            onPress={() =>
              navigation.navigate("FriendList", {
                username: Posts[0].user,
              })
            }
          >
            <Text variant="seeAll">See all</Text>
          </TouchableWithoutFeedback>
        </Box>
        <Box paddingHorizontal="s" paddingTop="l">
          <Box
            marginBottom="s"
            flexDirection="row"
            justifyContent="space-between"
          >
            {friends.map((item, i) => {
              return <FriendsThumbnail key={i} {...{ item }} />;
            })}
          </Box>
          <Box flexDirection="row" justifyContent="space-between">
            {friends.map((item, i) => {
              return <FriendsThumbnail key={i} {...{ item }} />;
            })}
          </Box>
        </Box>
        <CreatePost src={friends[0].src} />
        <Box height={3} backgroundColor="mainBackground" />
        {Posts.map((post, index) => {
          return (
            <PostCard onPress={handleDrawer} key={post.id} {...{ post }} />
          );
        })}
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
};

function mapStateToProps(state: any) {
  return {
    profileData: state.profile,
  };
}

const mapDispatchToProps = (dispatch: any) => ({
  getUserDetail: () => dispatch(getUserDetail()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyProfile);
