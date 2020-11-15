import React from "react";
import { Dimensions, Image } from "react-native";
import { Box, Text } from "../../../components";
import { friendListProps, userProfileProps } from "../interfaces";

const { width: wWidth, height: wHeight } = Dimensions.get("window");

interface FriendsThumbnailProps {
  item: friendListProps;
}
const FriendsThumbnail = ({ item }: FriendsThumbnailProps) => {
  console.log("friendThumbnail", item);
  return (
    <React.Fragment>
      <Box>
        {item._links ? (
          <Image
            style={{
              width: wWidth / 3 - 15,
              height: wWidth / 4,
              borderRadius: 10,
            }}
            source={{ uri: item._links.profilePic.href }}
          />
        ) : null}
        <Box>
          <Text variant="mainIconSubTitle">
            {item.firstName} {item.lastName}
          </Text>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default FriendsThumbnail;
