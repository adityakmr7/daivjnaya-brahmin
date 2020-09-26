import React from "react";
import { Dimensions, Image } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Box, Text } from "../../../components";
import { Feather as Icon } from "@expo/vector-icons";
const { width: wWidth, height: wHeight } = Dimensions.get("window");

interface CreatepostProps {
  src: number;
}
const Createpost = ({ src }: CreatepostProps) => {
  return (
    <Box paddingTop="l">
      <Box marginHorizontal="s">
        <Text variant="mainIconSubTitle">Posts</Text>

        <Box
          justifyContent="space-between"
          alignItems="center"
          marginTop="xl"
          flexDirection="row"
        >
          <Image
            style={{
              width: wWidth / 6,
              height: wWidth / 6,
              borderRadius: wWidth / 2,
            }}
            source={src}
          />
          <TextInput
            style={{ flex: 2, paddingHorizontal: 20 }}
            placeholder="Post a status update..."
          />
          <Icon name="image" size={26} />
        </Box>
      </Box>
      <Box
        marginHorizontal="s"
        paddingBottom="s"
        marginVertical="m"
        flexDirection="row"
        justifyContent="space-between"
      >
        <Box flexDirection="row" alignItems="center">
          <Icon name="image" color="#39A7EB" size={20} />
          <Text variant="profileAction" paddingHorizontal="s">
            Photo
          </Text>
        </Box>
        <Box height={22} width={1} backgroundColor="primaryText" />
        <Box flexDirection="row" alignItems="center">
          <Icon color="red" name="map-pin" size={20} />
          <Text variant="profileAction" paddingHorizontal="s">
            Check In
          </Text>
        </Box>
        <Box height={22} width={1} backgroundColor="primaryText" />

        <Box flexDirection="row" alignItems="center">
          <Icon color="#8C72CB" size={20} name="flag" />
          <Text variant="profileAction" paddingHorizontal="s">
            Life Event
          </Text>
        </Box>
      </Box>
      <Box height={10} backgroundColor="mainBackground" />
    </Box>
  );
};

export default Createpost;
