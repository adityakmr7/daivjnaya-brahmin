import React from "react";
import { ActivityIndicator } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Box, Text } from "./Theme";

interface LargeButtonProps {
  label: string;
  onPress: () => void;
  loading?: boolean;
}
const LargeButton = ({ label, onPress, loading }: LargeButtonProps) => {
  return (
    <Box
      marginTop="xxl"
      marginHorizontal="xl"
      height={60}
      backgroundColor="mainIconColor"
      borderRadius="s"
    >
      <RectButton
        onPress={onPress}
        style={{ height: 60, justifyContent: "center", alignItems: "center" }}
      >
        {loading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Box>
            <Text color="iconBackground" variant="sectionTitle">
              {label}
            </Text>
          </Box>
        )}
      </RectButton>
    </Box>
  );
};

export default LargeButton;
