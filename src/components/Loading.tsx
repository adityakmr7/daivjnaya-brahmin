import React from "react";
import { ActivityIndicator } from "react-native";
import { Box } from "./Theme";

const Loading = () => {
  return (
    <Box flex={1} justifyContent="center" alignItems={"center"}>
      <ActivityIndicator />
    </Box>
  );
};

export default Loading;
