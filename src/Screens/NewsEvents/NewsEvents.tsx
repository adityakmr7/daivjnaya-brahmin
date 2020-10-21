import React, { useState } from "react";
import { Dimensions, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Box, SearchBox, Text } from "../../components";
import { StackNavigationProps } from "../../components/NavigationRoutes";
import ListCard from "./components/ListCard";

const NewsList = [
  {
    id: 1,
    image: require("../../../assets/images/abp.png"),
    title:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
    desc:
      "Morbi a suscipit ipsum. Suspendisse mollis libero ante. Pellentesque finibus convallis nulla vel placerat. Nulla ipsum…",
  },
  {
    id: 2,
    image: require("../../../assets/images/dd.png"),
    title:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
    desc:
      "Morbi a suscipit ipsum. Suspendisse mollis libero ante. Pellentesque finibus convallis nulla vel placerat. Nulla ipsum…",
  },
  {
    id: 3,
    image: require("../../../assets/images/news.png"),
    title:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
    desc:
      "Morbi a suscipit ipsum. Suspendisse mollis libero ante. Pellentesque finibus convallis nulla vel placerat. Nulla ipsum…",
  },
];

const { width: wWidth, height: wHeight } = Dimensions.get("window");

const NewsEvents = ({ navigation }: StackNavigationProps<"NewsEvent">) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "News & Events",
    });
  }, [navigation]);

  const [searchText, setSearchText] = useState<string>("");
  const handleChangeText = (text: string) => {
    setSearchText(text);
  };

  return (
    <Box flex={1}>
      <SearchBox {...{ searchText, handleChangeText }} />
      <Box backgroundColor="mainBackground" paddingVertical="s">
        <ScrollView>
          {NewsList.map((data, i) => {
            return <ListCard key={data.id} {...{ data }} />;
          })}
        </ScrollView>
      </Box>
    </Box>
  );
};

export default NewsEvents;
