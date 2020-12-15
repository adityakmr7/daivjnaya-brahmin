import { connect } from "react-redux";
import React, { useEffect, useState } from "react";

import { FlatList, ScrollView } from "react-native-gesture-handler";
import {
  getCareerNetworkInvitation,
  getCareerNetworkInvited,
} from "../../actions/careerActions";
import { Box, SearchBox, Text } from "../../components";
import UserNetWorkCard from "./components/UserNetWorkCard";
import NetWorkComponentTitle from "./components/NetWorkComponentTitle";
import { ActivityIndicator } from "react-native";
const profileImage = require("../../../assets/images/small-image.png");

interface MyNetworkProps {
  getAllInvites: () => void;
  getAllInvited: () => void;
  networkInvites: any;
}
const MyNetwork = ({
  getAllInvited,
  getAllInvites,
  networkInvites,
}: MyNetworkProps) => {
  const [searchText, setSearchText] = useState<string>("");
  const handleChangeText = (text: string) => {
    setSearchText(text);
  };

  useEffect(() => {
    getAllInvited();
    getAllInvites();
  }, []);
  const {
    careerInvitesLoading,
    careerInvitesData,
    careerInvitesError,
    careerNetworkInvitedLoading,
    careerNetworkInvitedData,
    careerNetworkInvitedError,
  } = networkInvites;

  const renderInvites = ({ item }: { item: any }) => {
    return (
      <Box>
        <Text>{item.fromUsername}</Text>
      </Box>
    );
  };
  const renderInvited = ({ item }: { item: any }) => {
    return (
      <Box>
        <Text>{item.fromUsername}</Text>
      </Box>
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
        <NetWorkComponentTitle
          numberOfPeople={careerInvitesData ? careerInvitesData.length : 0}
          title="Invitation"
          onPress={() => {}}
        />
        <Box>
          {careerInvitesLoading ? (
            <Box>
              <ActivityIndicator />
            </Box>
          ) : (
            <FlatList
              data={careerInvitesData}
              keyExtractor={(item: any) => item.niId.toString()}
              renderItem={renderInvites}
            />
          )}
        </Box>
        <NetWorkComponentTitle
          numberOfPeople={
            careerNetworkInvitedData ? careerNetworkInvitedData.length : 0
          }
          title="Invited"
          onPress={() => {}}
        />
        <Box>
          {careerNetworkInvitedLoading ? (
            <Box>
              <ActivityIndicator />
            </Box>
          ) : (
            <FlatList
              data={careerNetworkInvitedData}
              keyExtractor={(item: any) => item.niId.toString()}
              renderItem={renderInvited}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
};
function mapStateToProps(state: any) {
  return {
    networkInvites: state.career,
  };
}

const mapDispatchToProps = (dispatch: any) => ({
  getAllInvited: () => dispatch(getCareerNetworkInvited()),
  getAllInvites: () => dispatch(getCareerNetworkInvitation()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyNetwork);
