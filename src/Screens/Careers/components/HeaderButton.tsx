import React from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Box, Text } from "../../../components";

interface HeaderButtonProps {
  onPress: () => void;
  title: string;
}
const HeaderButton = ({ onPress, title }: HeaderButtonProps) => {
  return (
    <TouchableWithoutFeedback
      {...onPress}
      style={{
        minWidth: 100,
        padding: 8,
        borderWidth: 2,
        borderColor: "#D4AF37",
        borderRadius: 18,
      }}
    >
      <Box justifyContent="center" alignItems="center">
        <Text>{title}</Text>
      </Box>
    </TouchableWithoutFeedback>
  );
};

export default HeaderButton;
