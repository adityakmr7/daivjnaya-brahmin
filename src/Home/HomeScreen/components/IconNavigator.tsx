import React from "react";
import { Image } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Box, Text } from "../../../components";
interface IconNavigatorProps {
  subtitle: string;
  image: number;
  onPress: () => void;
}
const IconNavigator = ({ subtitle, image, onPress }: IconNavigatorProps) => {
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
        <RectButton {...{ onPress }}>
          <Image source={image} />
        </RectButton>
      </Box>
      <Box paddingVertical="s">
        <Text variant="mainIconSubTitle">{subtitle}</Text>
      </Box>
    </Box>
  );
};

export default IconNavigator;
