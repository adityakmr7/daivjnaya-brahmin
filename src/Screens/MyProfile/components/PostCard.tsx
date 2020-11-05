import React from "react";
import { Dimensions, Image } from "react-native";
import { Box, Text } from "../../../components";
import { Feather as Icon } from "@expo/vector-icons";
import {
  RectButton,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
const { width: wWidth, height: wHeight } = Dimensions.get("window");

export interface PostCardProps {
  post: {
    image: number;
    user: string;
    userImage: number;
    date: string;
    caption: string;
    likes: number;
    comments: number;
  };

  firstName: string;
  lastName: string;
  src: string;
  onPress: () => void;
}
const PostCard = ({
  post,
  onPress,
  firstName,
  lastName,
  src,
}: PostCardProps) => {
  return (
    <Box marginVertical="s">
      <Box
        marginHorizontal="s"
        flexDirection="row"
        justifyContent="space-between"
      >
        <Box flexDirection="row" alignItems="center">
          <Box paddingRight="s">
            {src ? (
              <Image
                style={{
                  width: wWidth / 6,
                  height: wWidth / 6,
                  borderRadius: wWidth / 2,
                }}
                source={{ uri: src }}
              />
            ) : (
              <Box
                backgroundColor="grey"
                width={wWidth / 6}
                height={wWidth / 6}
                borderRadius={"l"}
              />
            )}
          </Box>
          <Box>
            <Text color="primaryText" variant="cardSubTitle">
              {firstName && firstName} {lastName && lastName}
            </Text>
            <Text variant="cardText" color="grey">
              {post.date}
            </Text>
          </Box>
        </Box>
        <Box>
          <TouchableWithoutFeedback {...{ onPress }}>
            <Icon name="more-horizontal" size={26} />
          </TouchableWithoutFeedback>
        </Box>
      </Box>
      <Box>
        <Text marginVertical="s" marginHorizontal="s">
          {post.caption}
        </Text>
        <Box>
          <Image
            style={{ width: wWidth, height: wWidth }}
            source={post.image}
          />
        </Box>
        <Box
          marginHorizontal="s"
          marginVertical="s"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Box flexDirection="row" alignItems="center">
            <Icon size={15} name="thumbs-up" />
            <Text variant="cardText" color="grey" paddingHorizontal="s">
              You and {post.likes} othes
            </Text>
          </Box>
          <Box>
            <Text variant="cardText" color="grey">
              {post.comments} Comments
            </Text>
          </Box>
        </Box>
        <Box height={1} backgroundColor="mainBackground" />
        <Box
          marginVertical="s"
          marginHorizontal="l"
          flexDirection="row"
          justifyContent="space-between"
        >
          <RectButton style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon size={20} name="thumbs-up" />
            <Text paddingHorizontal="s" variant="mainIconSubTitle">
              Like
            </Text>
          </RectButton>
          <RectButton style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon size={20} name="message-square" />
            <Text paddingHorizontal="s" variant="mainIconSubTitle">
              Comment
            </Text>
          </RectButton>
          <RectButton style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon size={20} name="share" />
            <Text paddingHorizontal="s" variant="mainIconSubTitle">
              Share
            </Text>
          </RectButton>
        </Box>
      </Box>
    </Box>
  );
};

export default PostCard;
