import React from "react";
import { Box, Text } from "../../components";

interface CreatePostProps {}
const CreatePost = ({}: CreatePostProps) => {
  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <Text>Create Post</Text>
    </Box>
  );
};

export default CreatePost;
