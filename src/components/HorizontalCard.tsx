import React from "react";
import { Dimensions, Image } from "react-native";
import {
  RectButton,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { horizontalCardDataType } from "../Screens/Matrimony/interface";
import { Box, Text } from "./Theme";
const { width: wWidth, height: wHeight } = Dimensions.get("window");
interface HorizontalCardProps {
  data: horizontalCardDataType;
  onPress?: () => void;
}
const HorizontalCard = ({ data, onPress }: HorizontalCardProps) => {
  console.log("horizontalCardData", data);
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
          {/* <Image
            style={{ height: 139, width: 108 }}
            source={
              data.image
                ? data.image
                : { uri: data.images[0]._links.image.href }
            }
          /> */}
        </Box>
        <Box width={wWidth / 2}>
          <Text variant="sectionTitle">{data.address.state}</Text>
          <Text color="primaryText" variant="cardText">
            {data.address.livesIn}
          </Text>
          <Text paddingVertical="s" color="primaryText" variant="cardText">
            {data.about ? data.about : ""}
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
