import React, { useEffect, useState } from "react";
import { ActivityIndicator, Dimensions, Image, StyleSheet } from "react-native";
import {
  FlatList,
  FlingGestureHandler,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { connect } from "react-redux";
import { getCareerTalent } from "../../actions/careerActions";
import { Box, SearchBox, Text } from "../../components";
import UserNetWorkCard from "./components/UserNetWorkCard";

interface CareerTalentsProps {
  getCareer: () => void;
  career: any;
  navigation: any;
}
const { width: wWidth, height: wHeight } = Dimensions.get("window");

const CareerTalents = ({
  getCareer,
  career,
  navigation,
}: CareerTalentsProps) => {
  const [searchText, setSearchText] = useState<string>("");
  const handleChangeText = (text: string) => {
    setSearchText(text);
  };
  useEffect(() => {
    getCareer();
  }, []);
  const { talentLoading, talentAll, talentError } = career;

  const renderItem = ({ item }: { item: any }) => {
    return (
      <TouchableWithoutFeedback
        onPress={() =>
          navigation.navigate("CareerProfile", {
            userId: item.tId,
          })
        }
      >
        {/* // Will Navigate to profile */}
        <Box
          paddingVertical="s"
          alignItems="center"
          marginHorizontal="s"
          // justifyContent="space-around"
          flexDirection="row"
          style={{
            height: wWidth * 0.2,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderWidth: StyleSheet.hairlineWidth,
            borderColor: "#0000001A",
          }}
        >
          <Box>
            {item._links.coverImage ? (
              <Image
                style={{ height: 50, width: 50, borderRadius: 25 }}
                source={{ uri: item._links.coverImage.href }}
              />
            ) : null}
          </Box>
          <Box paddingHorizontal="s">
            {item && item.title ? (
              <Text fontSize={14}>{item.title}</Text>
            ) : null}
          </Box>
        </Box>
      </TouchableWithoutFeedback>
    );
  };
  return (
    <Box flex={1}>
      <Box
        backgroundColor="mainBackground"
        borderColor="mainBackground"
        borderWidth={1}
      >
        <SearchBox {...{ searchText, handleChangeText }} />
      </Box>
      <Box marginVertical="s" backgroundColor="iconBackground">
        {talentLoading ? (
          <Box flex={1} justifyContent="center" alignItems="center">
            <ActivityIndicator />
          </Box>
        ) : (
          <Box>
            <FlatList
              data={talentAll}
              renderItem={renderItem}
              keyExtractor={(item: any) => item.tId.toString()}
            />
            {/* <ScrollView>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, i) => {
              return (
                <UserNetWorkCard
                  chat={true}
                  day={"wed"}
                  addButton={false}
                  key={i}
                  {...{ profileImage }}
                />
              );
            })}
          </ScrollView> */}
          </Box>
        )}
      </Box>
    </Box>
  );
};

function mapStateToProps(state: any) {
  return {
    career: state.career,
  };
}

const mapDispatchToProps = (dispatch: any) => ({
  getCareer: () => dispatch(getCareerTalent()),
});
export default connect(mapStateToProps, mapDispatchToProps)(CareerTalents);
