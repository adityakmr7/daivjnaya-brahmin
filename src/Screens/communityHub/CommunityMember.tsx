import React, { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Box, SearchBox, Text } from "../../components";
import { TabView, SceneMap } from "react-native-tab-view";

interface CommunityMemberProps {}
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

const CommunityMember = ({}: CommunityMemberProps) => {
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
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />

    // {/* <Box
    //   backgroundColor="mainBackground"
    //   borderColor="mainBackground"
    //   borderWidth={1}
    // >
    //   <SearchBox {...{ searchText, handleChangeText }} />
    // </Box> */}

    // {/* {houses.map((data, i) => {
    //   return (
    //     <HorizontalCard
    //       key={i}
    //       onPress={() =>
    //         navigation.navigate("KarawarDetail", { id: data.id })
    //       }
    //       {...{ data }}
    //     />
    //   );
    // })} */}
  );
};

export default CommunityMember;
