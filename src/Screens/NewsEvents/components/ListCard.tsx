import React from "react";
import { Dimensions, Image } from "react-native";
import { Box, Text } from "../../../components";
const { width: wWidth, height: wHeight } = Dimensions.get("window");

interface ListCardProps {
  data: {
    id: number;
    image: number;
    title: string;
    desc: string;
  };
}
const ListCard = ({ data }: ListCardProps) => {
  return (
    <Box
      marginVertical="s"
      borderBottomRightRadius="l"
      borderBottomLeftRadius="l"
      backgroundColor="iconBackground"
      borderTopLeftRadius="l"
      borderTopRightRadius="l"
      width={wWidth - 20}
      marginHorizontal="s"
    >
      <Image
        style={{
          width: wWidth - 20,
          height: wWidth / 2,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
        source={data.image}
      />
      <Box marginVertical="s" marginHorizontal="s">
        <Text variant="silentText" color="primaryText">
          {data.title}
        </Text>
        <Text color="grey" variant="mainIconSubTitle">
          {data.desc}
        </Text>
      </Box>
    </Box>
  );
};

export default ListCard;
