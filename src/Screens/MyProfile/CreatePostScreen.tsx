import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  Image,
  Platform,
  ToastAndroid,
} from "react-native";
import {
  RectButton,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { Box, Text } from "../../components";
import { Feather as Icon } from "@expo/vector-icons";
import { connect } from "react-redux";
import { addPost } from "../../actions/postActions";
import { postDataType } from "./interfaces";
import { getLocalImage } from "../../utils/getLocalImage";
import restServices from "../../services/restServices";

const { width: wWidth, height: wHeight } = Dimensions.get("window");

interface CreatePostProps {
  route: any;
  submitPost: (data: postDataType, navigation: any) => void;
  postState: any;
  navigation: any;
}
const CreatePostScreen = ({
  route,
  submitPost,
  postState,
  navigation,
}: CreatePostProps) => {
  const [postContent, setPostContent] = useState<string>("");
  const [postImage, setPostImage] = useState<string>("");

  const { image, post } = route.params;
  const { creatingPost, postCreationMessage: message } = postState;
  useEffect(() => {
    if (post !== "") {
      setPostImage(post);
    }
  }, [post]);

  const handlePostImage = async () => {
    const uri = await getLocalImage();
    if (uri) {
      const _rest = new restServices();
      const imageUrl = await _rest.getMediaUrl(uri);
      console.log("imageUrl", imageUrl);
      setPostImage(imageUrl.data.url);
      //updateCoverImage(result.uri);
    }
  };

  // const handlePostLocation = async () => {};
  const handleSubmit = async () => {
    try {
      const data: postDataType = {
        content: postContent,
        url: postImage,
        location: "London",
        longitude: "45",
        latitude: "12",
      };

      submitPost(data, navigation);

      setPostContent("");

      // handlePostSubmit(data);
      if (message !== "") {
        ToastAndroid.showWithGravity(
          "Post Created",
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM
        );
      } else {
        return null;
      }
    } catch (err) {
      console.log("Post Error");
    }
  };
  return (
    <Box flex={1}>
      <Box>
        <Box marginHorizontal="s">
          {/* <Text variant="mainIconSubTitle">Posts</Text> */}
          <Box
            justifyContent="space-between"
            alignItems="center"
            marginTop="xl"
            flexDirection="row"
          >
            {image && image !== undefined && image !== null && image !== "" ? (
              <Image
                style={{
                  width: wWidth / 6,
                  height: wWidth / 6,
                  borderRadius: wWidth / 2,
                }}
                source={{ uri: image }}
              />
            ) : null}
            <TextInput
              onChangeText={(text) => setPostContent(text)}
              autoFocus={true}
              style={{
                paddingHorizontal: 20,
                width: 250,
                height: 50,

                marginBottom: 10,
                // backgroundColor: "#e8e8e8",
              }}
              placeholder="Post a status update..."
              defaultValue={postContent}
            />
            <RectButton onPress={() => handleSubmit()}>
              {creatingPost ? <ActivityIndicator /> : <Text>Post</Text>}
            </RectButton>
          </Box>
        </Box>
        <Box
          marginHorizontal="s"
          paddingBottom="s"
          marginVertical="m"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Box flexDirection="row" alignItems="center">
            <TouchableWithoutFeedback
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => handlePostImage()}
            >
              <Icon name="image" color="#39A7EB" size={20} />
              <Text variant="profileAction" paddingHorizontal="s">
                Photo
              </Text>
            </TouchableWithoutFeedback>
          </Box>
          <Box height={22} width={1} backgroundColor="primaryText" />
          <Box flexDirection="row" alignItems="center">
            <Icon color="red" name="map-pin" size={20} />
            <Text variant="profileAction" paddingHorizontal="s">
              Check In
            </Text>
          </Box>
          <Box height={22} width={1} backgroundColor="primaryText" />

          <Box flexDirection="row" alignItems="center">
            <Icon color="#8C72CB" size={20} name="flag" />
            <Text variant="profileAction" paddingHorizontal="s">
              Life Event
            </Text>
          </Box>
        </Box>
        <Box height={10} backgroundColor="mainBackground" />
        <Box marginHorizontal="s" paddingVertical="l">
          <Text>{postContent}</Text>
          <Box marginVertical="m" marginHorizontal="s">
            {postImage !== "" ? (
              <Image
                style={{ width: wWidth - 40, height: wWidth }}
                source={{
                  uri: postImage,
                }}
              />
            ) : null}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

function mapStateToProps(state: any) {
  return {
    postState: state.post,
  };
}

const mapDispatchToProps = (dispatch: any) => ({
  submitPost: (data: postDataType, navigation: any) =>
    dispatch(addPost(data, navigation)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePostScreen);
