import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Box, NewsSection, Text } from "../../components";
import MainCard from "./MainCard";
import { Dimensions, Image } from "react-native";
import SectionHeader from "./components/SectionHeader";
import IconNavigator from "./components/IconNavigator";
import { AppRoutes } from "../../components/NavigationRoutes";
import NewsAndEventsSection from "./components/NewsAndEventsSection";
import { connect } from "react-redux";
import { getAllNews } from "../../actions/newsActions";
import { StackNavigationProp } from "@react-navigation/stack";
import restServices from "../../services/restServices";
import { getAllBanner } from "../../actions/bannerActions";
import { useIsFocused } from "@react-navigation/native";
import metalPriceServices from "../../services/metalPriceServices";
import Notification from "../../Notification/Notification";
const { width: wWidth, height: wHeight } = Dimensions.get("window");

export const iconAssets = [
  require("../../../assets/images/briefcase.png"),
  require("../../../assets/images/dna.png"),
  require("../../../assets/images/jwel.png"),
  require("../../../assets/images/meet.png"),
  require("../../../assets/images/profile.png"),
  require("../../../assets/images/shake.png"),
  require("../../../assets/images/sun.png"),
];

interface HomeScreenProps {
  navigation: StackNavigationProp<AppRoutes, "Home">;
  banner: any;
  getBanner: () => void;
  getNews: () => void;
  news: any;
}

const HomeScreen = ({
  navigation,
  banner,
  getBanner,
  getNews,
  news,
}: HomeScreenProps) => {
  const [metalData, setMetalData] = useState<any>("");
  const isFocused = useIsFocused();
  useEffect(() => {
    (async function get() {
      const _rest = new restServices();
      const token = await _rest.getAccessToken();
      if (token) {
        getBanner();
        getNews();
        getMetals();
      }
    })();
  }, [isFocused, getBanner, getNews]);

  const { bannerData } = banner;
  const { bannerResourceList } = bannerData;
  const { loading, news: newsList } = news;

  const getMetals = async () => {
    const _metal = new metalPriceServices();
    const metalDataApi = await _metal.getPrice();
    if (metalDataApi) {
      setMetalData(metalDataApi.data);
    }
  };

  return (
    <Box flex={1} backgroundColor="mainBackground">
      <Notification />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          {bannerResourceList &&
            bannerResourceList.map((data: any, index: number) => {
              return <MainCard data={data} key={index} />;
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
            subtitle="Daivajnya"
            subtitle2="Samaj"
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
            subtitle="Jewellery"
            subtitle2="Market"
          />
          <IconNavigator 
            onPress={() => navigation.navigate("Careers")}
            image={require("../../../assets/images/briefcase.png")}
            subtitle="Careers &"
            subtitle2="Talent"
          />
        </Box>
        <SectionHeader
          onPress={() => navigation.navigate("NewsEvent")}
          title={"Upcoming News & Events"}
        />
        <Box paddingVertical="l" width={wWidth - 40} marginLeft="l">
          <NewsAndEventsSection
            news={newsList}
            loading={loading}
            {...{ navigation }}
          />
        </Box>

        <SectionHeader
          // onPress={() => navigation.navigate("Pricing")}
          onPress={() => {}}
          title={"Current Gold Silver Price"}
        />
        {/* // ? Current Gold Silver Price Section */}
        {metalData !== "" ? (
          // <TouchableWithoutFeedback
          //   onPress={() => navigation.navigate("Pricing")}
          // >
          <Box paddingVertical="l" width={wWidth - 40} marginLeft="l">
            <Box
              paddingHorizontal="m"
              borderRadius="m"
              height={140}
              backgroundColor={"iconBackground"}
            >
              <Box
                flexDirection="row"
                paddingVertical="s"
                justifyContent="space-between"
              >
                <Box>
                  <Text variant="mainIconSubTitle">
                    1 {metalData.unit} of 24k gold (99.9):{" "}
                    {metalData.rates ? metalData.rates.XAU.toFixed(2) : ""}{" "}
                    {metalData.base};
                  </Text>
                  <Text>Hyderabad, {metalData.date}</Text>
                </Box>
                {/* <Box>
                    <Text>-0.9%</Text>
                  </Box> */}
              </Box>
              <Box width={wWidth - 80} height={2} backgroundColor="grey" />
              <Box paddingVertical="s" justifyContent="flex-start">
                <Box flexDirection="row" justifyContent="space-between">
                  <Box>
                    <Text variant="mainIconSubTitle">
                      1 {metalData.unit} of 24k silver (99.9):{" "}
                      {metalData.rates ? metalData.rates.XAG.toFixed(2) : ""}{" "}
                      {metalData.base};
                    </Text>
                    <Text>Hyderabad, {metalData.date}</Text>
                  </Box>
                  {/* <Box>
                      <Text>-0.9%</Text>
                    </Box> */}
                </Box>
              </Box>
            </Box>
          </Box>
        ) : // </TouchableWithoutFeedback>
        null}
        <Box padding="l">
          <Box>
            {/* <Text variant="silentText">1 Month free subscribe</Text> */}
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
};

function mapStateToProps(state: any) {
  return {
    banner: state.banner,
    news: state.news,
  };
}

const mapDispatchToProps = (dispatch: any) => ({
  getBanner: () => dispatch(getAllBanner()),
  getNews: () => dispatch(getAllNews()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
