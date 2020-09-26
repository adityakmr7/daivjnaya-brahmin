import React from "react";
import { Dimensions, Image } from "react-native";
import { Box, Text } from "../../../components";
import { Feather as Icon } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";
import { PostCardProps } from "./PostCard";
const { width: wWidth, height: wHeight } = Dimensions.get("window");

interface VideoCardProps extends PostCardProps {}
const VideoCard = ({ post }: VideoCardProps) => {
  return (
    <Box marginVertical="s">
      <Box
        marginHorizontal="s"
        flexDirection="row"
        justifyContent="space-between"
      >
        <Box flexDirection="row" alignItems="center">
          <Box paddingRight="s">
            <Image
              style={{
                width: wWidth / 6,
                height: wWidth / 6,
                borderRadius: wWidth / 2,
              }}
              source={post.userImage}
            />
          </Box>
          <Box>
            <Text color="primaryText" variant="cardSubTitle">
              {post.user}
            </Text>
            <Text variant="cardText" color="grey">
              {post.date}
            </Text>
          </Box>
        </Box>
        <Box>
          <Icon name="more-horizontal" size={26} />
        </Box>
      </Box>
      <Box>
        <Text marginVertical="s" marginHorizontal="s">
          {post.caption}
        </Text>
        <Box>
          {/* // TODO: Add Video Here */}
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

export default VideoCard;
