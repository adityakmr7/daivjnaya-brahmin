import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef } from "react";
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
import { useToast } from "react-native-styled-toast";

interface OtpScreenProps {
  navigation: combineAuthStackProps<"Otp">;
  route: any;
  otpState: any;
  getChangePasswordOtp: (data: {}, navigation: any) => void;
}
const validationSchema = Yup.object().shape({
  fValue: Yup.string().length(1),
  sValue: Yup.string().length(1),
  tValue: Yup.string().length(1),
  thValue: Yup.string().length(1),
});
const OtpScreen = ({
  navigation,
  getChangePasswordOtp,
  route,
  otpState,
}: OtpScreenProps) => {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    setFieldValue,
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
    },
  });
  const { email } = route.params;
  useEffect(() => {
    setFieldValue("email", email);
  }, [email]);

  const ref_input1 = useRef<any>();
  const ref_input2 = useRef<any>();
  const ref_input3 = useRef<any>();
  const ref_input4 = useRef<any>();
  const ref_input5 = useRef<any>();
  const ref_input6 = useRef<any>();
  const { otpPasswordLoading, otpPasswordSuccess, otpPasswordError } = otpState;
  const { toast } = useToast();
  useEffect(() => {
    if (otpPasswordError !== "") {
      toast({
        message: otpPasswordError,
        bg: "background",
        color: "text",
        accentColor: "main",
        iconFamily: "Feather",
        iconName: "alert-triangle",
        iconColor: "error",
      });
    }
  }, [otpPasswordError]);
  return (
    <Box flex={1}>
      <StatusBar backgroundColor="black" />
      <Box marginHorizontal="s">
        <Box marginTop="xxl" >
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("login")}
          >
            <Box flexDirection="row" alignItems="center">
              <Icon name="arrow-left" size={26} />
              <Text color="primaryText" variant="cardText" marginHorizontal="s">
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
            autoFocus={true}
            onSubmitEditing={() => ref_input2.current.focus()}
            onChangeText={handleChange("fValue")}
            onBlur={handleBlur("fValue")}
          />
          <OtpInput
            onChangeText={handleChange("sValue")}
            onBlur={handleBlur("sValue")}
            ref={ref_input2}
            onSubmitEditing={() => ref_input3.current.focus()}
          />
          <OtpInput
            onChangeText={handleChange("tValue")}
            onBlur={handleBlur("tValue")}
            onSubmitEditing={() => ref_input4.current.focus()}
            ref={ref_input3}
          />
          <OtpInput
            onChangeText={handleChange("thValue")}
            onBlur={handleBlur("thValue")}
            ref={ref_input4}
            onSubmitEditing={() => ref_input5.current.focus()}
          />
          <OtpInput
            onChangeText={handleChange("foValue")}
            onSubmitEditing={() => ref_input6.current.focus()}
            ref={ref_input5}
            onBlur={handleBlur("foValue")}
          />
          <OtpInput
            onChangeText={handleChange("fiValue")}
            onBlur={handleBlur("fiValue")}
            ref={ref_input6}
          />
        </Box>
        <Box>
          <TextField
            value={values.email}
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
          <LargeButton
            loading={otpPasswordLoading}
            label="Submit"
            onPress={() => handleSubmit()}
          />
        </Box>
      </Box>
    </Box>
  );
};

function mapStateToProps(state: any) {
  return {
    otpState: state.auth,
  };
}

const mapDispatchToProps = (dispatch: any) => ({
  getChangePasswordOtp: (
    data: { email: string; otp: string; password: string },
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
      borderWidth={1}
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
