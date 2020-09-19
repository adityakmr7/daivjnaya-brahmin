import React from "react";
import { Image } from "react-native";
import { Box, Text } from "../../../components";
interface IconNavigatorProps {
  subtitle: string;
  image: number;
}
const IconNavigator = ({ subtitle, image }: IconNavigatorProps) => {
  return (
    <Box justifyContent="space-between" alignItems="center">
      <Box
        justifyContent="center"
        alignItems="center"
        borderRadius="m"
        shadowOffset=""
        height={92}
        width={92}
        backgroundColor="iconBackground"
      >
        <Image source={image} />
      </Box>
      <Box paddingVertical="s">
        <Text variant="mainIconSubTitle">{subtitle}</Text>
      </Box>
    </Box>
  );
};

export default IconNavigator;
