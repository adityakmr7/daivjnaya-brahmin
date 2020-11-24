import React from "react";
import { Box, Text } from "../../components";
import { Image, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const { width: wWidth, height: wHeight } = Dimensions.get("window");

interface MainCardProps {
  data: {
    content: string;
    createdDate: number;
    lastModifiedDate: number;
    type: string;
    _links: {
      image: {
        href: string;
      };
    };
  };
}

const BoxWidth = wWidth - 40;
const BoxHeight = wHeight - 0.77 * wHeight;
const MainCard = ({ data }: MainCardProps) => {
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
        colors={["#4c669f", "#3b5998", "#192f6a"]}
      >
        <Box
          width={BoxWidth}
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
        >
          {/* <Box paddingLeft="xl">
            <Text variant="cardTitle">{data.content}</Text>
            <Text paddingVertical="xs" variant="cardSubTitle">
              {data.type}
            </Text>
            <Text variant="cardText">{subText}</Text>
          </Box> */}
          <Box>
            <Image
              style={{ width: BoxWidth, height: "100%" }}
              source={{ uri: data._links.image.href }}
            />
          </Box>
        </Box>
      </LinearGradient>
    </Box>
  );
};

export default MainCard;
