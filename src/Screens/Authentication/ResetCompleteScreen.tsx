import { StatusBar } from "expo-status-bar";
import React from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { combineAuthStackProps } from ".";
import { Box, LargeButton, Text, TextField } from "../../components";
import { Feather as Icon } from "@expo/vector-icons";

interface ResetCompleteScreenProps {
  navigation: combineAuthStackProps<"ResetComplete">;
}
const ResetCompleteScreen = ({ navigation }: ResetCompleteScreenProps) => {
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
        <Box marginVertical="xxxl" justifyContent="center" alignItems="center">
          <Box
            justifyContent="center"
            alignItems="center"
            borderColor="successColor"
            borderWidth={5}
            borderRadius="xl"
            width={100}
            height={100}
          >
            <Icon name="check" size={50} color="#0CC155" />
          </Box>
        </Box>
        <Box marginVertical="xxxl">
          <Text color="primaryText" variant="titleText">
            Password Reset
          </Text>
          <Text color="primaryText" variant="titleText">
            Successful
          </Text>
        </Box>
        <Box justifyContent="flex-end" flexDirection="row">
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("login")}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Text color="primaryText" variant="cardSubTitle">
              Go to Login
            </Text>
            <Icon name="arrow-right" />
          </TouchableWithoutFeedback>
        </Box>
      </Box>
    </Box>
  );
};

export default ResetCompleteScreen;
