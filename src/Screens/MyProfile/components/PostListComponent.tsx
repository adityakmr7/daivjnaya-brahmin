import React from "react";
import { Box, Text } from "../../../components";
import PostCard from "./PostCard";

interface PostListComponentProps {}
const PostListComponent = ({ postList, userProfileData, onPress }) => {
  console.log("postLIst", postList);
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
        _embedded.normalPostResourceList.map((post, i) => {
          console.log("renderingpost", post);
          return (
            <PostCard
              userProfileData={userProfileData}
              onPress={onPress}
              key={post.pId}
              {...{ post }}
            />
          );
        })
      )}
    </Box>
  );
};

export default PostListComponent;
