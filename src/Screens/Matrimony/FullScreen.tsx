import React, { useLayoutEffect } from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
import { Box, Text } from "../../components";
import { MatrimonyStackNavigationProps } from "./MatrimonyRoutes";

const { width: wWidth, height: wHeight } = Dimensions.get("window");
const FullScreen = ({
  navigation,
  route,
}: MatrimonyStackNavigationProps<"FullScreen">) => {
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
