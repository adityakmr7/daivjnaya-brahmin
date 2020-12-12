import React, { useEffect, useState } from "react";
import { ActivityIndicator, Dimensions, Image } from "react-native";
import {
  FlatList,
  RectButton,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { Box, SearchBox, Text } from "../../components";
import CompanyCard from "./components/CompanyCard";
import { connect } from "react-redux";
import { getAllCareerTips, getJob } from "../../actions/careerActions";
import { useIsFocused } from "@react-navigation/native";
import HeaderButton from "./components/HeaderButton";
interface CareerHomeProps {
  getAllCv: () => void;
  career: any;
  getJob: (q: string) => void;
  getAllCareerTips: () => void;
  navigation: any;
}

const { width: wWidth } = Dimensions.get("window");
const CareerHome = ({
  career,
  getJob,
  getAllCareerTips,
  navigation,
}: CareerHomeProps) => {
  const [searchText, setSearchText] = useState<string>("");
  const handleChangeText = (text: string) => {
    setSearchText(text);
  };
  const isFocused = useIsFocused();

  useEffect(() => {
    getJob("");
    getAllCareerTips();
  }, [isFocused, getJob, getAllCareerTips]);

  const {
    jobsLoading,
    jobsAll,
    jobsError,
    tipsLoading,
    tipsAll,
    tipsError,
  } = career;

  const renderItem = ({ item }: { item: any }) => {
    return (
      <Box paddingHorizontal="s">
        <CompanyCard onPress={() => {}} {...{ item }} />
      </Box>
    );
  };
  const renderTips = ({ item }: { item: any }) => {
    return (
      <TouchableWithoutFeedback
        onPress={() =>
          navigation.navigate("CareerTipDetail", {
            nId: item.nId,
          })
        }
        style={{ padding: 5 }}
      >
        <Box width={wWidth / 2 - 15}>
          <Image
            style={{
              borderRadius: 20,
              height: wWidth / 3 - 20,
              width: wWidth / 2 - 20,
            }}
            source={{ uri: item._links.image.href }}
          />
          <Text>{item.title}</Text>
        </Box>
      </TouchableWithoutFeedback>
    );
  };
  return (
    <ScrollView>
      <Box flex={1}>
        <Box
          backgroundColor="iconBackground"
          borderColor="mainBackground"
          borderWidth={1}
          paddingTop="s"
        >
          <Box
            flexDirection="row"
            justifyContent="space-around"
            width={wWidth}
            height={wWidth * 0.2 - 20}
          >
            <HeaderButton
              title="Candidates"
              onPress={() => navigation.navigate("Candidates")}
            />
            <HeaderButton
              title="Jobs"
              onPress={() => navigation.navigate("CareerJobs")}
            />
            <HeaderButton
              title="Talents"
              onPress={() => navigation.navigate("CareerTalents")}
            />
          </Box>
          <SearchBox {...{ searchText, handleChangeText }} />
        </Box>
        <Box backgroundColor="mainBackground" padding="s">
          {jobsLoading ? (
            <Box flex={1} justifyContent="center" alignItems="center">
              <ActivityIndicator />
            </Box>
          ) : (
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              renderItem={renderItem}
              data={jobsAll}
              keyExtractor={(item: any) => item.jpId.toString()}
            />
          )}
        </Box>
        <Box backgroundColor="iconBackground">
          <Box marginVertical="l" marginHorizontal="m">
            <Text variant="silentText" color="primaryText">
              27 New Recommended
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
          {tipsLoading ? (
            <Box>
              <ActivityIndicator />
            </Box>
          ) : (
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={tipsAll}
              renderItem={renderTips}
              keyExtractor={(item: any) => item.nId.toString()}
            />
          )}
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
  getJob: (q: string) => dispatch(getJob(q)),
  getAllCareerTips: () => dispatch(getAllCareerTips()),
});
export default connect(mapStateToProps, mapDispatchToProps)(CareerHome);
