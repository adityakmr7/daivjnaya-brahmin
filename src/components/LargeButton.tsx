import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { Box, Text } from "./Theme";

interface LargeButtonProps {
  label: string;
  onPress: () => void;
}
const LargeButton = ({ label, onPress }: LargeButtonProps) => {
  return (
    <Box
      marginTop="xxl"
      marginHorizontal="xl"
      height={60}
      backgroundColor="mainIconColor"
      borderRadius="s"
    >
      <RectButton
        {...{ onPress }}
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <Box paddingTop="m">
          <Text color="iconBackground" variant="sectionTitle">
            {label}
          </Text>
        </Box>
      </RectButton>
    </Box>
  );
};

export default LargeButton;
