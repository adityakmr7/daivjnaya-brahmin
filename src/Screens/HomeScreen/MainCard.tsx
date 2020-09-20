import React from "react";
import { Box, Text } from "../../components";
import { Image, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const { width: wWidth, height: wHeight } = Dimensions.get("window");

interface MainCardProps {
  title: string;
  subTitle: string;
  subText: string;
  image: number;
  color: string[];
}

const BoxWidth = wWidth - 40;
const BoxHeight = wHeight - 0.77 * wHeight;
const MainCard = ({
  color,
  title,
  subText,
  subTitle,
  image,
}: MainCardProps) => {
  return (
    <Box
      marginVertical="mx"
      marginHorizontal="l"
      height={BoxHeight}
      width={BoxWidth}
    >
      <LinearGradient
        style={{
          flex: 1,
          borderRadius: 10,
          height: BoxHeight,
          width: BoxWidth,
        }}
        colors={color}
      >
        <Box
          width={BoxWidth - 20}
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
        >
          <Box paddingLeft="xl">
            <Text variant="cardTitle">{title}</Text>
            <Text paddingVertical="xs" variant="cardSubTitle">
              {subTitle}
            </Text>
            <Text variant="cardText">{subText}</Text>
          </Box>
          <Box>
            <Image style={{ width: BoxWidth / 3 }} source={image} />
          </Box>
        </Box>
      </LinearGradient>
    </Box>
  );
};

export default MainCard;
