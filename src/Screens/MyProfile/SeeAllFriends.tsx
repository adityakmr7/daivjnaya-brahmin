import React, { useState } from "react";
import { Dimensions, Image } from "react-native";
import { Box, SearchBox, Text } from "../../components";
import { StackNavigationProps } from "../../components/NavigationRoutes";
import { Feather as Icon } from "@expo/vector-icons";
import { friends } from "./MyProfile";

const { width: wWidth, height: wHeight } = Dimensions.get("window");
const SeeAllFriends = ({
  navigation,
  route,
}: StackNavigationProps<"FriendList">) => {
  const { username } = route.params;
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: username ? username : "",
    });
  }, [navigation]);

  const [searchText, setSearchText] = useState<string>("");
  const handleChangeText = (text: string) => {
    console.log(text);
  };
  return (
    <Box flex={1}>
      <SearchBox {...{ searchText, handleChangeText }} />
      <Box marginHorizontal="l" marginVertical="l">
        <Text variant="silentText" color="primaryText">
          201 Friends
        </Text>
        {friends.map((friend, i) => {
          return (
            <Box
              key={i}
              marginVertical="m"
              flexDirection="row"
              justifyContent="space-between"
            >
              <Box flexDirection="row" alignItems="center">
                <Image
                  style={{
                    width: wWidth / 6,
                    height: wWidth / 6,
                    borderRadius: wWidth / 12,
                  }}
                  source={friend.src}
                />
                <Box paddingHorizontal="s">
                  <Text variant="sectionTitle">Full Name</Text>
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
        })}
      </Box>
    </Box>
  );
};

export default SeeAllFriends;
