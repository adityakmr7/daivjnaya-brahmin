import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { TabNavigationProps } from ".";
import { Box, SearchBox, Text } from "../../components";
import HorizontalCard from "./components/HorizontalCard";

export const houses = [
  {
    id: 1,
    image: require("./assets/house1.png"),
    title: "Community Name",
    subtitle: "Risus commodo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod…",
    btn: "View full details",
  },
  {
    id: 1,
    image: require("./assets/house2.png"),
    title: "Community Name",
    subtitle: "Risus commodo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod…",
    btn: "View full details",
  },
  {
    id: 1,
    image: require("./assets/house3.png"),
    title: "Community Name",
    subtitle: "Risus commodo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod…",
    btn: "View full details",
  },
  {
    id: 1,
    image: require("./assets/house4.png"),
    title: "Community Name",
    subtitle: "Risus commodo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod…",
    btn: "View full details",
  },
];

const Karwar = ({ navigation }: TabNavigationProps<"Karwar">) => {
  const [searchText, setSearchText] = useState<string>("");
  const handleChangeText = (text: string) => {
    setSearchText(text);
  };

  return (
    <ScrollView>
      <Box backgroundColor="iconBackground" flex={1}>
        <Box
          backgroundColor="mainBackground"
          borderColor="mainBackground"
          borderWidth={1}
        >
          <SearchBox {...{ searchText, handleChangeText }} />
        </Box>

        {houses.map((house, i) => {
          return (
            <HorizontalCard
              key={i}
              onPress={() =>
                navigation.navigate("KarawarDetail", { id: house.id })
              }
              {...{ house }}
            />
          );
        })}
      </Box>
    </ScrollView>
  );
};

export default Karwar;
