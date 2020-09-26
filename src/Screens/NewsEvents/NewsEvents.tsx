import React, { useEffect, useReducer, useState } from "react";
import { RectButton, TextInput } from "react-native-gesture-handler";
import { Box, SearchBox, Text } from "../../components";
import { StackNavigationProps } from "../../components/NavigationRoutes";
import { Feather as Icon } from "@expo/vector-icons";

const initialState = {
  news: true,
  events: false,
  upcoming: false,
};

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
      <SearchBox {...{ searchText, handleChangeText }} />
    </>
  );
};

export default NewsEvents;
