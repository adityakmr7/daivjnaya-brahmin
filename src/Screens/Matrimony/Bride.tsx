import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Box, Text, HorizontalCard } from "../../components";
import { combineTabWithStackProps } from "./MatrimonyRoutes";

export const BrideList = [
  {
    id: 1,
    title: "Full Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod…",
    image: require("./assets/bride-1.png"),
    btn: "View full details",
  },
  {
    id: 2,
    title: "Full Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod…",
    image: require("./assets/bride-2.png"),
    btn: "View full details",
  },
  {
    id: 3,
    title: "Full Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod…",
    image: require("./assets/bride-3.png"),
    btn: "View full details",
  },
  {
    id: 3,
    title: "Full Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod…",
    image: require("./assets/bride-4.png"),
    btn: "View full details",
  },
];

interface BrideProps {
  navigation: combineTabWithStackProps<"Bride">;
}
const Bride = ({ navigation }: BrideProps) => {
  return (
    <ScrollView>
      <Box backgroundColor="iconBackground" flex={1}>
        <Box>
          {BrideList.map((data, i) => {
            return (
              <HorizontalCard
                key={i}
                onPress={() =>
                  navigation.navigate("BrideDetail", {
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

export default Bride;
