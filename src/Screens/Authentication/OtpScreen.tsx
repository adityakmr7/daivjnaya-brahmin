import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  TextInput,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { combineAuthStackProps } from ".";
import { Box, LargeButton, Text, TextField } from "../../components";
import { Feather as Icon } from "@expo/vector-icons";
import { useFormik } from "formik";
import * as Yup from "yup";
import { changePasswordForOtp } from "../../actions/authActions";
import { connect } from "react-redux";

interface OtpScreenProps {
  navigation: combineAuthStackProps<"Otp">;
  getChangePasswordOtp: (data: {}, navigation: any) => void;
}
const validationSchema = Yup.object().shape({
  fValue: Yup.string().length(1),
  sValue: Yup.string().length(1),
  tValue: Yup.string().length(1),
  thValue: Yup.string().length(1),
});
const OtpScreen = ({ navigation, getChangePasswordOtp }: OtpScreenProps) => {
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
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      const data = {
        email: values.email,
        otp:
          `${values.fValue}` +
          `${values.sValue}` +
          `${values.tValue}` +
          `${values.thValue}` +
          `${values.foValue}` +
          `${values.fiValue}`,
        password: values.password,
      };
      getChangePasswordOtp(data, navigation);
      console.log("otpVlaues", data);
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
        </Box>
        <Box>
          <TextField
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            error={errors.email}
            touched={touched.email}
            placeholder="Enter Your Email"
          />
          <TextField
            secureTextEntry={true}
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            error={errors.password}
            touched={touched.password}
            placeholder="Enter password"
          />
        </Box>
        <Box>
          <LargeButton label="Submit" onPress={() => handleSubmit()} />
        </Box>
      </Box>
    </Box>
  );
};

function mapStateToProps(state: any) {
  return {
    ...state,
  };
}

const mapDispatchToProps = (dispatch: any) => ({
  getChangePasswordOtp: (
    data: { email: string; otp: number; password: string },
    navigation: any
  ) => dispatch(changePasswordForOtp(data, navigation)),
});
export default connect(mapStateToProps, mapDispatchToProps)(OtpScreen);

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
