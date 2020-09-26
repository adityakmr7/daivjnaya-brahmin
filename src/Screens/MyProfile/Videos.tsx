import { StatusBar } from "expo-status-bar";
import React, { useLayoutEffect } from "react";
import { Box, Text } from "../../components";
import { Feather as Icon } from "@expo/vector-icons";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import { Platform } from "react-native";
import { VideoCard } from "./components";
interface VideosProps {}
const Videos = ({ navigation }) => {
  const src = require("./assets/post.png");
  return (
    <ScrollView>
      <Box flex={1} backgroundColor="iconBackground">
        {[1, 2, 3].map((_, i) => {
          return (
            <Box key={i}>
              <VideoCard {...src} />
            </Box>
          );
        })}
      </Box>
    </ScrollView>
  );
};

export default Videos;
