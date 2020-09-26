import React from "react";
import { Box } from "./Theme";
import { Feather as Icon } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";

interface SearchBoxProps {
  searchText: string;
  handleChangeText: (text: string) => void;
}
const SearchBox = ({ searchText, handleChangeText }: SearchBoxProps) => {
  return (
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
  );
};

export default SearchBox;
