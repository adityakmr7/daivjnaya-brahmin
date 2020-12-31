import { useIsFocused } from "@react-navigation/native";
import React, { useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { getAllNews } from "../../../actions/newsActions";
import { Box, NewsSection } from "../../../components";
import restServices from "../../../services/restServices";

interface NewsAndEventsSectionProps {
  navigation: any;
  news: any;
  loading: boolean;
}
const NewsAndEventsSection = ({
  navigation,
  news,
  loading,
}: NewsAndEventsSectionProps) => {
  // useEffect(() => {
  //   async function makeRequest() {
  //     const _rest = new restServices();
  //     const accessToken = await _rest.getAccessToken();
  //     if (accessToken) {
  //       getNews();
  //     }
  //   }
  //   makeRequest();
  // }, []);
  // const { loading, news: newsList } = news;
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
          data={news}
          horizontal={true}
          renderItem={renderItem}
          keyExtractor={(item) => item.nId.toString()}
          showsHorizontalScrollIndicator={false}
        />
      )}
    </Box>
  );
};

// function mapStateToProps(state: any) {
//   return {
//     news: state.news,
//   };
// }

// const mapDispatchToProps = (dispatch: any) => ({
//   getNews: () => dispatch(getAllNews()),
// });
export default NewsAndEventsSection;
