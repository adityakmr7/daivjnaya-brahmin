import React from "react";
import { Image } from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import { Box, Text } from "../../components";
import { IntroSection, RoundedBorderButton } from "../MyProfile/components";
import NetWorkComponentTitle from "./components/NetWorkComponentTitle";

interface CareerProfileProps {}

export const friends = require("./assets/small-image.png");
const walls = require("./assets/wall.png");
const CareerProfile = ({}: CareerProfileProps) => {
  return (
    <Box flex={1} backgroundColor="iconBackground">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box height={20}>
          <Image height={20} source={walls} />
        </Box>
        <Box
        
          marginHorizontal="xl"
          justifyContent="space-between"
          style={{ marginTop: 115, marginLeft: 20 }}
          flexDirection="row"
        >
          <Box borderRadius="xl" height={140} width={140}>
            <Image
              style={{ height: 140, width: 140, borderRadius: 140 / 2 }}
              source={friends}
            />
          </Box>
          <Box
            style={{
              position: "relative",
              top: 80,
            }}
          >
            <RoundedBorderButton label={"Edit Profile"} onPress={() => {}} />
          </Box>
        </Box>
        <IntroSection />
        <Box>
          <NetWorkComponentTitle title="About" onPress={()=>{}} />
        </Box>
      </ScrollView>
    </Box>
  );
};

export default CareerProfile;
