import React from "react";
import { Image, Dimensions } from "react-native";
import { RectButton, TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Box, Text } from "./Theme";

const { width: wWidth, height: wHeight } = Dimensions.get("window");

interface NewsSectionProps {
  image: number;
  title?:boolean;
  onPress:() => void;
}
const NewsSection = ({ title,image, onPress }: NewsSectionProps) => {
  return (
    <TouchableWithoutFeedback {...{onPress}}>

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
    </TouchableWithoutFeedback>

  );
};

export default NewsSection;
