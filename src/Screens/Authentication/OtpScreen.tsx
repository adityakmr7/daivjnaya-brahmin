import { StatusBar } from "expo-status-bar";
<<<<<<< HEAD
import React from "react";
=======
import React, { useEffect, useRef } from "react";
>>>>>>> batman
import {
  TextInput,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { combineAuthStackProps } from ".";
<<<<<<< HEAD
import { Box, LargeButton, Text } from "../../components";
import { Feather as Icon } from "@expo/vector-icons";
import { useFormik } from "formik";
import * as Yup from "yup";

interface OtpScreenProps {
  navigation: combineAuthStackProps<"Otp">;
=======
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
>>>>>>> batman
}
const validationSchema = Yup.object().shape({
  fValue: Yup.string().length(1),
  sValue: Yup.string().length(1),
  tValue: Yup.string().length(1),
  thValue: Yup.string().length(1),
});
<<<<<<< HEAD
const OtpScreen = ({ navigation }: OtpScreenProps) => {
=======
const OtpScreen = ({
  navigation,
  getChangePasswordOtp,
  route,
  otpState,
}: OtpScreenProps) => {
>>>>>>> batman
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
<<<<<<< HEAD
=======
    setFieldValue,
>>>>>>> batman
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
<<<<<<< HEAD
    },
    onSubmit: async (values) => {
      console.log("otpVlaues", values);
    },
  });
=======
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
>>>>>>> batman
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
<<<<<<< HEAD
=======
            autoFocus={true}
            onSubmitEditing={() => ref_input2.current.focus()}
>>>>>>> batman
            onChangeText={handleChange("fValue")}
            onBlur={handleBlur("fValue")}
          />
          <OtpInput
            onChangeText={handleChange("sValue")}
            onBlur={handleBlur("sValue")}
<<<<<<< HEAD
=======
            ref={ref_input2}
            onSubmitEditing={() => ref_input3.current.focus()}
>>>>>>> batman
          />
          <OtpInput
            onChangeText={handleChange("tValue")}
            onBlur={handleBlur("tValue")}
<<<<<<< HEAD
=======
            onSubmitEditing={() => ref_input4.current.focus()}
            ref={ref_input3}
>>>>>>> batman
          />
          <OtpInput
            onChangeText={handleChange("thValue")}
            onBlur={handleBlur("thValue")}
<<<<<<< HEAD
          />
          <OtpInput
            onChangeText={handleChange("foValue")}
=======
            ref={ref_input4}
            onSubmitEditing={() => ref_input5.current.focus()}
          />
          <OtpInput
            onChangeText={handleChange("foValue")}
            onSubmitEditing={() => ref_input6.current.focus()}
            ref={ref_input5}
>>>>>>> batman
            onBlur={handleBlur("foValue")}
          />
          <OtpInput
            onChangeText={handleChange("fiValue")}
            onBlur={handleBlur("fiValue")}
<<<<<<< HEAD
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
=======
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
>>>>>>> batman
          />
        </Box>
      </Box>
    </Box>
  );
};

<<<<<<< HEAD
export default OtpScreen;
=======
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
>>>>>>> batman

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
