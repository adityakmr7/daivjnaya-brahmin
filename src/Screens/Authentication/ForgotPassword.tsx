import { Box, Text } from "../../components/Theme";
<<<<<<< HEAD
import React from "react";
=======
import React, { useEffect } from "react";
>>>>>>> batman
import { StatusBar } from "expo-status-bar";
import {
  TextInput,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { Feather as Icon } from "@expo/vector-icons";
import { LargeButton, TextField } from "../../components";
import { combineAuthStackProps } from ".";
<<<<<<< HEAD
interface ForgotPasswordProps {
  navigation: combineAuthStackProps<"Forgot">;
}
const ForgotPassword = ({ navigation }: ForgotPasswordProps) => {
=======
import { connect } from "react-redux";
import { resetPassword } from "../../actions/authActions";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useToast } from "react-native-styled-toast";

interface ForgotPasswordProps {
  navigation: combineAuthStackProps<"Forgot">;
  forgotState: any;
  getResetEmail: (email: string, navigation: any) => void;
}
const validationSchema = Yup.object().shape({
  email: Yup.string().email().required(),
});

const ForgotPassword = ({
  forgotState,
  navigation,
  getResetEmail,
}: ForgotPasswordProps) => {
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
      email: "",
    },
    onSubmit: async (values) => {
      console.log("forgotValue", values);
      getResetEmail(values.email, navigation);
    },
  });
  const { toast } = useToast();
  const {
    forgotPasswordLoading,
    forgotPasswordSuccess,
    forgotPasswordError,
  } = forgotState;
  useEffect(() => {
    if (forgotPasswordError !== "") {
      toast({
        message: forgotPasswordError,
        bg: "background",
        color: "text",
        accentColor: "main",
        iconFamily: "Feather",
        iconName: "alert-triangle",
        iconColor: "error",
      });
    }
  }, [forgotPasswordError]);
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
            Forgot
          </Text>
          <Text color="primaryText" variant="titleText">
            Password
          </Text>
        </Box>
<<<<<<< HEAD
        <TextField placeholder="Enter Your Email" />

        <Box>
          <LargeButton
            label="Submit"
            onPress={() => navigation.navigate("Otp")}
=======
        <TextField
          onChangeText={handleChange("email")}
          onBlur={handleBlur("email")}
          error={errors.email}
          touched={touched.email}
          placeholder="Enter Your Email"
        />
        <Box>
          <LargeButton
            loading={forgotPasswordLoading}
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
export default ForgotPassword;
=======
function mapStateToProps(state: any) {
  return {
    forgotState: state.auth,
  };
}

const mapDispatchToProps = (dispatch: any) => ({
  getResetEmail: (email: string, navigation: any) =>
    dispatch(resetPassword(email, navigation)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
>>>>>>> batman
