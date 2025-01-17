import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useLayoutEffect } from "react";
import {
  MatrimonyStackNavigationProps,
  MatrimonyStackParamList,
} from "./MatrimonyRoutes";
import { BrideList } from "./Bride";
import { Feather as Icon } from "@expo/vector-icons";
import { Box, Text } from "../../components";
import {
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import Detail from "./components/Detail";

const BrideDetail = ({
  navigation,
  route,
}: MatrimonyStackNavigationProps<"BrideDetail">) => {
  const id = route.params.id;
  const data = BrideList.filter((item) => item.id === id)[0];
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      headerTitleStyle: {
        display: "none",
      },
      headerRight: () => (
        <Box paddingHorizontal="s" flexDirection="row" alignItems="center">
          <Text paddingHorizontal="s">1/2</Text>
          <TouchableWithoutFeedback
            onPress={() =>
              navigation.navigate("FullScreen", {
                title: data.title,
                img: data.image,
              })
            }
          >
            <Icon name="more-vertical" size={26} />
          </TouchableWithoutFeedback>
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

export default BrideDetail;
