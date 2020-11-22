import React, { useEffect, useState } from "react";
import {
  FlatList,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { Box, HorizontalCard, SearchBox, Text } from "../../components";
import { connect } from "react-redux";
import { getAllState, filterHubByCityIsActive } from "../../actions/hubActions";
import { ActivityIndicator } from "react-native";

interface CommunityMemberProps {
  navigation: any;
  states: any;
  getAllStates: () => void;
  getFilteredData: (state: string, city: string, isActivated: boolean) => void;

  stateData: any;
}

const CommunityMember = ({
  navigation,
  states,
  getAllStates,
  getFilteredData,
  stateData,
}: CommunityMemberProps) => {
  useEffect(() => {
    getAllStates();
  }, []);
  const { filterByStateData, stateDataLoading } = stateData;
  const [selectedTab, setSelectedTab] = useState("");
  const [searchText, setSearchText] = useState<string>("");

  const handleChangeText = (text: string) => {
    setSearchText(text);
  };

  useEffect(() => {
    if (states.length > 0) {
      setSelectedTab(states[0]);
      getFilteredData(states[0], "", false);
    }
  }, [states, getFilteredData]);
  const handleTabClick = (item: string) => {
    setSelectedTab(item);
    getFilteredData(item, "", false);
  };
  const renderItem = ({ item }: { item: any }) => {
    return (
      <TouchableWithoutFeedback
        key={item}
        onPress={() => handleTabClick(item)}
        style={{
          width: 100,
          marginHorizontal: 5,
          borderBottomColor: selectedTab === item ? "#D4AF37" : "#FFFFFF",
          borderBottomWidth: 3,
        }}
      >
        <Box padding="s">
          <Text
            ellipsizeMode="tail"
            numberOfLines={2}
            textAlign="center"
            variant="mainIconSubTitle"
          >
            {item.toUpperCase()}
          </Text>
        </Box>
      </TouchableWithoutFeedback>
    );
  };

  const renderListItem = ({ item }: { item: any }) => {
    return (
      <HorizontalCard
        key={item.hId}
        onPress={() =>
          navigation.navigate("CommunityHubMemberDetail", { hId: item.hId })
        }
        {...{ item }}
      />
    );
  };
  console.log("filterByStateData", filterByStateData);
  return (
    <Box>
      <Box backgroundColor="iconBackground">
        <FlatList
          horizontal={true}
          data={states}
          keyExtractor={(item) => item}
          renderItem={renderItem}
        />
      </Box>
      <SearchBox handleChangeText={handleChangeText} searchText={searchText} />
      <Box marginVertical="xl">
        {filterByStateData.length > 0 && stateDataLoading === false ? (
          <FlatList
            data={filterByStateData}
            keyExtractor={(item) => item.hId}
            renderItem={renderListItem}
          />
        ) : (
          <Box justifyContent="center" alignItems="center">
            <ActivityIndicator />
          </Box>
        )}
      </Box>
    </Box>
  );
};

function mapStateToProps(state: any) {
  return {
    states: state.hub.allStates,
    stateData: state.hub,
  };
}

const mapDispatchToProps = (dispatch: any) => ({
  getAllStates: () => dispatch(getAllState()),
  getFilteredData: (state: string, city: string, isActivated: boolean) =>
    dispatch(filterHubByCityIsActive(state, city, isActivated)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommunityMember);
