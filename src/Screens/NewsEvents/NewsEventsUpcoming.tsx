import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Box, SearchBox, Text } from "../../components";
import ListCard from "./components/ListCard";

interface NewsEventUpcomingProps {}
const UpcomingList = [
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
const NewsEventUpcoming = ({}: NewsEventUpcomingProps) => {
  const [searchText, setSearchText] = useState<string>("");
  const handleChangeText = (text: string) => {
    setSearchText(text);
  };
  return (
    <Box flex={1}>
      <SearchBox {...{ searchText, handleChangeText }} />
      <Box
        flex={1}
        justifyContent="center"
        alignItems="center"
        backgroundColor="mainBackground"
        paddingVertical="s"
      >
        {/* <Text>Coming Soon</Text> */}
      </Box>
    </Box>
  );
};

export default NewsEventUpcoming;
