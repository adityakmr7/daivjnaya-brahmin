import React from "react";
import { Image } from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import { Box, Text } from "../../components";
import { IntroSection, RoundedBorderButton } from "../MyProfile/components";
import CompanyCard from "./components/CompanyCard";
import NetWorkComponentTitle from "./components/NetWorkComponentTitle";

interface CareerProfileProps {}
export const companyLogo = require("../../../assets/images/company-logo.png");

export const friends = require("../../../assets/images/small-image.png");
const walls = require("../../../assets/images/wall.png");
const CareerProfile = ({}: CareerProfileProps) => {
  return (
    <Box flex={1} backgroundColor="iconBackground">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box height={10}>
          <Image height={10} source={walls} />
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
        <Box borderWidth={1} borderColor="greyish">
          <NetWorkComponentTitle title="About" onPress={() => {}} />
        </Box>
        <Box paddingVertical="s" paddingHorizontal="s">
          <Text>
            Morbi a suscipit ipsum. Suspendisse mollis libero ante. Pellentesque
            finibus convallis nulla vel placerat. Nulla ipsum dolor sit amet,
            consectetur adipiscing elitut eleifend nisl.
          </Text>
        </Box>
        <Box backgroundColor="mainBackground" height={5} />
        <Box borderWidth={1} borderColor="greyish">
          <NetWorkComponentTitle title="Experience" onPress={() => {}} />
        </Box>

        {[1, 2, 3, 4, 5].map((_, i) => {
          return (
            <Box
              key={i}
              paddingVertical="s"
              paddingHorizontal="s"
              flexDirection="row"
            >
              <Box>
                <Image source={companyLogo} />
              </Box>
              <Box>
                <Text>Designation</Text>
                <Text variant="profileAction">Company Name</Text>
                <Text variant="profileAction">Feb 2019 - Nov 2019 10 moss</Text>
              </Box>
            </Box>
          );
        })}
      </ScrollView>
    </Box>
  );
};

export default CareerProfile;
