import React, { useEffect } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { NewsSection } from "../../../components";
import { getAllNews } from "../../../actions/newsActions";
const image = require("../../../../assets/images/img-2.png");

interface NewsAndEventsSectionProps {
  navigation: any;
  getNews: () => void;
  news: any;
}
const NewsAndEventsSection = ({
  navigation,
  getNews,
  news,
}: NewsAndEventsSectionProps) => {
  useEffect(() => {
    getNews();
  }, []);
  console.log("newsnews", news);
  return (
    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
      {[1, 2, 3].map((item, index) => {
        return (
          <NewsSection
            onPress={() => navigation.navigate("NewsEvent")}
            image={image}
            key={index}
          />
        );
      })}
    </ScrollView>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsAndEventsSection);
