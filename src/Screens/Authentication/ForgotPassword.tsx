import { Box, Text } from "../../components/Theme";
import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  TextInput,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { Feather as Icon } from "@expo/vector-icons";
import { LargeButton, TextField } from "../../components";
import { combineAuthStackProps } from ".";
interface ForgotPasswordProps {
  navigation: combineAuthStackProps<"Forgot">;
}
const ForgotPassword = ({ navigation }: ForgotPasswordProps) => {
  return (
    <Box flex={1}>
      <StatusBar backgroundColor="black" />
      <Box marginHorizontal="s">
        <Box marginTop="xxl" marginHorizontal="s">
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("login")}
          >
            <Box flexDirection="row" alignItems="center">
              <Icon name="arrow-left" size={26} />
              <Text color="primaryText" variant="cardText">
                Forgot Password
              </Text>
            </Box>
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

        <Box>
          <LargeButton
            label="Submit"
            onPress={() => navigation.navigate("Otp")}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ForgotPassword;
