import React from "react";
import { Dimensions, Image } from "react-native";
import { Box, Text } from "./Theme";
const { width: wWidth, height: wHeight } = Dimensions.get("window");

interface VideoSectionProps {
  image: number;
}

/**
 * Todo:
 * @param image should be Video Here
 *
 */
const VideoSection = ({ image }: VideoSectionProps) => {
  return (
    <Box paddingRight="l">
      <Image width={wWidth} source={image} />
      <Box style={{ paddingLeft: 3 }} paddingVertical="s">
        <Text paddingVertical="s" variant="cardText" color="primaryText">
          Lorem ipsum dolor sit amet, consectetur {"\n"} adipiscing elit, sed do
          eiusmod…
        </Text>
      </Box>
    </Box>
  );
};

export default VideoSection;
