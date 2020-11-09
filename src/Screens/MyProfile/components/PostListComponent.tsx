import React from "react";
import { Box, Text } from "../../../components";
import { postDataProps } from "../interfaces";
import PostCard from "./PostCard";

interface PostListComponentProps {}
const PostListComponent = ({ postList, userProfileData, onPress }) => {
  const { _embedded } = postList;

  //TODO: use FLatList here
  return (
    <Box>
      {!_embedded ? (
        <Box>
          <Text>No Post Yet</Text>
        </Box>
      ) : (
        _embedded &&
        _embedded.normalPostResourceList.map((post: postDataProps, i) => {
          return (
            <PostCard
              userProfileData={userProfileData}
              onPress={onPress}
              key={i}
              post={post}
            />
          );
        })
      )}
    </Box>
  );
};

export default PostListComponent;
