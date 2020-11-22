import React from "react";
import { Image, Dimensions } from "react-native";
import {
  RectButton,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { Box, Text } from "./Theme";

const { width: wWidth, height: wHeight } = Dimensions.get("window");

interface NewsSectionProps {
  image: string;
  title?: boolean;
  onPress: () => void;
  newsTitle: string;
}
const NewsSection = ({
  title,
  image,
  onPress,
  newsTitle,
}: NewsSectionProps) => {
  return (
    <TouchableWithoutFeedback {...{ onPress }}>
      <Box paddingRight="l" width={wWidth - 20}>
        <Image
          style={{ width: "100%", height: wWidth / 3 }}
          source={{ uri: image }}
        />
        <Box style={{ paddingLeft: 3 }} paddingVertical="s">
          {title ? <Text variant="mainIconSubTitle"> News</Text> : null}
          <Text paddingVertical="s" variant="cardText" color="primaryText">
            {newsTitle}
          </Text>
        </Box>
      </Box>
    </TouchableWithoutFeedback>
  );
};

export default NewsSection;
