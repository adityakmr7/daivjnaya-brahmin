import React from "react";
import { Dimensions, Image } from "react-native";
import { Box, Text } from "../../../components";
import { Feather as Icon } from "@expo/vector-icons";
import { createMatrimonyProps, horizontalCardDataType } from "../interface";

const { width: wWidth, height: wHeight } = Dimensions.get("window");

interface DetailProps {
  data: horizontalCardDataType;
}
const Detail = ({ data }: DetailProps) => {
  return (
    <>
      <Box height={wHeight * 0.7}>
        {data.images ? (
          <Image
            style={{ height: "100%", width: "100%" }}
            source={{ uri: data.images[0]._links.image.href }}
          />
        ) : (
          <Box style={{ height: "100%", width: "100%" }}>
            <Text>No Image Found</Text>
          </Box>
        )}
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
          <Text fontWeight="bold" paddingHorizontal="mx">
            Work At : <Text fontWeight="300">{data.companyName}</Text>
          </Text>
        </Box>

        <Box
          alignItems="center"
          width={wWidth - wWidth * 0.2}
          flexDirection="row"
        >
          <Icon size={15} name="briefcase" />
          <Text fontWeight="bold" paddingHorizontal="mx">
            Studied at : <Text fontWeight="300">{data.education}</Text>
          </Text>
        </Box>

        <Box
          paddingVertical="s"
          alignItems="flex-start"
          width={wWidth - wWidth * 0.2}
          flexDirection="row"
        >
          <Icon size={15} name="map-pin" />
          <Text fontWeight="bold" paddingHorizontal="mx">
            <Text fontWeight="300">{data.about}</Text>
          </Text>
        </Box>

        <Box
          alignItems="center"
          width={wWidth - wWidth * 0.2}
          flexDirection="row"
        >
          <Icon size={15} name="home" />
          <Text fontWeight="bold" paddingHorizontal="mx">
            Lives in : <Text fontWeight="300">{data.livesIn}</Text>
          </Text>
        </Box>

        <Box
          paddingVertical="s"
          alignItems="center"
          width={wWidth - wWidth * 0.2}
          flexDirection="row"
        >
          <Icon size={15} name="mail" />
          <Text fontWeight="bold" paddingHorizontal="mx">
            Email : <Text fontWeight="300">{data.email}</Text>
          </Text>
        </Box>
        <Box
          paddingVertical="s"
          alignItems="center"
          width={wWidth - wWidth * 0.2}
          flexDirection="row"
        >
          <Icon size={15} name="phone" />
          <Text fontWeight="bold" paddingHorizontal="mx">
            Phone : <Text fontWeight="300">{data.phoneNumber}</Text>
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default Detail;
