import React, { useEffect, useState } from "react";
import {
  FlatList,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { Box, SearchBox, Text } from "../../components";
import { connect } from "react-redux";
import { getAllState } from "../../actions/hubActions";

interface CommunityMemberProps {
  states: any;
  getAllStates: () => void;
}

const CommunityMember = ({ states, getAllStates }: CommunityMemberProps) => {
  useEffect(() => {
    getAllStates();
  }, []);
  const [selectedTab, setSelectedTab] = useState("");
  const [searchText, setSearchText] = useState<string>("");
  const handleChangeText = (text: string) => {
    setSearchText(text);
  };

  useEffect(() => {
    if (states.length > 0) {
      setSelectedTab(states[0]);
    }
  }, []);
  const handleTabClick = (item: string) => {
    setSelectedTab(item);
  };
  const renderItem = ({ item }: { item: any }) => {
    return (
      <TouchableWithoutFeedback
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
    </Box>
  );
};

function mapStateToProps(state: any) {
  return {
    states: state.hub.allStates,
  };
}

const mapDispatchToProps = (dispatch: any) => ({
  getAllStates: () => dispatch(getAllState()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommunityMember);
