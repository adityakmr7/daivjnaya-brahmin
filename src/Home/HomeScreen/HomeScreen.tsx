import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Box, Text } from "../../components";
import MainCard from "./MainCard";
import { Dimensions, Image } from "react-native";
import SectionHeader from "./components/SectionHeader";
import IconNavigator from "./components/IconNavigator";
import NewsSection from "./components/NewsSection";

const { width: wWidth, height: wHeight } = Dimensions.get("window");
interface HomeProps {}

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
const HomeScreen = ({}: HomeProps) => {
  return (
    <Box flex={1} backgroundColor="mainBackground">
      <ScrollView>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          {Images.map((data, index) => {
            return <MainCard {...data} key={index} />;
          })}
        </ScrollView>
        <SectionHeader title={"explore"} />
        <Box
          flexDirection="row"
          paddingVertical="s"
          width={wWidth - 40}
          marginHorizontal="l"
          justifyContent="space-between"
        >
          <IconNavigator subtitle="My Profile" />
          <IconNavigator subtitle="Daivajnya Samaj…" />
          <IconNavigator subtitle="Matrimony" />
        </Box>
        <Box
          flexDirection="row"
          paddingVertical="s"
          width={wWidth - 40}
          marginHorizontal="l"
          justifyContent="space-between"
        >
          <IconNavigator subtitle="B2B" />
          <IconNavigator subtitle="Jewellery Market" />
          <IconNavigator subtitle="Careers & Talents" />
        </Box>
        <SectionHeader title={"Upcoming News & Events"} />
        <Box
          paddingVertical="l"
          width={wWidth - 40}
          marginLeft="l"
          justifyContent="space-between"
        >
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            {[1, 2, 3].map((item, index) => {
              return <NewsSection key={index} />;
            })}
          </ScrollView>
        </Box>

        <SectionHeader title={"Current Gold Silver Price"} />
      </ScrollView>
    </Box>
  );
};

export default HomeScreen;
