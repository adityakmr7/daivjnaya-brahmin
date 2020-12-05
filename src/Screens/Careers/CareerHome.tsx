import React, { useEffect, useState } from "react";
import { Dimensions, Image } from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import { Box, NewsSection, SearchBox, Text } from "../../components";
import { Feather as Icon } from "@expo/vector-icons";
import CompanyCard from "./components/CompanyCard";
import { connect } from "react-redux";
import { getCareerCv, getJob } from "../../actions/careerActions";
import { useIsFocused } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
interface CareerHomeProps {
  getAllCv: () => void;
  career: any;
  getJob: (q: string) => void;
}

export const companyLogo = require("../../../assets/images/company-logo.png");
const image = require("../../../assets/images/img-2.png");
const { width: wWidth } = Dimensions.get("window");
const CareerHome = ({ getAllCv, career, getJob }: CareerHomeProps) => {
  const [searchText, setSearchText] = useState<string>("");
  const handleChangeText = (text: string) => {
    setSearchText(text);
  };
  const isFocused = useIsFocused();
  useEffect(() => {
    getAllCv();
    getJob("");
  }, [isFocused]);

  const {
    careerCvLoading,
    careerCvAll,
    careerCvError,
    jobsLoading,
    jobsAll,
    jobsError,
  } = career;
  return (
    <ScrollView>
      <Box flex={1}>
        <Box
          backgroundColor="mainBackground"
          borderColor="mainBackground"
          borderWidth={1}
        >
          <SearchBox {...{ searchText, handleChangeText }} />
        </Box>
        <Box backgroundColor="mainBackground" padding="s">
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            {[1, 2, 3].map((_, i) => (
              <Box key={i} paddingHorizontal="s">
                <CompanyCard onPress={() => {}} {...{ companyLogo }} />
              </Box>
            ))}
          </ScrollView>
        </Box>
        <Box backgroundColor="iconBackground">
          <Box marginVertical="l" marginHorizontal="m">
            <Text variant="silentText" color="primaryText">
              27 New Recommended
            </Text>
            <Text paddingVertical="s" variant="mainIconSubTitle">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Eligendi, facere.
            </Text>
            <Text paddingVertical="s" variant="silentText" color="primaryText">
              15 New jobs from recruiters
            </Text>
            <Text paddingVertical="s" variant="silentText" color="primaryText">
              10 Custom job alerts
            </Text>
          </Box>
        </Box>

        <Box paddingLeft="s">
          <Text paddingVertical="s" color="primaryText" variant="cardSubTitle">
            Career Tips
          </Text>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            {/* {[1, 2, 3].map((item, index) => {
              return (
                // <NewsSection onPress={() => {}} image={image} key={index} />
              );
            })} */}
          </ScrollView>
        </Box>
      </Box>
    </ScrollView>
  );
};
function mapStateToProps(state: any) {
  return {
    career: state.career,
  };
}

const mapDispatchToProps = (dispatch: any) => ({
  getAllCv: () => dispatch(getCareerCv()),
  getJob: (q: string) => dispatch(getJob(q)),
});
export default connect(mapStateToProps, mapDispatchToProps)(CareerHome);
