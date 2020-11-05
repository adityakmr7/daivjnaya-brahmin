import React from "react";
import { Box, Text } from "../../../components";
import { Feather as Icon, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { userProfileProps } from "../interfaces";

const IntroSection = ({
  firstName,
  lastName,
  companyName,
  city,
  address,
}: userProfileProps) => {
  // const { firstName, lastName, companyName, city, address } = userProfileData;
  return (
    <Box paddingHorizontal="m" paddingVertical="s">
      <Text variant="sectionTitle">
        {firstName && firstName} {lastName && lastName}{" "}
      </Text>
      <Box>
        <Box>
          <Box flexDirection="row" alignItems="center">
            <Ionicons name="ios-school" size={20} color="black" />
            <Text paddingHorizontal="l">{companyName}</Text>
          </Box>
          <Box flexDirection="row" alignItems="center">
            <MaterialIcons name="business-center" size={20} color="black" />
            <Text paddingHorizontal="l">{city}</Text>
          </Box>
          <Box flexDirection="row" alignItems="center">
            <MaterialIcons
              name="store-mall-directory"
              size={20}
              color="black"
            />
            <Text paddingHorizontal="l">{address}</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default IntroSection;
