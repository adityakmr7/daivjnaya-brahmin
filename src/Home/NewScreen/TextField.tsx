import React from "react";
import { TextInput } from "react-native-gesture-handler";
import { Box } from "../../components";

interface TextFieldProps {
  placeholder: string;
}
const TextField = ({ placeholder, ...props }: TextFieldProps) => {
  return (
    <Box paddingTop="xl">
      <TextInput
        {...{ props }}
        placeholder={placeholder}
        style={{
          borderBottomColor: "grey",
          borderBottomWidth: 2,
          paddingVertical: 8,
        }}
      />
    </Box>
  );
};

export default TextField;
