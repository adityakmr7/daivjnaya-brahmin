import React from "react";
import { Box, Text } from "../../../components";
import { Feather as Icon } from "@expo/vector-icons";

interface IntroSectionProps {
  firstName: string;
  lastName: string;
  location: string;
  work: string;
  workAt: string;
}
const IntroSection = ({
  firstName,
  lastName,
  location,
  work,
  workAt,
}: IntroSectionProps) => {
  return (
    <Box paddingHorizontal="m" paddingVertical="s">
      <Text variant="sectionTitle">
        {firstName && firstName} {lastName && lastName}{" "}
      </Text>
      <Box>
        <Box>
          <Box flexDirection="row" alignItems="center">
            <Icon name="briefcase" />
            <Text paddingHorizontal="l">{workAt && workAt}</Text>
          </Box>
          <Box flexDirection="row" alignItems="center">
            <Icon name="briefcase" />
            <Text paddingHorizontal="l">{work && work}</Text>
          </Box>
          <Box flexDirection="row" alignItems="center">
            <Icon name="briefcase" />
            <Text paddingHorizontal="l">{location && location}</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default IntroSection;
