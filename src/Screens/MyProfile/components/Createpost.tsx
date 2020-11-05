import React, { useState } from "react";
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
import { Box, Text } from "../../../components";
import { Feather as Icon } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { addPost } from "../../../actions/postActions";
import { connect } from "react-redux";
import { postDataType } from "../interfaces";
const { width: wWidth, height: wHeight } = Dimensions.get("window");

interface CreatePostProps {
  src: string;
  submitPost: (data: postDataType) => void;
  message: string;
}
const CreatePost = ({ src, submitPost, message }: CreatePostProps) => {
  const [postContent, setPostContent] = useState<string>("");
  const [postImage, setPostImage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  // const handlePostContent = (text: string) => {
  //   setPostContent(text);
  // };

  const handlePostImage = async () => {
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
          setPostImage(result.uri);
          //updateCoverImage(result.uri);
        }
      }
    }
  };

  // const handlePostLocation = async () => {};
  const handleSubmit = () => {
    const data: postDataType = {
      content: postContent,
      url: postImage,
      location: "London",
      longitude: "45",
      latitude: "12",
    };
    setLoading(true);
    submitPost(data);
    setLoading(false);
    setPostContent("");

    // handlePostSubmit(data);
  };

  if (message) {
    ToastAndroid.showWithGravity(
      "Post Created",
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM
    );
  } else {
    return null;
  }

  return (
    <Box paddingTop="l">
      <Box marginHorizontal="s">
        <Text variant="mainIconSubTitle">Posts</Text>

        <Box
          justifyContent="space-between"
          alignItems="center"
          marginTop="xl"
          flexDirection="row"
        >
          <Image
            style={{
              width: wWidth / 6,
              height: wWidth / 6,
              borderRadius: wWidth / 2,
            }}
            source={{ uri: src }}
          />
          <TextInput
            onChangeText={(text) => setPostContent(text)}
            style={{ flex: 2, paddingHorizontal: 20 }}
            placeholder="Post a status update..."
            defaultValue={postContent}
          />
          <RectButton onPress={() => handleSubmit()}>
            {loading ? <ActivityIndicator /> : <Text>Post</Text>}
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
    </Box>
  );
};

function mapStateToProps(state: any) {
  return {
    message: state.post.postCreationMessage,
  };
}

const mapDispatchToProps = (dispatch: any) => ({
  submitPost: (data: postDataType) => dispatch(addPost(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);
