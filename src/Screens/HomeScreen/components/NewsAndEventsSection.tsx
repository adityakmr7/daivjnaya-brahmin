import React, { useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { getAllNews } from "../../../actions/newsActions";
import { Box, NewsSection } from "../../../components";
const image = require("../../../../assets/images/img-2.png");

interface NewsAndEventsSectionProps {
  navigation: any;
  isAuthenticated: boolean;
  news: any;
  getNews: () => void;
}
const NewsAndEventsSection = ({
  navigation,
  news,
  isAuthenticated,
  getNews,
}: NewsAndEventsSectionProps) => {
  useEffect(() => {
    if (isAuthenticated) {
      getNews();
    }
  }, [isAuthenticated]);
  const { loading, news: newsList } = news;
  const renderItem = ({ item }: { item: any }) => {
    return (
      <NewsSection
        onPress={() => navigation.navigate("NewsEvent")}
        image={item._links.image.href}
        key={item.nId}
        newsTitle={item.title}
      />
    );
  };
  return (
    <Box>
      {loading ? (
        <Box>
          <ActivityIndicator />
        </Box>
      ) : (
        <FlatList
          data={newsList}
          horizontal={true}
          renderItem={renderItem}
          keyExtractor={(item) => item.nId}
          showsHorizontalScrollIndicator={false}
        />
      )}
    </Box>
  );
};

function mapStateToProps(state: any) {
  return {
    news: state.news,
    isAuthenticated: state.auth.isAuthenticated,
  };
}

const mapDispatchToProps = (dispatch: any) => ({
  getNews: () => dispatch(getAllNews()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsAndEventsSection);
