import React from "react";
import { Box, Text } from "../../../components";
import { Feather as Icon } from "@expo/vector-icons";

interface IntroSectionProps {}
const IntroSection = ({}: IntroSectionProps) => {
  return (
    <Box paddingHorizontal="m" paddingVertical="s">
      <Text variant="sectionTitle">Siddharth Revankar</Text>
      <Box>
        <Box>
          <Box flexDirection="row" alignItems="center">
            <Icon name="briefcase" />
            <Text paddingHorizontal="l">Chef at Healthy Eats</Text>
          </Box>
          <Box flexDirection="row" alignItems="center">
            <Icon name="briefcase" />
            <Text paddingHorizontal="l">Studied at National College</Text>
          </Box>
          <Box flexDirection="row" alignItems="center">
            <Icon name="briefcase" />
            <Text paddingHorizontal="l">Lives in Baad, Karwar</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default IntroSection;
