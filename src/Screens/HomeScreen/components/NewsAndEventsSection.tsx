import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { NewsSection } from "../../../components";
const image = require("../../../../assets/images/img-2.png");

interface NewsAndEventsSectionProps {
  navigation: any;

  news: any;
}
const NewsAndEventsSection = ({
  navigation,
  news,
}: NewsAndEventsSectionProps) => {
  // useEffect(() => {
  //   getNews();
  // }, []);
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

export default NewsAndEventsSection;
