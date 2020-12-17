import { Box, Text } from "../../components/Theme";
import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  TextInput,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { TextField } from "../../components";

const ForgotPassword = ({}) => {
  return (
    <Box flex={1}>
      <StatusBar backgroundColor="black" />
      <Box marginHorizontal="s">
        <Box marginTop="xxl" marginHorizontal="s">
          <TouchableWithoutFeedback>
            <Text color="primaryText" variant="cardText">
              Forgot Password
            </Text>
          </TouchableWithoutFeedback>
        </Box>
        <Box marginVertical="xxxl">
          <Text color="primaryText" variant="titleText">
            Forgot
          </Text>
          <Text color="primaryText" variant="titleText">
            Password
          </Text>
        </Box>
        <TextField placeholder="Enter Your Email" />
      </Box>
    </Box>
  );
};

export default ForgotPassword;
