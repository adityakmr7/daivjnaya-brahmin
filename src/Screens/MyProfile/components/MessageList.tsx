import React from "react";
import { AvatarImage, Box, Text } from "../../../components";

interface MessageListProps {
  image: number;
  userName: string;
  lastMessage: string;
}
const MessageList = ({ image, userName, lastMessage }: MessageListProps) => {
  return (
    <Box alignItems="center" flexDirection="row">
      <AvatarImage islabel={false} image={image} avatarImage={true} />
      <Box>
        <Text color="primaryText" variant="seeAll">
          {userName}
        </Text>
        <Text fontSize={10} variant="silentText">
          {lastMessage}
        </Text>
      </Box>
    </Box>
  );
};

export default MessageList;
