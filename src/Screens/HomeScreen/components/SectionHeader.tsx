import React from "react";
import { Dimensions } from "react-native";
import { Box, Text } from "../../../components";
import { Feather as Icon } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";
const { width: wWidth, height: wHeight } = Dimensions.get("window");

interface SectionHeaderProps {
  title: string;
  onPress: () => void;
}
const SectionHeader = ({ title, onPress }: SectionHeaderProps) => {
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
      {/* <RectButton {...{ onPress }}>
        <Icon size={24} name="arrow-right" />
      </RectButton> */}
    </Box>
  );
};

export default SectionHeader;
