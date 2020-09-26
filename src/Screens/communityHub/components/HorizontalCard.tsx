import React from "react";
import { Dimensions, Image } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Box, Text } from "../../../components";
const { width: wWidth, height: wHeight } = Dimensions.get("window");
interface HorizontalCardProps {
  house: {
    image: number;
  };
  onPress: () => void;
}
const HorizontalCard = ({ house, onPress }: HorizontalCardProps) => {
  return (
    <TouchableWithoutFeedback {...{ onPress }}>
      <Box
        borderColor="primaryText"
        marginHorizontal="s"
        flexDirection="row"
        justifyContent="space-between"
        marginVertical="s"
      >
        <Box>
          <Image style={{ height: 139, width: 108 }} source={house.image} />
        </Box>
        <Box>
          <Text variant="sectionTitle">Community Name</Text>
          <Text color="primaryText" variant="cardText">
            Risus commodo
          </Text>
          <Text paddingVertical="s" color="primaryText" variant="cardText">
            Lorem ipsum dolor sit{"\n"} amet, consectetur
            {"\n"}
            adipiscing elit, sed do eiusmod…
          </Text>
          <Text>View full details</Text>
        </Box>
      </Box>
      <Box
        width={wWidth - 40}
        marginHorizontal="l"
        backgroundColor="mainBackground"
        height={1}
      />
    </TouchableWithoutFeedback>
  );
};

export default HorizontalCard;
