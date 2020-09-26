import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { Box, Text } from "../../../components";

interface RoundedBorderButtonProps {
  label: string;
  onPress: () => void;
}
const RoundedBorderButton = ({ label, onPress }: RoundedBorderButtonProps) => {
  return (
    <RectButton {...{ onPress }}>
      <Box
        padding="s"
        borderColor="mainIconColor"
        borderRadius="m"
        borderWidth={1}
      >
        <Text>{label}</Text>
      </Box>
    </RectButton>
  );
};

export default RoundedBorderButton;
