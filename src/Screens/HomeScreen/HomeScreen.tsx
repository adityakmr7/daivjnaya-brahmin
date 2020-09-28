import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Box, NewsSection, Text } from "../../components";
import MainCard from "./MainCard";
import { Dimensions, Image } from "react-native";
import SectionHeader from "./components/SectionHeader";
import IconNavigator from "./components/IconNavigator";
import { StackNavigationProps } from "../../components/NavigationRoutes";

const { width: wWidth, height: wHeight } = Dimensions.get("window");
const Images = [
  {
    id: 1,
    title: "Ganesh Chaturthi",
    subTitle: "Some Caption",
    subText: "Lorem ipsum dolor sit amet, \n elit, sed do eiusmod…",
    image: require("../../../assets/images/img-1.png"),
    color: ["#73034C", "#270047"],
  },
  {
    id: 2,
    title: "Ganesh Chaturthi",
    subTitle: "Some Caption",
    subText: "Lorem ipsum dolor sit amet, \n elit, sed do eiusmod…",
    image: require("../../../assets/images/img-1.png"),
    color: ["#16C88B", "#0E8BCA"],
  },
  {
    id: 3,
    title: "Ganesh Chaturthi",
    subTitle: "Some Caption",
    subText: "Lorem ipsum dolor sit amet, \n elit, sed do eiusmod…",
    image: require("../../../assets/images/img-1.png"),
    color: ["#6C59D3", "#270047"],
  },
];

export const headerAssets = Images.map((img) => img.image);
export const iconAssets = [
  require("../assets/briefcase.png"),
  require("../assets/dna.png"),
  require("../assets/jwel.png"),
  require("../assets/meet.png"),
  require("../assets/profile.png"),
  require("../assets/shake.png"),
  require("../assets/sun.png"),
];
const image = require("../../../assets/images/img-2.png");

const HomeScreen = ({ navigation }: StackNavigationProps<"Home">) => {
  return (
    <Box flex={1} backgroundColor="mainBackground">
      <ScrollView showsVerticalScrollIndicator={false}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          {Images.map((data, index) => {
            return <MainCard {...data} key={index} />;
          })}
        </ScrollView>
        <SectionHeader
          title={"explore"}
          onPress={() => console.log("Explore")}
        />
        <Box
          flexDirection="row"
          paddingVertical="s"
          width={wWidth - 40}
          marginHorizontal="l"
          justifyContent="space-between"
        >
          <IconNavigator
            onPress={() => navigation.navigate("MyProfile")}
            image={require("../assets/profile.png")}
            subtitle="My Profile"
          />
          <IconNavigator
            onPress={() => navigation.navigate("CommunityStack")}
            image={require("../assets/dna.png")}
            subtitle="Daivajnya Samaj…"
          />
          <IconNavigator
            onPress={() => navigation.navigate("Matrimony")}
            image={require("../assets/meet.png")}
            subtitle="Matrimony"
          />
        </Box>
        <Box
          flexDirection="row"
          paddingVertical="s"
          width={wWidth - 40}
          marginHorizontal="l"
          justifyContent="space-between"
        >
          <IconNavigator
            onPress={() => console.log("Icon Button Clicked")}
            image={require("../assets/shake.png")}
            subtitle="B2B"
          />
          <IconNavigator
            onPress={() => console.log("Icon Button Clicked")}
            image={require("../assets/jwel.png")}
            subtitle="Jewellery Mar.."
          />
          <IconNavigator
            onPress={() => console.log("Icon Button Clicked")}
            image={require("../assets/briefcase.png")}
            subtitle="Careers & Tal.."
          />
        </Box>
        <SectionHeader
          onPress={() => navigation.navigate("NewsEvent")}
          title={"Upcoming News & Events"}
        />
        <Box paddingVertical="l" width={wWidth - 40} marginLeft="l">
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            {[1, 2, 3].map((item, index) => {
              return <NewsSection image={image} key={index} />;
            })}
          </ScrollView>
        </Box>

        <SectionHeader
          onPress={() => console.log("Current Gold")}
          title={"Current Gold Silver Price"}
        />
        {/* // ? Current Gold Silver Price Section */}
        <Box paddingVertical="l" width={wWidth - 40} marginLeft="l">
          <Box
            paddingHorizontal="m"
            borderRadius="m"
            height={120}
            backgroundColor={"iconBackground"}
          >
            <Box
              flexDirection="row"
              paddingVertical="s"
              justifyContent="space-between"
            >
              <Box>
                <Text variant="mainIconSubTitle">
                  10g of 24k gold (99.9): 31,800 INR
                </Text>
                <Text>Hyderabad, 1 Jun 2018</Text>
              </Box>
              <Box>
                <Text>-0.9%</Text>
              </Box>
            </Box>
            <Box width={wWidth - 80} height={2} backgroundColor="grey" />
            <Box paddingVertical="s" justifyContent="flex-start">
              <Box flexDirection="row" justifyContent="space-between">
                <Box>
                  <Text variant="mainIconSubTitle">
                    10g of 24k gold (99.9): 31,800 INR
                  </Text>
                  <Text>Hyderabad, 1 Jun 2018</Text>
                </Box>
                <Box>
                  <Text>-0.9%</Text>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box padding="l">
          <Box>
            <Text variant="silentText">1 Month free subscribe</Text>
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default HomeScreen;
