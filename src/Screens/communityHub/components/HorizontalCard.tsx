import React from "react";
import { Dimensions, Image } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Box, Text } from "../../../components";
const { width: wWidth, height: wHeight } = Dimensions.get("window");
interface HorizontalCardProps {
  data: {
    image: number;
    title: string;
    description: string;
    subtitle?: string;
    btn: string;
  };
  onPress: () => void;
}
const HorizontalCard = ({ data, onPress }: HorizontalCardProps) => {
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
          <Image style={{ height: 139, width: 108 }} source={data.image} />
        </Box>
        <Box width={wWidth / 2}>
          <Text variant="sectionTitle">{data.title}</Text>
          <Text color="primaryText" variant="cardText">
            Risus commodo
          </Text>
          <Text paddingVertical="s" color="primaryText" variant="cardText">
            {data.description}
          </Text>
          <Text>{data.btn}</Text>
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
