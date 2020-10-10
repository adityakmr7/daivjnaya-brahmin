import React from "react";
import { Dimensions, Image } from "react-native";
import { Box, Text } from "../../../components";

import { Feather as Icon } from "@expo/vector-icons";
import { RectButton, TouchableWithoutFeedback } from "react-native-gesture-handler";

interface CompanyCardProps {
  companyLogo: number;
  onPress:() => void;
}

const {width:wWidth}  = Dimensions.get('window');
const CompanyCard = ({ companyLogo,onPress }: CompanyCardProps) => {
    const cardWidth = wWidth/2 + wWidth / 3
  return (
    <Box padding="l" width={cardWidth}  borderRadius="l" backgroundColor="iconBackground" >
       <TouchableWithoutFeedback  {...{onPress}}>
      <Box alignItems="center" flexDirection="row">
        <Image source={companyLogo} />
        <Text color="primaryText" variant="cardSubTitle">
          Company Name
        </Text>
      </Box>
      <Box paddingVertical="s" paddingHorizontal="m">
        <Text color="primaryText" variant="cardText">
          Lorem, ipsum dolor.
        </Text>
        <Box flexDirection="row" alignItems="center">
          <Icon name="dollar-sign" />
          <Text> 1300 - 1500 Monthly</Text>
        </Box>
        <Box flexDirection="row" alignItems="center">
          <Icon name="map-pin" />
          <Text>Banglore</Text>
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
