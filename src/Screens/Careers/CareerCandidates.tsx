import { useIsFocused } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { getCareerCv } from "../../actions/careerActions";
import { Box, SearchBox, Text } from "../../components";
import UserNetWorkCard from "./components/UserNetWorkCard";

interface CareerCandidatesProps {
  getAllCv: () => void;
  career: {
    careerCvLoading: any;
    careerCvAll: any;
    careerCvError: any;
  };
}
const profileImage = require("../../../assets/images/small-image.png");

const renderCvItem = ({ item }: any) => {
  return (
    <UserNetWorkCard
      chat={false}
      day={"wed"}
      addButton={false}
      key={item.cvId}
      {...{ profileImage, item }}
    />
  );
};

const CareerCandidates = ({ getAllCv, career }: CareerCandidatesProps) => {
  const [searchText, setSearchText] = useState<string>("");
  const handleChangeText = (text: string) => {
    setSearchText(text);
  };
  const isFocused = useIsFocused();

  useEffect(() => {
    getAllCv();
  }, [isFocused]);
  const { careerCvLoading, careerCvAll, careerCvError } = career;
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
