import React, { useState } from "react";
import { Dimensions, Image } from "react-native";
import { Box, SearchBox, Text } from "../../components";
import {
  AppRoutes,
  StackNavigationProps,
} from "../../components/NavigationRoutes";
import { Feather as Icon } from "@expo/vector-icons";
// import { friends } from "./MyProfile";
import { getAllFriends } from "../../actions/friendsActions";
import { connect } from "react-redux";
import { RouteProp } from "@react-navigation/native";
import { friendListProps, userProfileProps } from "./interfaces";
import { FlatList } from "react-native-gesture-handler";

const { width: wWidth, height: wHeight } = Dimensions.get("window");
interface SeeAllFriendsProps {
  navigation: StackNavigationProps<"FriendList">;
  route: RouteProp<AppRoutes, "FriendList">;
  allFriends: () => void;
  friendList: {
    allFriendList: { _embedded: { userResourceList: [friendListProps] } };
    loading: boolean;
    error: string;
  };
}
const SeeAllFriends = ({
  navigation,
  route,
  allFriends,
  friendList,
}: SeeAllFriendsProps) => {
  const { username } = route.params;
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: username ? username : "",
    });
  }, [navigation]);

  React.useEffect(() => {
    allFriends();
  }, []);

  const { loading: friendLoading, allFriendList, error } = friendList;
  const { _embedded } = allFriendList;

  const [searchText, setSearchText] = useState<string>("");
  const handleChangeText = (text: string) => {
    console.log(text);
  };

  const renderItem = ({ item }: { item: friendListProps }) => {
    return (
      <Box
        marginVertical="m"
        flexDirection="row"
        justifyContent="space-between"
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
            <Text fontSize={10} variant="silentText">
              5 mutual Friends
            </Text>
          </Box>
        </Box>
        <Box>
          <Icon size={26} name="more-horizontal" />
        </Box>
      </Box>
    );
  };

  return (
    <Box flex={1}>
      <SearchBox {...{ searchText, handleChangeText }} />
      <Box marginHorizontal="l" marginVertical="l">
        <Text variant="silentText" color="primaryText">
          {`${_embedded ? _embedded.userResourceList.length : 0} Friends`}
        </Text>
        {_embedded && _embedded.userResourceList ? (
          <FlatList
            style={{ marginBottom: 30 }}
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

export default connect(mapStateToProps, mapDispatchToProps)(SeeAllFriends);
