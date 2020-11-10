import React, { useState } from "react";
import { connect } from "react-redux";
import { postIdDeleteLike, postIdPostLike } from "../../../actions/postActions";
import { Box, Text } from "../../../components";
import { postDataProps } from "../interfaces";
import PostCard from "./PostCard";

interface PostListComponentProps {
  postList: any;
  onPress: () => void;
  userProfileData: any;
  makePostLike: (pId: number) => void;
  makePostUnLike: (pId: number) => void;
  postLikedMessage: string;
  postUnLikedMessage: string;
}
const PostListComponent = ({
  postList,
  userProfileData,
  makePostLike,
  makePostUnLike,
  postLikedMessage,
  postUnLikedMessage,
  onPress,
}: PostListComponentProps) => {
  const { _embedded } = postList;
  const handlePostLikeDisLike = (isLiked: boolean, pId: number) => {
    if (isLiked === true || postLikedMessage !== "") {
      makePostUnLike(pId);
    } else {
      makePostLike(pId);
    }
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
                postLikedMessage={postLikedMessage}
                postUnLikedMessage={postUnLikedMessage}
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

function mapStateToProps(state: any) {
  return {
    postLikedMessage: state.post.postLikedMessage,
    postUnLikedMessage: state.post.postUnLikedMessage,
  };
}

const mapDispatchToProps = (dispatch: any) => ({
  makePostLike: (pId: number) => dispatch(postIdPostLike(pId)),
  makePostUnLike: (pId: number) => dispatch(postIdDeleteLike(pId)),
});
export default connect(mapStateToProps, mapDispatchToProps)(PostListComponent);
