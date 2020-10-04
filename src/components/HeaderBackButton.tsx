import React from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Box } from "./Theme";
import { Feather as Icon } from "@expo/vector-icons";
import { Image, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";

interface HeaderBackButtonProps {
  image: number;
}
const HeaderBackButton = ({ image }: HeaderBackButtonProps) => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
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
