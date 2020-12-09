import React, { useState } from "react";

import { Box, SearchBox, Text } from "../../components";

import UserNetWorkCard from "./components/UserNetWorkCard";
import NetWorkComponentTitle from "./components/NetWorkComponentTitle";
import HeaderButton from "./components/HeaderButton";
import { Dimensions } from "react-native";
interface CareerNetworkProps {
  navigation: any;
}

const profileImage = require("../../../assets/images/small-image.png");

const { width: wWidth, height: wHeight } = Dimensions.get("window");
const CareerNetwork = ({ navigation }: CareerNetworkProps) => {
  const [searchText, setSearchText] = useState<string>("");
  const handleChangeText = (text: string) => {
    setSearchText(text);
  };
  return (
    <Box backgroundColor="mainBackground" flex={1}>
      <Box
        backgroundColor="iconBackground"
        borderColor="mainBackground"
        borderWidth={1}
      >
        <Box
          paddingTop="s"
          marginHorizontal="s"
          flexDirection="row"
          justifyContent="flex-start"
          width={wWidth}
          height={wWidth * 0.2 - 20}
        >
          <HeaderButton
            title="My Network"
            onPress={() => navigation.navigate("MyNetwork")}
          />
        </Box>
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
