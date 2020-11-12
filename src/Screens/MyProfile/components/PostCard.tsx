import React from "react";
import { Dimensions, Image } from "react-native";
import { Box, Text } from "../../../components";
import { Feather as Icon } from "@expo/vector-icons";
import Moment from "react-moment";
import {
  RectButton,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { postDataProps } from "../interfaces";
import { useNavigation } from "@react-navigation/native";

const { width: wWidth, height: wHeight } = Dimensions.get("window");

export interface PostCardProps {
  post: postDataProps;
  userProfileData: any;
  onPress: () => void;
  postLikedMessage: string;
  postUnLikedMessage: string;
  handlePostLikeDisLike: (isLiked: boolean, pId: number) => void;
  handleComment: (postId: number) => void;
  handlePostShare: (postId: number) => void;
}
const PostCard = ({
  post,
  onPress,
  userProfileData,
  handlePostLikeDisLike,
  postLikedMessage,
  postUnLikedMessage,
  handleComment,
  handlePostShare,
}: PostCardProps) => {
  const { _links, firstName, lastName } = userProfileData;

  return (
    <Box marginVertical="s">
      <Box
        marginHorizontal="s"
        flexDirection="row"
        justifyContent="space-between"
      >
        <Box flexDirection="row" alignItems="center">
          <Box paddingRight="s">
            {_links && _links !== "" ? (
              <Image
                style={{
                  width: wWidth / 6,
                  height: wWidth / 6,
                  borderRadius: wWidth / 2,
                }}
                source={{
                  uri: _links.profilePic.href,
                }}
              />
            ) : (
              <Box
                backgroundColor="grey"
                width={wWidth / 6}
                height={wWidth / 6}
                borderRadius={"l"}
              />
            )}
          </Box>
          <Box>
            <Text color="primaryText" variant="cardSubTitle">
              {firstName && firstName} {lastName && lastName}
            </Text>
            <Text variant="cardText" color="grey">
              <Moment
                element={Text}
                format="MMMM Do YYYY"
                date={post.createdDate}
              />
            </Text>
          </Box>
        </Box>
        <Box>
          <TouchableWithoutFeedback {...{ onPress }}>
            <Icon name="more-horizontal" size={26} />
          </TouchableWithoutFeedback>
        </Box>
      </Box>
      <Box>
        <Text marginVertical="s" marginHorizontal="s">
          {post.content}
        </Text>
        <Box>
          {post.files &&
          post.files[0] &&
          post.files[0]._links &&
          post.files[0]._links.url &&
          post.files[0]._links.url.href ? (
            <Image
              style={{ width: wWidth, height: wWidth }}
              source={{ uri: post.files[0]._links.url.href }}
            />
          ) : null}
        </Box>
        <Box
          marginHorizontal="s"
          marginVertical="s"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Box flexDirection="row" alignItems="center">
            <Icon size={15} name="thumbs-up" />
            <Text variant="cardText" color="grey" paddingHorizontal="s">
              {post.isLiked || postLikedMessage !== ""
                ? `You and ${post.totalLikes} others`
                : `${post.totalLikes}`}
            </Text>
          </Box>
          <Box>
            <Text variant="cardText" color="grey">
              {post.totalComments} Comments
            </Text>
          </Box>
        </Box>
        <Box height={1} backgroundColor="mainBackground" />
        <Box
          marginVertical="s"
          marginHorizontal="l"
          flexDirection="row"
          justifyContent="space-between"
        >
          <RectButton
            onPress={() => handlePostLikeDisLike(post.isLiked, post.postId)}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Icon
              size={20}
              name="thumbs-up"
              color={post.isLiked ? "#90caf9" : "black"}
            />
            <Text paddingHorizontal="s" variant="mainIconSubTitle">
              {post.isLiked || postUnLikedMessage === "" ? "UnLike" : "Like"}
            </Text>
          </RectButton>
          <RectButton
            onPress={() => handleComment(post.postId)}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Icon size={20} name="message-square" />
            <Text paddingHorizontal="s" variant="mainIconSubTitle">
              Comment
            </Text>
          </RectButton>
          <RectButton
            onPress={() => handlePostShare(post.postId)}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Icon size={20} name="share" />
            <Text paddingHorizontal="s" variant="mainIconSubTitle">
              Share
            </Text>
          </RectButton>
        </Box>
      </Box>
    </Box>
  );
};

export default PostCard;
