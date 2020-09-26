import React, { useState } from "react";
import { SearchBox } from "../../components";
import { StackNavigationProps } from "../../components/NavigationRoutes";

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
