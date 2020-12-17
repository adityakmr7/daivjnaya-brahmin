import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  TextInput,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { combineAuthStackProps } from ".";
import { Box, LargeButton, Text } from "../../components";
import { Feather as Icon } from "@expo/vector-icons";
import { useFormik } from "formik";
import * as Yup from "yup";

interface OtpScreenProps {
  navigation: combineAuthStackProps<"Otp">;
}
const validationSchema = Yup.object().shape({
  fValue: Yup.string().length(1),
  sValue: Yup.string().length(1),
  tValue: Yup.string().length(1),
  thValue: Yup.string().length(1),
});
const OtpScreen = ({ navigation }: OtpScreenProps) => {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
  } = useFormik({
    validationSchema,
    initialValues: {
      fValue: "",
      sValue: "",
      tValue: "",
      thValue: "",
      foValue: "",
      fiValue: "",
      siValue: "",
    },
    onSubmit: async (values) => {
      console.log("otpVlaues", values);
    },
  });
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
            Enter OTP
          </Text>
        </Box>
        <Box
          marginHorizontal="xl"
          justifyContent="space-between"
          alignItems="center"
          flexDirection="row"
        >
          <OtpInput
            onChangeText={handleChange("fValue")}
            onBlur={handleBlur("fValue")}
          />
          <OtpInput
            onChangeText={handleChange("sValue")}
            onBlur={handleBlur("sValue")}
          />
          <OtpInput
            onChangeText={handleChange("tValue")}
            onBlur={handleBlur("tValue")}
          />
          <OtpInput
            onChangeText={handleChange("thValue")}
            onBlur={handleBlur("thValue")}
          />
          <OtpInput
            onChangeText={handleChange("foValue")}
            onBlur={handleBlur("foValue")}
          />
          <OtpInput
            onChangeText={handleChange("fiValue")}
            onBlur={handleBlur("fiValue")}
          />
          <OtpInput
            onChangeText={handleChange("siValue")}
            onBlur={handleBlur("siValue")}
          />
        </Box>

        <Box>
          <LargeButton
            label="Submit"
            onPress={() => navigation.navigate("ResetComplete")}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default OtpScreen;

const OtpInput = ({ ...props }) => {
  return (
    <Box
      justifyContent="center"
      alignItems="center"
      borderColor="grey"
      borderWidth={3}
      width={40}
      height={40}
    >
      <TextInput
        maxLength={1}
        {...props}
        keyboardType="number-pad"
        style={{ fontSize: 20 }}
        placeholder="0"
      />
    </Box>
  );
};
