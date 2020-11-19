import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Box, SearchBox, Text, HorizontalCard } from "../../components";
import { combineTabWithStackProps } from "./communityNavigatinProps";
import { TabView, SceneMap } from "react-native-tab-view";
import { Dimensions, StyleSheet, View } from "react-native";
export const houses = [
  {
    id: 1,
    image: require("../../../assets/images/house1.png"),
    title: "Community Name",
    subtitle: "Risus commodo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod…",
    btn: "View full details",
  },
  {
    id: 1,
    image: require("../../../assets/images/house2.png"),
    title: "Community Name",
    subtitle: "Risus commodo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod…",
    btn: "View full details",
  },
  {
    id: 1,
    image: require("../../../assets/images/house3.png"),
    title: "Community Name",
    subtitle: "Risus commodo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod…",
    btn: "View full details",
  },
  {
    id: 1,
    image: require("../../../assets/images/house4.png"),
    title: "Community Name",
    subtitle: "Risus commodo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod…",
    btn: "View full details",
  },
];
interface KarwarProps {
  navigation: combineTabWithStackProps<"Karwar">;
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: "#ff4081" }]} />
);

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: "#673ab7" }]} />
);

const initialLayout = { width: Dimensions.get("window").width };

// export const assetsKarwar = houses.map((item, i) => item.image);

const Karwar = ({ navigation }: KarwarProps) => {
  const [searchText, setSearchText] = useState<string>("");
  const handleChangeText = (text: string) => {
    setSearchText(text);
  };

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "First" },
    { key: "second", title: "Second" },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  return (
    <ScrollView>
      <Box backgroundColor="iconBackground" flex={1}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
        />

        <Box
          backgroundColor="mainBackground"
          borderColor="mainBackground"
          borderWidth={1}
        >
          <SearchBox {...{ searchText, handleChangeText }} />
        </Box>

        {/* {houses.map((data, i) => {
          return (
            <HorizontalCard
              key={i}
              onPress={() =>
                navigation.navigate("KarawarDetail", { id: data.id })
              }
              {...{ data }}
            />
          );
        })} */}
      </Box>
    </ScrollView>
  );
};

export default Karwar;
