import React, { useState } from "react";
import { RectButton, TextInput } from "react-native-gesture-handler";
import { Box, Text } from "../../components";
import { StackNavigationProps } from "../../components/NavigationRoutes";
import { Feather as Icon } from "@expo/vector-icons";
const NewsEvents = ({ navigation }: StackNavigationProps<"NewsEvent">) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "News & Events",
    });
  }, [navigation]);

  const [searchText, setSearchText] = useState<string>("");
  const handleChangeText = (text: string) => {
    setSearchText(text);
  };
  return (
    <>
      <Box
        elevation={1}
        paddingHorizontal="l"
        flexDirection="row"
        alignItems="center"
        height={50}
        backgroundColor="iconBackground"
      >
        <RectButton style={{ paddingRight: 20 }}>
          <Text variant="mainIconSubTitle">News</Text>
        </RectButton>
        <RectButton style={{ paddingRight: 20 }}>
          <Text variant="mainIconSubTitle">Events</Text>
        </RectButton>
        <RectButton style={{ paddingRight: 20 }}>
          <Text variant="mainIconSubTitle">Upcoming</Text>
        </RectButton>
      </Box>
      <Box justifyContent="center" height={40} backgroundColor="iconBackground">
        <Box paddingHorizontal="s" flexDirection="row">
          <Box paddingRight="s">
            <Icon name="search" size={26} />
          </Box>
          <Box>
            <TextInput
              value={searchText}
              onChangeText={handleChangeText}
              placeholder="Search..."
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default NewsEvents;
