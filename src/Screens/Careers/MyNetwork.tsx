import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Box, SearchBox, Text } from "../../components";
import UserNetWorkCard from "./components/UserNetWorkCard";
const profileImage = require("../../../assets/images/small-image.png");

interface MyNetworkProps {}
const MyNetwork = ({}: MyNetworkProps) => {
  const [searchText, setSearchText] = useState<string>("");
  const handleChangeText = (text: string) => {
    setSearchText(text);
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
        <Box>
          <ScrollView>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, i) => {
              return (
                <UserNetWorkCard
                  chat={true}
                  day={"wed"}
                  addButton={false}
                  key={i}
                  {...{ profileImage }}
                />
              );
            })}
          </ScrollView>
        </Box>
      </Box>
    </Box>
  );
};

export default MyNetwork;
