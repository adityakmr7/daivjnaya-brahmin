import React from "react";
import { Dimensions, Image } from "react-native";
import { Box, Text } from "../../../components";
import { userProfileProps } from "../interfaces";

const { width: wWidth, height: wHeight } = Dimensions.get("window");

interface FriendsThumbnailProps {
  item: userProfileProps;
}
const FriendsThumbnail = ({ item }: FriendsThumbnailProps) => {
  console.log("friendThumbnail", item);
  return (
    <React.Fragment>
      <Box>
        {/* <Image
          style={{
            width: wWidth / 3 - 15,
            height: wWidth / 4,
            borderRadius: 10,
          }}
          source={item.src}
        /> */}
        <Box>
          <Text variant="mainIconSubTitle">{item.firstName}</Text>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default FriendsThumbnail;
