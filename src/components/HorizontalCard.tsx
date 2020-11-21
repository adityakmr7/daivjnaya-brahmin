import React from "react";
import { Dimensions, Image } from "react-native";
import { AntDesign as Icon } from "@expo/vector-icons";
import {
  RectButton,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { horizontalCardDataType } from "../Screens/Matrimony/interface";
import { Box, Text } from "./Theme";
const { width: wWidth, height: wHeight } = Dimensions.get("window");
interface HorizontalCardProps {
  item: horizontalCardDataType;
  onPress?: () => void;
}
const HorizontalCard = ({ item, onPress }: HorizontalCardProps) => {
  console.log("Horizontal", item);
  return (
    <TouchableWithoutFeedback {...{ onPress }}>
      <Box
        borderColor="primaryText"
        marginHorizontal="s"
        flexDirection="row"
        justifyContent="space-between"
        marginVertical="s"
      >
        {item.images ? (
          <Box>
            <Image
              style={{ height: 139, width: 108 }}
              source={
                item.image
                  ? item.image
                  : { uri: item.images[0]._links.image.href }
              }
            />
          </Box>
        ) : (
          <Box
            flex={1}
            justifyContent="center"
            alignItems="center"
            backgroundColor="grey"
            height={139}
            width={108}
          >
            <Icon name="question" size={30} />
          </Box>
        )}
        <Box width={wWidth / 2}>
          <Text variant="sectionTitle">
            {item.address ? item.address.state : item.firstName}
          </Text>
          <Text color="primaryText" variant="cardText">
            {item.address ? item.address.livesIn : item.livesIn}
          </Text>
          <Text paddingVertical="s" color="primaryText" variant="cardText">
            {item.about ? item.about : ""}
          </Text>
          <RectButton
            onPress={() => {
              console.log("View Full Detail");
            }}
          >
            <Text>View Full Detail</Text>
          </RectButton>
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
