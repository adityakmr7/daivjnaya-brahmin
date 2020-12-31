import { StackNavigationProp } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Dimensions, Image } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { getAllNews } from "../../actions/newsActions";
import { Box, SearchBox, Text } from "../../components";
import {
  AppRoutes,
  StackNavigationProps,
} from "../../components/NavigationRoutes";
import ListCard from "./components/ListCard";

const { width: wWidth, height: wHeight } = Dimensions.get("window");

interface NewsEventsProps {
  navigation: StackNavigationProp<AppRoutes, "NewsEvent">;
  getNews: () => void;
  news: any;
}

const NewsEvents = ({ navigation, getNews, news }: NewsEventsProps) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "News & Events",
    });
  }, [navigation]);
  useEffect(() => {
    getNews();
  }, []);

  const [searchText, setSearchText] = useState<string>("");
  const handleChangeText = (text: string) => {
    setSearchText(text);
  };
  const { loading, news: newsList } = news;

  const renderItem = ({ item }) => {
    return <ListCard key={item.nId} {...{ item }} />;
  };

  return (
    <Box flex={1}>
      <SearchBox {...{ searchText, handleChangeText }} />
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Box
          marginBottom="xs"
          height={wHeight - 160}
          backgroundColor="mainBackground"
          paddingVertical="s"
        >
          <FlatList
            data={newsList}
            keyExtractor={(item) => item.nId.toString()}
            renderItem={renderItem}
          />
        </Box>
      )}
    </Box>
  );
};

function mapStateToProps(state: any) {
  return {
    news: state.news,
  };
}

const mapDispatchToProps = (dispatch: any) => ({
  getNews: () => dispatch(getAllNews()),
});
export default connect(mapStateToProps, mapDispatchToProps)(NewsEvents);
