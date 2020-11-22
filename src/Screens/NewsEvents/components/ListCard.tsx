import React from "react";
import { Dimensions, Image } from "react-native";
import { Box, Text } from "../../../components";
const { width: wWidth, height: wHeight } = Dimensions.get("window");

interface ListCardProps {
  item: {
    title: string;
    content: string;
    createDate: number;
    lastModifiedDate: number;
    nId: number;
    _links: {
      image: {
        href: string;
      };
    };
  };
}
const ListCard = ({ item }: ListCardProps) => {
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
      {item._links && item._links.image && item._links.image.href && (
        <Image
          style={{
            width: wWidth - 20,
            height: wWidth / 2,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
          source={{
            uri: item._links.image.href,
          }}
        />
      )}
      <Box marginVertical="s" marginHorizontal="s">
        <Text variant="silentText" color="primaryText">
          {item.title}
        </Text>
        <Text color="grey" variant="mainIconSubTitle">
          {item.content}
        </Text>
      </Box>
    </Box>
  );
};

export default ListCard;
