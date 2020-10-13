import React, { useLayoutEffect } from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
import { Box } from "../../components";
import { MatrimonyStackNavigationProps } from "./MatrimonyRoutes";

const { width: wWidth, height: wHeight } = Dimensions.get("window");
const FullScreen = ({
  navigation,
  route,
}: MatrimonyStackNavigationProps<"FullScreen">) => {
  const { title, img } = route.params;
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
        source={img}
      />
    </Box>
  );
};

export default FullScreen;
