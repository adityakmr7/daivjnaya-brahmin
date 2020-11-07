import React from "react";
import { Dimensions, Image } from "react-native";
import { Box, Text } from "../../../components";
import { Feather as Icon } from "@expo/vector-icons";
import { createMatrimonyProps } from "../interface";

const { width: wWidth, height: wHeight } = Dimensions.get("window");

interface DetailProps {
  data: createMatrimonyProps;
}
const Detail = ({ data }: DetailProps) => {
  return (
    <>
      <Box height={wHeight * 0.7}>
        <Image
          style={{ height: "100%", width: "100%" }}
          source={{ uri: data.images[0]._links.image.href }}
        />
        <Box
          bottom={0}
          right={30}
          position="absolute"
          backgroundColor="mainIconColor"
          height={52}
          width={52}
          borderRadius="xl"
          justifyContent="center"
          alignItems="center"
        >
          <Icon color="white" size={26} name="message-square" />
        </Box>
      </Box>
      <Box paddingHorizontal="xl">
        <Text variant="seeAll">Info</Text>
        <Text variant="sectionTitle">
          {data.firstName}
          {""} {data.lastName}
        </Text>
        <Text color="grey" variant="mainIconSubTitle">
          {data.designation}
        </Text>

        <Box
          alignItems="center"
          width={wWidth - wWidth * 0.2}
          flexDirection="row"
          paddingVertical="s"
        >
          <Icon size={15} name="briefcase" />
          <Text paddingHorizontal="mx">
            Chef at <Text>{data.companyName}</Text>
          </Text>
        </Box>

        <Box
          alignItems="center"
          width={wWidth - wWidth * 0.2}
          flexDirection="row"
        >
          <Icon size={15} name="briefcase" />
          <Text paddingHorizontal="mx">
            Studied at <Text>{data.education}</Text>
          </Text>
        </Box>

        <Box
          paddingVertical="s"
          alignItems="flex-start"
          width={wWidth - wWidth * 0.2}
          flexDirection="row"
        >
          <Icon size={15} name="map-pin" />
          <Text paddingHorizontal="mx">
            <Text>{data.about}</Text>
          </Text>
        </Box>

        <Box
          alignItems="center"
          width={wWidth - wWidth * 0.2}
          flexDirection="row"
        >
          <Icon size={15} name="home" />
          <Text paddingHorizontal="mx">
            Lives in <Text>{data.livesIn}</Text>
          </Text>
        </Box>

        <Box
          paddingVertical="s"
          alignItems="center"
          width={wWidth - wWidth * 0.2}
          flexDirection="row"
        >
          <Icon size={15} name="mail" />
          <Text paddingHorizontal="mx">
            Email <Text>{data.email}</Text>
          </Text>
        </Box>
        <Box
          paddingVertical="s"
          alignItems="center"
          width={wWidth - wWidth * 0.2}
          flexDirection="row"
        >
          <Icon size={15} name="phone" />
          <Text paddingHorizontal="mx">
            Phone <Text>{data.phoneNumber}</Text>
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default Detail;
