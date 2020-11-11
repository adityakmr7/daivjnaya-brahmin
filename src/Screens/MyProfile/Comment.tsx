import { RouteProp } from "@react-navigation/native";
import React from "react";
import { Box, Text } from "../../components";
import {
  AppRoutes,
  StackNavigationProps,
} from "../../components/NavigationRoutes";

interface CommentProps {
  navigation: StackNavigationProps<"Comment">;
  route: RouteProp<AppRoutes, "Comment">;
}
const Comment = ({ navigation, route }: CommentProps) => {
  const { postId } = route.params;

  return (
    <Box>
      <Text>Comment</Text>
    </Box>
  );
};

export default Comment;
