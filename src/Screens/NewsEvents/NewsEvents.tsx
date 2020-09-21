import React, { useEffect, useReducer, useState } from "react";
import { RectButton, TextInput } from "react-native-gesture-handler";
import { Box, Text } from "../../components";
import { StackNavigationProps } from "../../components/NavigationRoutes";
import { Feather as Icon } from "@expo/vector-icons";

const initialState = {
  news: true,
  events: false,
  upcoming: false,
};

function reducer(state, action) {
  switch (action) {
    case "NEWS":
      return {
        ...state,
        news: true,
        events: false,
        upcoming: false,
      };
    case "EVENT":
      return {
        ...state,
        news: false,
        events: true,
        upcoming: false,
      };
    case "UPCOMING":
      return {
        ...state,
        news: false,
        events: false,
        upcoming: true,
      };
    default:
      return state;
  }
}

const NewsEvents = ({ navigation }: StackNavigationProps<"NewsEvent">) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "News & Events",
    });
  }, [navigation]);
  const [state, dispatch] = useReducer(reducer, initialState);

  const [searchText, setSearchText] = useState<string>("");
  const handleChangeText = (text: string) => {
    setSearchText(text);
  };
  console.log(state);
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
        <RectButton
          onPress={() => dispatch("NEWS")}
          style={{ paddingRight: 20 }}
        >
          <Text variant="mainIconSubTitle">News</Text>
        </RectButton>
        <RectButton
          onPress={() => dispatch("EVENT")}
          style={{ paddingRight: 20 }}
        >
          <Text variant="mainIconSubTitle">Events</Text>
        </RectButton>
        <RectButton
          onPress={() => dispatch("UPCOMING")}
          style={{ paddingRight: 20 }}
        >
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
      {state.news === true ? (
        <Box>
          <Text>News</Text>
        </Box>
      ) : null}
      {state.events === true ? (
        <Box>
          <Text>News</Text>
        </Box>
      ) : null}
      {state.upcoming === true ? (
        <Box>
          <Text>News</Text>
        </Box>
      ) : null}
    </>
  );
};

export default NewsEvents;
