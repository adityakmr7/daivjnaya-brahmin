import { connect } from "react-redux";
import React, { useEffect, useState } from "react";
import { getAllFriends } from "../../actions/friendsActions";
import { useIsFocused } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import { Box, Text } from "../../components";
import { RectButton } from "react-native-gesture-handler";
import { ActivityIndicator, Dimensions, Image } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { friendListProps } from "./interfaces";

interface AllFriendProps {
  allFriends: () => void;
  navigation: any;
  friendList: any;
}
const { width: wWidth, height: wHeight } = Dimensions.get("window");

const AllFriend = ({ allFriends, navigation, friendList }: AllFriendProps) => {
  const { loading: friendLoading, allFriendList, error } = friendList;
  const { _embedded } = allFriendList;
  const isFocused = useIsFocused();

  React.useEffect(() => {
    allFriends();
  }, [isFocused]);

  const renderItem = ({ item }: { item: any }) => {
    return (
      <RectButton
        onPress={() =>
          navigation.navigate("UserDetail", {
            id: item.uId,
          })
        }
      >
        <Box
          borderColor="greyish"
          padding="m"
          borderWidth={0.5}
          marginVertical="m"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box flexDirection="row" alignItems="center">
            {item._links ? (
              <Image
                style={{
                  width: wWidth / 6,
                  height: wWidth / 6,
                  borderRadius: wWidth / 12,
                }}
                source={{ uri: item._links.profilePic.href }}
              />
            ) : null}
            <Box paddingHorizontal="s">
              <Text variant="sectionTitle">
                {item.firstName} {item.lastName}
              </Text>
              {/* <Text fontSize={10} variant="silentText">
                5 mutual Friends
              </Text> */}
            </Box>
          </Box>
          <Box>
            <Icon size={26} name="more-horizontal" />
          </Box>
        </Box>
      </RectButton>
    );
  };
  return (
    <Box flex={1}>
      <Box marginHorizontal="l" marginVertical="l">
        <Text variant="silentText" color="primaryText">
          {`${_embedded ? _embedded.userResourceList.length : 0} Friends`}
        </Text>
        {_embedded && _embedded.userResourceList ? (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={_embedded.userResourceList}
            renderItem={renderItem}
            keyExtractor={(item: friendListProps) => item.uId.toString()}
          />
        ) : (
          <Box>
            <Text>No Friends Yet</Text>
          </Box>
        )}
      </Box>
    </Box>
  );
};
function mapStateToProps(state: any) {
  return {
    friendList: state.friend,
  };
}

const mapDispatchToProps = (dispatch: any) => ({
  allFriends: () => dispatch(getAllFriends()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllFriend);
