import React from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Box, Text } from "../../../components";
import { Feather as Icon } from "@expo/vector-icons";
interface BottomDrawerComponentProps {}
const BottomDrawerComponent = ({}: BottomDrawerComponentProps) => {
  return (
    <Box marginHorizontal="l">
      <TouchableWithoutFeedback style={{ marginVertical: 10 }}>
        <Box flexDirection="row" alignItems="center">
          <Icon name="user" size={26} />
          <Text paddingHorizontal="l">Action Button</Text>
        </Box>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback style={{ marginVertical: 10 }}>
        <Box flexDirection="row" alignItems="center">
          <Icon name="heart" size={26} />
          <Text paddingHorizontal="l">Action Button</Text>
        </Box>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback style={{ marginVertical: 10 }}>
        <Box flexDirection="row" alignItems="center">
          <Icon name="bookmark" size={26} />
          <Text paddingHorizontal="l">Action Button</Text>
        </Box>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback style={{ marginVertical: 10 }}>
        <Box flexDirection="row" alignItems="center">
          <Icon name="clock" size={26} />
          <Text paddingHorizontal="l">Action Button</Text>
        </Box>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback style={{ marginVertical: 10 }}>
        <Box flexDirection="row" alignItems="center">
          <Icon name="target" size={26} />
          <Text paddingHorizontal="l">Action Button</Text>
        </Box>
      </TouchableWithoutFeedback>
    </Box>
  );
};

export default BottomDrawerComponent;
