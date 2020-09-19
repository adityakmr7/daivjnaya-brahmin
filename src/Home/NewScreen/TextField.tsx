import React from "react";
import { TextInputProps } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Box, useTheme } from "../../components";

interface TextFieldProps extends TextInputProps {
  placeholder: string;
  touched?: string | boolean;
  error?: string;
}
const TextField = ({ ...props }: TextFieldProps) => {
  const theme = useTheme();
  const reColor = !props.touched
    ? "text"
    : props.error
    ? "danger"
    : "mainIconColor";
  const color = theme.colors[reColor];
  return (
    <Box paddingTop="xl">
      <TextInput
        {...props}
        style={{
          borderBottomColor: color,
          borderBottomWidth: 2,
          paddingVertical: 8,
        }}
      />
    </Box>
  );
};

export default TextField;
