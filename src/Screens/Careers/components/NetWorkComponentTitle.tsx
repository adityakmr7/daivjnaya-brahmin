import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { Box, Text } from "../../../components";
import { Feather as Icon } from "@expo/vector-icons";

interface NetWorkComponentTitleProps {
  title: string;
  onPress: () => void;
  numberOfPeople?: number;
}
const NetWorkComponentTitle = ({
  title,
  onPress,
  numberOfPeople,
}: NetWorkComponentTitleProps) => {
  return (
    <Box
      paddingHorizontal="s"
      paddingVertical="s"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Text>
        {title} {numberOfPeople ? `(${numberOfPeople})` : null}
      </Text>
      <RectButton {...{ onPress }}>
        <Icon name="chevron-right" />
      </RectButton>
    </Box>
  );
};

export default NetWorkComponentTitle;
