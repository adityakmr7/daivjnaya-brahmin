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
import { getLocalImage } from "../../../utils/getLocalImage";
const { width: wWidth, height: wHeight } = Dimensions.get("window");

interface CreatePostProps {
  src: string;

  navigation: any;
}
const CreatePost = ({ src, navigation }: CreatePostProps) => {
  const [postContent, setPostContent] = useState<string>("");
  const [postImage, setPostImage] = useState<string>("");

  // const handlePostContent = (text: string) => {
  //   setPostContent(text);
  // };

  const handlePostImage = async () => {
    const uri = await getLocalImage();
    if (uri) {
      setPostImage(uri);
      //updateCoverImage(result.uri);
      navigation.navigate("CreatePostScreen", {
        image: src,
        post: uri,
      });
    }
  };

  const _focusText = () => {
    navigation.navigate("CreatePostScreen", {
      image: src,
      post: postImage,
    });
  };

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
            showSoftInputOnFocus={false}
            onFocus={_focusText}
            onChangeText={(text) => setPostContent(text)}
            style={{ flex: 2, paddingHorizontal: 20 }}
            placeholder="Post a status update..."
            defaultValue={postContent}
          />
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

export default CreatePost;
