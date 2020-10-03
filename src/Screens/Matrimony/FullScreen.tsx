import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useLayoutEffect } from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Box, Text } from "../../components";
import { MatrimonyStackParamList } from "./MatrimonyRoutes";

interface FullScreenProps {}
const { width: wWidth, height: wHeight } = Dimensions.get("window");
const FullScreen = ({
  navigation,
  route,
}: {
  navigation: StackNavigationProp<MatrimonyStackParamList, "FullScreen">;
  route: RouteProp<MatrimonyStackParamList, "FullScreen">;
}) => {
  const { title, img } = route.params;
  console.log({ title, img });
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: title,
      headerStyle: {
        elevation: 0,
      },
    });
  }, [navigation]);

  return (
    <Box flex={1}>
      <Image
        style={{
          height: wHeight,
          width: wWidth,
          ...StyleSheet.absoluteFillObject,
        }}
        source={require("./assets/image-1.png")}
      />
    </Box>
  );
};

export default FullScreen;
