import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Box, Text, HorizontalCard } from "../../components";
import { combineTabWithStackProps } from "./MatrimonyRoutes";

export const GroomList = [
  {
    id: 1,
    title: "Full Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod…",
    image: require("../../../assets/images/image-1.png"),
    btn: "View full details",
    fulImage: require("../../../assets/images/full-image-1.png"),
  },
  {
    id: 2,
    title: "Full Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod…",
    image: require("../../../assets/images/image-2.png"),
    btn: "View full details",
    fulImage: require("../../../assets/images/full-image-1.png"),
  },
  {
    id: 3,
    title: "Full Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod…",
    image: require("../../../assets/images/image-3.png"),
    btn: "View full details",
    fulImage: require("../../../assets/images/full-image-1.png"),
  },
];

export const GroomAssets = GroomList.map((data, i) => [data.image]);

interface GroomProps {
  navigation: combineTabWithStackProps<"Groom">;
}

const Groom = ({ navigation }: GroomProps) => {
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
