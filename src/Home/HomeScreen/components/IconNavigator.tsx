import React from "react";
import { Box, Text } from "../../../components";

interface IconNavigatorProps {
  subtitle: string;
}
const IconNavigator = ({ subtitle }: IconNavigatorProps) => {
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
        <Text>Hel</Text>
      </Box>
      <Box paddingVertical="s">
        <Text variant="mainIconSubTitle">{subtitle}</Text>
      </Box>
    </Box>
  );
};

export default IconNavigator;
