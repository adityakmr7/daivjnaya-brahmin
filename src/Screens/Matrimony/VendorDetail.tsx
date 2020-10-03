import { StackNavigationProp } from "@react-navigation/stack";
import React, { useLayoutEffect } from "react";
import { Box, Text } from "../../components";
import { MatrimonyStackParamList } from "./MatrimonyRoutes";
import { Feather as Icon } from "@expo/vector-icons";
import { RouteProp } from "@react-navigation/native";
import { VendorList } from "./Vendors";
import { ScrollView } from "react-native-gesture-handler";
import Detail from "./components/Detail";

const VendorDetail = ({
  navigation,
  route,
}: {
  navigation: StackNavigationProp<MatrimonyStackParamList, "VendorDetail">;
  route: RouteProp<MatrimonyStackParamList, "VendorDetail">;
}) => {
  const id = route.params.id;
  const data = VendorList.filter((item) => item.id === id)[0];
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
    <Box flex={1}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Detail {...{ data }} />
      </ScrollView>
    </Box>
  );
};

export default VendorDetail;
