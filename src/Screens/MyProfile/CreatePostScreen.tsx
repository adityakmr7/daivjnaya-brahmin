import React, { useState } from "react";
import { Dimensions, Image } from "react-native";
import {
  RectButton,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { Box, Text } from "../../components";
import { Feather as Icon } from "@expo/vector-icons";
const { width: wWidth, height: wHeight } = Dimensions.get("window");

interface CreatePostProps {}
const CreatePostScreen = ({ route }: CreatePostProps) => {
  const [postContent, setPostContent] = useState<string>("");
  const { image, title } = route.params;

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
            {image ? (
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
              style={{ flex: 2, paddingHorizontal: 20 }}
              placeholder="Post a status update..."
              defaultValue={postContent}
            />
            {/* <RectButton onPress={() => handleSubmit()}>
            {loading ? <ActivityIndicator /> : <Text>Post</Text>}
          </RectButton> */}
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
              // onPress={() => handlePostImage()}
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
    </Box>
  );
};

export default CreatePostScreen;
