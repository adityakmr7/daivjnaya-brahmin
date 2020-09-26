import React from "react";
import { Dimensions, Image } from "react-native";
import { Box, Text } from "../../../components";

const { width: wWidth, height: wHeight } = Dimensions.get("window");

interface FriendsThumbnailProps {
  item: {
    src: number;
    name: string;
  };
}
const FriendsThumbnail = ({ item }: FriendsThumbnailProps) => {
  return (
    <React.Fragment>
      <Box>
        <Image
          style={{
            width: wWidth / 3 - 15,
            height: wWidth / 4,
            borderRadius: 10,
          }}
          source={item.src}
        />
        <Box>
          <Text variant="mainIconSubTitle">{item.name}</Text>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default FriendsThumbnail;
