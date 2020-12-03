import React from "react";
import { Box, Text } from "../../../components";
import { Feather as Icon, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { userProfileProps } from "../interfaces";

const IntroSection = ({
  firstName,
  lastName,
  companyName,
  city,
  education,
  about,
}: userProfileProps) => {
  // const { firstName, lastName, companyName, city, address } = userProfileData;
  return (
    <Box paddingHorizontal="m" paddingVertical="s">
      <Text variant="sectionTitle">
        {firstName ? firstName : ""} {lastName ? lastName : ""}
      </Text>
      <Box>
        <Box>
          <Box flexDirection="row" alignItems="center">
            <Ionicons name="ios-school" size={20} color="black" />
            <Text paddingHorizontal="l">
              Studied: {education !== null ? education : ""}
            </Text>
          </Box>
          <Box flexDirection="row" alignItems="center">
            <MaterialIcons name="business-center" size={20} color="black" />
            <Text paddingHorizontal="l">Works At: {companyName !== null ? companyName : ""}</Text>
          </Box>
          <Box flexDirection="row" alignItems="center">
            <MaterialIcons
              name="store-mall-directory"
              size={20}
              color="black"
            />
            <Text paddingHorizontal="l">Lives in: {city !== null ? city : ""}</Text>
          </Box>
          <Box flexDirection="row" alignItems="center">
            <MaterialIcons
              name="info"
              size={20}
              color="black"
            />
            <Text paddingHorizontal="l">About: {about !== null ? about : ""}</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default IntroSection;
