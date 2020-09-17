import React from "react";
import { Image, Dimensions } from "react-native";
import { Box, Text } from "../../../components";

const { width: wWidth, height: wHeight } = Dimensions.get("window");

interface NewsSectionProps {}
const NewsSection = ({}: NewsSectionProps) => {
  return (
    <Box paddingRight="l">
      <Image
        width={wWidth}
        source={require("../../../../assets/images/img-2.png")}
      />
      <Box style={{ paddingLeft: 3 }} paddingVertical="s">
        <Text variant="mainIconSubTitle"> News</Text>
        <Text paddingVertical="s" variant="cardText" color="primaryText">
          Lorem ipsum dolor sit amet, consectetur {"\n"} adipiscing elit, sed do
          eiusmod…
        </Text>
      </Box>
    </Box>
  );
};

export default NewsSection;
