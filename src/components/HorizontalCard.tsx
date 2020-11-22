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
  community?: boolean;
}
const HorizontalCard = ({ item, onPress, community }: HorizontalCardProps) => {
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
        {community ? (
          <>
            {item.hubGalleries.length > 0 ? (
              <Box>
                <Image
                  style={{ height: 139, width: 108 }}
                  source={{
                    uri: item.hubGalleries[0]._links.self.href,
                  }}
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
          </>
        ) : null}
        <Box width={wWidth / 2}>
          <Text variant="sectionTitle">{item.hubName ? item.hubName : ""}</Text>
          <Text variant="sectionTitle">
            {item.address ? item.address.city : ""}
          </Text>
          <Text color="primaryText" variant="cardText">
            {item.address ? item.address.livesIn : item.livesIn}
          </Text>
          <Text paddingVertical="s" color="primaryText" variant="cardText">
            {item.about ? item.about : ""}
          </Text>

          <Text>View Full Detail</Text>
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
