import { StackNavigationProp } from "@react-navigation/stack";
import React, { useLayoutEffect } from "react";
import { Box, Text } from "../../components";
import { MatrimonyRootParamList } from "./MatrimonyRoutes";
import { Feather as Icon } from "@expo/vector-icons";
import { RouteProp } from "@react-navigation/native";
import { GroomList } from "./Groom";
const GroomDetail = ({
  navigation,
  route,
}: {
  navigation: StackNavigationProp<MatrimonyRootParamList, "GroomDetail">;
  route: RouteProp<MatrimonyRootParamList, "GroomDetail">;
}) => {
  // const id = route.params.id;
  // const data = GroomList.filter((item) => item.id === id)[0];
  // console.log(id);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      headerTitleStyle: {
        display: "none",
      },
      headerRight: () => (
        <Box paddingHorizontal="s" flexDirection="row" alignItems="center">
          <Text paddingHorizontal="s">1/2</Text>
          <Icon name="more-vertical" size={26} />
        </Box>
      ),
    });
  }, [navigation]);
  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <Text>Groom Detail</Text>
    </Box>
  );
};

export default GroomDetail;
