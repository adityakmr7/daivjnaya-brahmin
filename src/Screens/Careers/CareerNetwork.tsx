import React, { useEffect, useState } from "react";

import { Box, SearchBox, Text } from "../../components";
import { connect } from "react-redux";
import UserNetWorkCard from "./components/UserNetWorkCard";
import NetWorkComponentTitle from "./components/NetWorkComponentTitle";
import HeaderButton from "./components/HeaderButton";
import { ActivityIndicator, Dimensions } from "react-native";
import { getCareerNetwork } from "../../actions/careerActions";
import { useIsFocused } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import {
  FlatList,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
interface CareerNetworkProps {
  navigation: any;
  careerNetworkAll: any;
  getCareerAll: () => void;
}

const { width: wWidth, height: wHeight } = Dimensions.get("window");
const CareerNetwork = ({
  navigation,
  careerNetworkAll,
  getCareerAll,
}: CareerNetworkProps) => {
  const [searchText, setSearchText] = useState<string>("");
  const handleChangeText = (text: string) => {
    setSearchText(text);
  };
  const isFocused = useIsFocused();
  useEffect(() => {
    getCareerAll();
  }, [isFocused]);
  const {
    careerAllNetworkLoading,
    careerAllNetworkData,
    careerAllNetworkError,
  } = careerNetworkAll;

  const renderItem = ({ item }: { item: any }) => {
    return (
      <TouchableWithoutFeedback onPress={() => {}}>
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
          {/* <Box>
            {item._links.coverImage ? (
              <Image
                style={{ height: 50, width: 50, borderRadius: 25 }}
                source={{ uri: item._links.coverImage.href }}
              />
            ) : null}
          </Box> */}
          <Text>{item.username}</Text>
        </Box>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <Box backgroundColor="mainBackground" flex={1}>
      <Box
        backgroundColor="iconBackground"
        borderColor="mainBackground"
        borderWidth={1}
      >
        <Box
          paddingTop="s"
          marginHorizontal="s"
          flexDirection="row"
          justifyContent="flex-start"
          width={wWidth}
          height={wWidth * 0.2 - 20}
        >
          <HeaderButton
            title="My Network"
            onPress={() => navigation.navigate("MyNetwork")}
          />
        </Box>
        <SearchBox {...{ searchText, handleChangeText }} />
      </Box>
      <Box marginVertical="s" backgroundColor="iconBackground">
        <NetWorkComponentTitle
          numberOfPeople={
            careerAllNetworkData ? careerAllNetworkData.length : 0
          }
          title="Invitation"
          onPress={() => {}}
        />
        {careerAllNetworkLoading ? (
          <Box>
            <ActivityIndicator />
          </Box>
        ) : (
          <Box>
            <FlatList
              data={careerAllNetworkData}
              renderItem={renderItem}
              keyExtractor={(item: any) => item.cvId.toString()}
            />
          </Box>
        )}

        {/* <Box>
          {[1, 2].map((item, i) => {
            return (
              <UserNetWorkCard
                addButton={false}
                key={i}
                {...{ profileImage }}
              />
            );
          })}
        </Box> */}
      </Box>
      {/* <Box backgroundColor="iconBackground">
        <NetWorkComponentTitle title="People You May Know" onPress={() => {}} />
        <Box>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, i) => {
            return (
              <UserNetWorkCard addButton={true} key={i} {...{ profileImage }} />
            );
          })}
        </Box>
      </Box> */}
    </Box>
  );
};

function mapStateToProps(state: any) {
  return {
    careerNetworkAll: state.career,
  };
}

const mapDispatchToProps = (dispatch: any) => ({
  getCareerAll: () => dispatch(getCareerNetwork()),
});
export default connect(mapStateToProps, mapDispatchToProps)(CareerNetwork);
