import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Box, Text } from "../../components";
import { StackNavigationProps } from "../../components/NavigationRoutes";
import HorizontalCard from "../communityHub/components/HorizontalCard";
import { MatrimonyRootParamList } from "./MatrimonyRoutes";

interface GroomProps {}
export const GroomList = [
  {
    id: 1,
    title: "Full Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod…",
    image: require("./assets/image-1.png"),
    btn: "View full details",
    fulImage: require("./assets/full-image-1.png"),
  },
  {
    id: 2,
    title: "Full Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod…",
    image: require("./assets/image-2.png"),
    btn: "View full details",
    fulImage: require("./assets/full-image-1.png"),
  },
  {
    id: 3,
    title: "Full Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod…",
    image: require("./assets/image-3.png"),
    btn: "View full details",
    fulImage: require("./assets/full-image-1.png"),
  },
];

export const GroomAssets = GroomList.map((data, i) => [data.image]);

const Groom = ({
  navigation,
}: {
  navigation: BottomTabNavigationProp<MatrimonyRootParamList, "Groom">;
}) => {
  return (
    <ScrollView>
      <Box backgroundColor="iconBackground" flex={1}>
        <Box>
          {GroomList.map((data, i) => {
            return (
              <HorizontalCard
                key={i}
                onPress={() =>
                  navigation.navigate("GroomDetail", {
                    id: data.id,
                  })
                }
                {...{ data }}
              />
            );
          })}
        </Box>
      </Box>
    </ScrollView>
  );
};

export default Groom;
