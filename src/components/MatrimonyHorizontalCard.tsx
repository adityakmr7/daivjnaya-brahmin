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
// about: "Simply"
// companyName: "G media solutions"
// creationDate: 1605196070000
// designation: "Design Head"
// education: "Fourth"
// email: "grihista.harish@gmail.com"
// firstName: "Pooja"
// gender: "FEMALE"
// images: [{…}]
// interest: "Cartoons, drawing"
// lastName: "Revankar"
// livesIn: "Bangalore"
// pId: 18
// phoneNumber: "9845184444"
// updatedDate: 1605196070000
const MatrimonyHorizontalCard = ({ item, onPress }: HorizontalCardProps) => {
  return (
    <TouchableWithoutFeedback {...{ onPress }}>
      <Box flexDirection="row">
        <Box
          borderColor="primaryText"
          marginHorizontal="s"
          flexDirection="row"
          justifyContent="space-between"
          marginVertical="s"
        >
          {item.images.length > 0 ? (
            <Box>
              <Image
                style={{ height: 139, width: 108 }}
                source={{
                  uri: item.images[0]._links.image.href,
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
        </Box>
        <Box width={wWidth - 100} marginHorizontal="xl">
          <Text variant="sectionTitle">
            {item.firstName} {item.lastName}
          </Text>
          <Text variant="sectionTitle">{item.interest}</Text>
          <Text color="primaryText" variant="cardText">
            {item.livesIn}
          </Text>
          <Text paddingVertical="s" color="primaryText" variant="cardText">
            {item.about}
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

export default MatrimonyHorizontalCard;
