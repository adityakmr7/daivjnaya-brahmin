import { connect } from "react-redux";
import React, { useEffect, useState } from "react";
import { Feather as Icon } from "@expo/vector-icons";

import { FlatList, ScrollView } from "react-native-gesture-handler";
import {
  getCareerNetworkInvitation,
  getCareerNetworkInvited,
} from "../../actions/careerActions";
import { StyleSheet } from "react-native";
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
        <Box
          paddingVertical="s"
          alignItems="center"
          justifyContent="space-around"
          flexDirection="row"
          style={{
            borderWidth: StyleSheet.hairlineWidth,
            borderColor: "#0000001A",
          }}
        >
          {/* <Box> */}
          {/* {item._links ? 
        <Image
          style={{ height: 50, width: 50, borderRadius: 25 }}
          source={{uri: item._links}}
        />
: null} */}
          {/* </Box> */}
          <Box>
            {item && item.fromUsername ? (
              <Text fontSize={14}>
                <Text>{item.fromUsername}</Text>
              </Text>
            ) : null}
          </Box>
          <Box flexDirection="row">
            <>
              <Box borderRadius="l" borderWidth={1} borderColor="grey">
                <Icon name="x" size={20} color="red" />
              </Box>
              <Box width={10} />
              <Box borderRadius="l" borderWidth={1} borderColor="grey">
                <Icon name="check" size={20} color="green" />
              </Box>
            </>
          </Box>
        </Box>
      </Box>
    );
  };
  const renderInvited = ({ item }: { item: any }) => {
    return (
      <Box>
        <Box
          paddingVertical="s"
          alignItems="center"
          justifyContent="space-around"
          flexDirection="row"
          style={{
            borderWidth: StyleSheet.hairlineWidth,
            borderColor: "#0000001A",
          }}
        >
          {/* <Box> */}
          {/* {item._links ? 
        <Image
          style={{ height: 50, width: 50, borderRadius: 25 }}
          source={{uri: item._links}}
        />
: null} */}
          {/* </Box> */}
          <Box>
            {item && item.fromUsername ? (
              <Text fontSize={14}>
                <Text>{item.fromUsername}</Text>
              </Text>
            ) : null}
          </Box>
          <Box flexDirection="row">
            <>
              <Box borderRadius="l" borderWidth={1} borderColor="grey">
                <Icon name="x" size={20} color="red" />
              </Box>
              <Box width={10} />
              <Box borderRadius="l" borderWidth={1} borderColor="grey">
                <Icon name="check" size={20} color="green" />
              </Box>
            </>
          </Box>
        </Box>
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
