import { RouteProp } from "@react-navigation/native";
import React from "react";
import { Box, Text } from "../../components";
import { AppRoutes } from "../../components/NavigationRoutes";

interface UserDetailProps {
  route: RouteProp<AppRoutes, "UserDetail">;
}
const UserDetail = ({ route }: UserDetailProps) => {
  const { id } = route.params;

  return (
    <Box>
      <Text>UserDetail</Text>
      <Text>{id}</Text>
    </Box>
  );
};

export default UserDetail;
