import { StatusBar } from "expo-status-bar";
import React from "react";
import { Box, Text } from "../../components";

import { ScrollView } from "react-native-gesture-handler";

import { VideoCard } from "./components";
import { Posts } from "./MyProfile";
interface VideosProps {}

type post = {
  id: number;
  video: string;
  image: number;
  user: string;
  userImage: number;
  date: string;
  caption: string;
  likes: number;
  comments: number;
};

const Videos = ({ navigation }) => {
  const src = require("./assets/post.png");
  return (
    <ScrollView>
      <Box flex={1} backgroundColor="iconBackground">
        {Posts.map((post, i) => {
          if (post.video) {
            return (
              <Box key={i}>
                <VideoCard {...{ post }} />
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
