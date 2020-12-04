import { connect } from "react-redux";
import React, { useEffect, useState } from "react";
import { getAllUser } from "../../actions/userActions";
import { Box, Text } from "../../components";
import { FlatList, RectButton } from "react-native-gesture-handler";
import { ActivityIndicator, Dimensions, Image } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { friendListProps } from "./interfaces";
import { useIsFocused } from "@react-navigation/native";

interface AllMembersProps {
  navigation: any;
  userList: any;
  getAllUser: (q: string) => void;
}
const { width: wWidth, height: wHeight } = Dimensions.get("window");

const AllMembers = ({ userList, navigation, getAllUser }: AllMembersProps) => {
  const { allMemberLoading, allMembers, members, allMemberError } = userList;
  const isFocused = useIsFocused();

  React.useEffect(() => {
    getAllUser("");
  }, [isFocused]);
  const [searchText, setSearchText] = useState<string>("");
  const handleChangeText = (text: string) => {
    const formatText = text.toLowerCase();
    setSearchText(formatText);
  };
  useEffect(() => {
    getAllUser(searchText);
  }, [searchText]);
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
          All Members
        </Text>
        {members !== "" ? (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={members}
            renderItem={renderItem}
            keyExtractor={(item: friendListProps) => item.uId.toString()}
          />
        ) : allMemberError !== "" ? (
          <Box>
            <Text>No Users Yet</Text>
          </Box>
        ) : (
          <Box flex={1} justifyContent="center" alignItems="center">
            <ActivityIndicator />
          </Box>
        )}
      </Box>
    </Box>
  );
};
function mapStateToProps(state: any) {
  return {
    userList: state.profile,
  };
}

const mapDispatchToProps = (dispatch: any) => ({
  getAllUser: (q: string) => dispatch(getAllUser(q)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllMembers);
