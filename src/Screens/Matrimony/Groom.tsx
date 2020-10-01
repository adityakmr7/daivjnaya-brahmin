import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Box, Text } from "../../components";
import HorizontalCard from "../communityHub/components/HorizontalCard";
import { MatrimonyTabNavigationProps } from "./MatrimonyRoutes";

interface GroomProps {}
const GroomList = [
  {
    id: 1,
    title: "Full Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod…",
    image: require("./assets/image-1.png"),
    btn: "View full details",
  },
  {
    id: 2,
    title: "Full Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod…",
    image: require("./assets/image-2.png"),
    btn: "View full details",
  },
  {
    id: 3,
    title: "Full Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod…",
    image: require("./assets/image-3.png"),
    btn: "View full details",
  },
];

export const GroomAssets = GroomList.map((data, i) => [data.image]);

const Groom = ({ navigation }: MatrimonyTabNavigationProps<"Groom">) => {
  return (
    <ScrollView>
      <Box backgroundColor="iconBackground" flex={1}>
        <Box>
          {GroomList.map((data, i) => {
            return (
              <HorizontalCard
                key={i}
                onPress={() => console.log("groom")}
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
