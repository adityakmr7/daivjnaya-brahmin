import { StackNavigationProp } from "@react-navigation/stack";
import React, { useLayoutEffect } from "react";
import { Box, Text } from "../../components";
import { MatrimonyStackParamList } from "./MatrimonyRoutes";
import { Feather as Icon } from "@expo/vector-icons";
import { RouteProp } from "@react-navigation/native";
import { GroomList } from "./Groom";
import {
  RectButton,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import Detail from "./components/Detail";

const GroomDetail = ({
  navigation,
  route,
}: {
  navigation: StackNavigationProp<MatrimonyStackParamList, "GroomDetail">;
  route: RouteProp<MatrimonyStackParamList, "GroomDetail">;
}) => {
  const id = route.params.id;
  const data = GroomList.filter((item) => item.id === id)[0];
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

export default GroomDetail;
