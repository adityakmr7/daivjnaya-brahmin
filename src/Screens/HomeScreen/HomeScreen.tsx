import React from "react";
import {
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { Box, NewsSection, Text } from "../../components";
import MainCard from "./MainCard";
import { Dimensions, Image } from "react-native";
import SectionHeader from "./components/SectionHeader";
import IconNavigator from "./components/IconNavigator";
import { StackNavigationProps } from "../../components/NavigationRoutes";
import NewsAndEventsSection from "./components/NewsAndEventsSection";

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
  require("../../../assets/images/briefcase.png"),
  require("../../../assets/images/dna.png"),
  require("../../../assets/images/jwel.png"),
  require("../../../assets/images/meet.png"),
  require("../../../assets/images/profile.png"),
  require("../../../assets/images/shake.png"),
  require("../../../assets/images/sun.png"),
];

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
            image={require("../../../assets/images/profile.png")}
            subtitle="My Profile"
          />
          <IconNavigator
            onPress={() => navigation.navigate("CommunityStack")}
            image={require("../../../assets/images/dna.png")}
            subtitle="Daivajnya Samaj"
          />
          <IconNavigator
            onPress={() => navigation.navigate("Matrimony")}
            image={require("../../../assets/images/meet.png")}
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
            onPress={() => navigation.navigate("B2b")}
            image={require("../../../assets/images/shake.png")}
            subtitle="B2B"
          />
          <IconNavigator
            onPress={() => navigation.navigate("Jewellery")}
            image={require("../../../assets/images/jwel.png")}
            subtitle="Jewellery Market"
          />
          <IconNavigator
            onPress={() => navigation.navigate("Careers")}
            image={require("../../../assets/images/briefcase.png")}
            subtitle="Careers & Talent"
          />
        </Box>
        <SectionHeader
          onPress={() => navigation.navigate("NewsEvent")}
          title={"Upcoming News & Events"}
        />
        <Box paddingVertical="l" width={wWidth - 40} marginLeft="l">
          <NewsAndEventsSection {...{ navigation }} />
        </Box>

        <SectionHeader
          onPress={() => navigation.navigate("Pricing")}
          title={"Current Gold Silver Price"}
        />
        {/* // ? Current Gold Silver Price Section */}
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("Pricing")}
        >
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
        </TouchableWithoutFeedback>

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
