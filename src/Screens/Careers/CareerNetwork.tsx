import React, { useState } from "react";

import { Box, SearchBox, Text } from "../../components";

import UserNetWorkCard from "./components/UserNetWorkCard";
import NetWorkComponentTitle from "./components/NetWorkComponentTitle";
interface CareerNetworkProps {}

const profileImage = require("../../../assets/images/small-image.png");

const CareerNetwork = ({}: CareerNetworkProps) => {
  const [searchText, setSearchText] = useState<string>("");
  const handleChangeText = (text: string) => {
    setSearchText(text);
  };
  return (
    <Box backgroundColor="mainBackground" flex={1}>
      <Box
        backgroundColor="mainBackground"
        borderColor="mainBackground"
        borderWidth={1}
      >
        <SearchBox {...{ searchText, handleChangeText }} />
      </Box>
      <Box marginVertical="s" backgroundColor="iconBackground">
        <NetWorkComponentTitle
          numberOfPeople={2}
          title="Invitation"
          onPress={() => {}}
        />
        <Box>
          {[1, 2].map((item, i) => {
            return (
              <UserNetWorkCard
                addButton={false}
                key={i}
                {...{ profileImage }}
              />
            );
          })}
        </Box>
      </Box>
      <Box backgroundColor="iconBackground">
        <NetWorkComponentTitle title="People You May Know" onPress={() => {}} />
        <Box>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, i) => {
            return (
              <UserNetWorkCard addButton={true} key={i} {...{ profileImage }} />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default CareerNetwork;
