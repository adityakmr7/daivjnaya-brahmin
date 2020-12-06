import React from "react";
import { Dimensions, Image } from "react-native";
import { Box, Text } from "../../../components";

import { Feather as Icon } from "@expo/vector-icons";
import {
  RectButton,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";

interface CompanyCardProps {
  item: {
    addressLine1: string;
    addressLine2: string;
    alreadyApplied: false;
    city: string;
    companyName: string;
    country: string;
    creationDate: number;
    description: string;
    education: string;
    employerEmail: string;
    employerName: string;
    employerPhoneNumber: string;
    experience: string;
    jobTitle: string;
    jpId: number;
    pinCode: string;
    state: string;
    updatedDate: number;
    _links: {
      coverImage: { href: string };
    };
  };
  onPress: () => void;
}

const { width: wWidth } = Dimensions.get("window");
const CompanyCard = ({ item, onPress }: CompanyCardProps) => {
  const cardWidth = wWidth / 2 + wWidth / 3;
  return (
    <Box
      padding="l"
      width={cardWidth}
      borderRadius="l"
      backgroundColor="iconBackground"
    >
      <TouchableWithoutFeedback {...{ onPress }}>
        <Box alignItems="center" flexDirection="row">
          {item &&
          item._links &&
          item._links.coverImage &&
          item._links.coverImage ? (
            <Image source={{ uri: item._links.coverImage.href }} />
          ) : null}
          {/* <Image source={companyLogo} /> */}
          {item && item.companyName && item.companyName && (
            <Text color="primaryText" variant="cardSubTitle">
              {item.companyName}
            </Text>
          )}
        </Box>
        <Box paddingVertical="s" paddingHorizontal="m">
          {item && item.description && item.description && (
            <Text color="primaryText" variant="cardText">
              {item.description}
            </Text>
          )}
          {/* 
          <Box flexDirection="row" alignItems="center">
            <Icon name="dollar-sign" />
            <Text> 1300 - 1500 Monthly</Text>
          </Box> */}
          <Box flexDirection="row" alignItems="center">
            <Icon name="map-pin" />
            {item && item.city && <Text>{item.city}</Text>}
          </Box>
          <RectButton>
            <Text color="selectColor" variant="profileAction">
              View Details
            </Text>
          </RectButton>
        </Box>
      </TouchableWithoutFeedback>
    </Box>
  );
};

export default CompanyCard;
