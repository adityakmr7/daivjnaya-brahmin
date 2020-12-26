import { useIsFocused } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Dimensions, Image, StyleSheet } from "react-native";
import {
  FlatList,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { connect } from "react-redux";
import { getCareerCv } from "../../actions/careerActions";
import { Box, SearchBox, Text } from "../../components";

const { width: wWidth, height: wHeight } = Dimensions.get("window");
interface CareerCandidatesProps {
  getAllCv: () => void;
  career: {
    careerCvLoading: any;
    careerCvAll: any;
    careerCvError: any;
  };
  navigation: any;
}

const CareerCandidates = ({
  getAllCv,
  career,
  navigation,
}: CareerCandidatesProps) => {
  const [searchText, setSearchText] = useState<string>("");
  const handleChangeText = (text: string) => {
    setSearchText(text);
  };
  const isFocused = useIsFocused();

  useEffect(() => {
    getAllCv();
  }, [getAllCv]);
  const { careerCvLoading, careerCvAll, careerCvError } = career;

  const renderCvItem = ({ item }: { item: any }) => {
    return (
      <TouchableWithoutFeedback
        onPress={() =>
          navigation.navigate("CandidateProfile", {
            userId: item.cvId,
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
            {item._links && item._links.profilePic ? (
              <Image
                style={{ height: 50, width: 50, borderRadius: 25 }}
                source={{ uri: item._links.profilePic.href }}
              />
            ) : null}
          </Box>
          <Box paddingHorizontal="s">
            {item && item.fullName ? (
              <Text fontSize={14}>{item.fullName}</Text>
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
        <Box>
          {careerCvLoading ? (
            <Box flex={1} justifyContent="center" alignItems="center">
              <ActivityIndicator />
            </Box>
          ) : (
            <FlatList
              data={careerCvAll}
              renderItem={renderCvItem}
              keyExtractor={(item: any) => item.cvId.toString()}
            />
          )}
        </Box>
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
  getAllCv: () => dispatch(getCareerCv()),
});
export default connect(mapStateToProps, mapDispatchToProps)(CareerCandidates);
