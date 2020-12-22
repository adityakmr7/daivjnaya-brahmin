import React from "react";
import { Image } from "react-native";
import {
  RectButton,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { Box, Text } from "../../../components";
interface IconNavigatorProps {
  subtitle: string;
  subtitle2?: string;
  image: number;
  onPress: () => void;
}
const IconNavigator = ({
  subtitle,
  image,
  onPress,
  subtitle2,
}: IconNavigatorProps) => {
  return (
    <Box justifyContent="space-between" alignItems="center">
      <TouchableWithoutFeedback {...{ onPress }}>
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
      </TouchableWithoutFeedback>

      <Box
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        paddingVertical="xs"
      >
        <Box>
          <Text variant="mainIconSubTitle">{subtitle}</Text>
        </Box>
        {subtitle2 ? (
          <Box>
            <Text variant="mainIconSubTitle">{subtitle2}</Text>
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};

export default IconNavigator;
