import React from "react";
import { Image, Dimensions } from "react-native";
import { Box, Text } from "./Theme";

const { width: wWidth, height: wHeight } = Dimensions.get("window");

interface NewsSectionProps {
  image: number;
  title?:boolean;
}
const NewsSection = ({ title,image }: NewsSectionProps) => {
  return (
    <Box  paddingRight="l">
      <Image width={wWidth} source={image} />
      <Box style={{ paddingLeft: 3 }} paddingVertical="s">
        {title ? <Text variant="mainIconSubTitle"> News</Text>: null}
        <Text paddingVertical="s" variant="cardText" color="primaryText">
          Lorem ipsum dolor sit amet, consectetur {"\n"} adipiscing elit, sed do
          eiusmod…
        </Text>
      </Box>
    </Box>
  );
};

export default NewsSection;
