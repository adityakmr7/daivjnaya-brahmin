import { StatusBar } from "expo-status-bar";
import React from "react";
import { Box, Text } from "../../components";

import { ScrollView } from "react-native-gesture-handler";

import { VideoCard } from "./components";

// export const VideoPost = [
//   {
//     id: 1,
//     user: "Siddharth Revankar",
//     userImage: require("../../../assets/images/ak.png"),
//     date: "17 Jun 2019",
//     caption: "Caption here",
//     image: require("../../../assets/images/post.png"),
//     comments: 10,
//     likes: 25,
//     video: require("../../../assets/images/video.mp4"),
//   },
//   {
//     id: 2,
//     user: "Siddharth Revankar",
//     userImage: require("../../../assets/images/pa.png"),
//     date: "17 Jun 2019",
//     caption: "Caption here",
//     image: require("../../../assets/images/post.png"),
//     comments: 10,
//     likes: 25,
//     video: require("../../../assets/images/video.mp4"),
//   },
// ];

const Videos = ({ navigation }) => {
  const src = require("../../../assets/images/post.png");
  return (
    <ScrollView>
      <Box flex={1} backgroundColor="iconBackground">
        {VideoPost.map((post, i) => {
          if (post.video) {
            return (
              <Box key={i}>
                {/* <VideoCard {...{ post }} /> */}
                <Box height={5} backgroundColor="mainBackground" />
              </Box>
            );
          }
          return (
            <Box>
              <Text>No Video For this Post</Text>
            </Box>
          );
        })}
      </Box>
    </ScrollView>
  );
};

export default Videos;
