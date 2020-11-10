import React from "react";
import { connect } from "react-redux";
import { postIdPostLike } from "../../../actions/postActions";
import { Box, Text } from "../../../components";
import { postDataProps } from "../interfaces";
import PostCard from "./PostCard";

interface PostListComponentProps {
  postList: any;
  onPress: () => void;
  userProfileData: any;
}
const PostListComponent = ({
  postList,
  userProfileData,
  onPress,
}: PostListComponentProps) => {
  const { _embedded } = postList;
  const handlePostLikeDisLike = (pId: number) => {
    // TODO: handle post like dislike here
    console.log("post id", pId);
  };
  //TODO: use FLatList here
  return (
    <Box>
      {!_embedded ? (
        <Box>
          <Text>No Post Yet</Text>
        </Box>
      ) : (
        _embedded &&
        _embedded.normalPostResourceList.map(
          (post: postDataProps, i: number) => {
            return (
              <PostCard
                handlePostLikeDisLike={handlePostLikeDisLike}
                userProfileData={userProfileData}
                onPress={onPress}
                key={i}
                post={post}
              />
            );
          }
        )
      )}
    </Box>
  );
};
export default PostListComponent;
