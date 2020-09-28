import React from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Box } from "./Theme";
import { Feather as Icon } from "@expo/vector-icons";
import { Image, Platform } from "react-native";

interface HeaderBackButtonProps {
  image: number;
  onPress: () => void;
}
const HeaderBackButton = ({ image, onPress }: HeaderBackButtonProps) => {
  return (
    <TouchableWithoutFeedback {...{ onPress }}>
      <Box justifyContent="center" alignItems="center" flexDirection="row">
        <Icon
          size={26}
          name={Platform.OS === "android" ? "arrow-left" : "chevron-left"}
        />
        <Image source={image} />
      </Box>
    </TouchableWithoutFeedback>
  );
};

export default HeaderBackButton;
