import React from "react";
import { Box, LargeButton, Text, useTheme } from "../../components";
import { Feather as Icon } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import { NewScreenStackNavigationProps } from ".";
interface EventAddedProps {}

const { width: wWidth, height: wHeight } = Dimensions.get("window");
const EventAdded = ({navigation}: NewScreenStackNavigationProps<"EventAdded">) => {
    const theme = useTheme()
  return (
    <Box
      justifyContent="space-around"
      backgroundColor="iconBackground"
      flex={1}
    >
      <Box justifyContent="center" alignItems="center">
        <Box
          style={{ borderRadius: wWidth / 6 }}
          justifyContent="center"
          alignItems="center"
          height={wWidth / 3}
          width={wWidth / 3}
          backgroundColor="greyish"
        >
          <Icon name="check" size={70} color={theme.colors.successColor} />
        </Box>
      </Box>

      <Box marginHorizontal="xxl" justifyContent="center" alignItems="center">
        <Text paddingBottom="xxl" color="primaryText" fontSize={34} variant="cardTitle">Event Added</Text>
        <Text color="primaryText" variant="cardText" fontSize={23} textAlign="center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          voluptatem porro facilis?
        </Text>
      </Box>
      <LargeButton onPress={() => navigation.goBack()} label="Back To Home" />
    </Box>
  );
};

export default EventAdded;
