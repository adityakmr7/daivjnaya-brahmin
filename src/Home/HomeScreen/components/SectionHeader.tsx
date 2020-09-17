import React from "react";
import { Dimensions } from "react-native";
import { Box, Text } from "../../../components";
import { Feather as Icon } from "@expo/vector-icons";
const { width: wWidth, height: wHeight } = Dimensions.get("window");

interface SectionHeaderProps {
  title: string;
}
const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <Box
      flexDirection="row"
      justifyContent="space-between"
      width={wWidth - 40}
      marginHorizontal="l"
    >
      <Box>
        <Text style={{ textTransform: "capitalize" }} variant="sectionTitle">
          {title}
        </Text>
      </Box>
      <Box>
        <Icon size={24} name="arrow-right" />
      </Box>
    </Box>
  );
};

export default SectionHeader;
