import React, { useEffect } from "react";
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Box, CheckBox, LargeButton, Text, TextField } from "../../components";
import * as Yup from "yup";
import { ErrorMessage, useFormik } from "formik";
import {
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { combineAuthStackProps } from ".";
import { userSignup } from "../../actions/authActions";
import { connect } from "react-redux";
import { useToast } from "react-native-styled-toast";
import { lastNameList } from "./surnameData";
import { AuthState } from "../../reducers/authReducer";
// import { Picker } from "@react-native-community/picker";
import { Picker, Select } from "react-native-propel-kit";
import { ModalDialog, ModalDialogHandle } from "react-native-propel-kit";
const { width: wWidth, height: wHeight } = Dimensions.get("window");

interface SignupProps {
  navigation: combineAuthStackProps<"SignUp">;
  userSignupState: AuthState;
  userSignUp: (
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    navigation: any
  ) => void;
}

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/
    )
    .required(),
  email: Yup.string().email().required(),
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  phoneNumber: Yup.string().length(10).required(),
});

const SignUp = ({ navigation, userSignUp, userSignupState }: SignupProps) => {
  const { signUpLoading, signUpError, successMessage } = userSignupState;
  const { toast } = useToast();
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
      firstName: "",
      lastName: "",
      password: "",
      email: "",
      phoneNumber: "",
      callback: false,
    },
    onSubmit: async (values) => {
      const { email, password, firstName, lastName, phoneNumber } = values;
      // const fullName = fName.split(" ");
      const fName = firstName;
      const lName = lastName;

      if (values.callback === true) {
        userSignUp(email, password, fName, lName, phoneNumber, navigation);
      } else {
        toast({
          message: "Accept Terms and Conditions",
          bg: "background",
          color: "text",
          accentColor: "main",
          iconFamily: "Feather",
          iconName: "alert-triangle",
          iconColor: "error",
        });
      }

      // navigation.navigate("Home");
    },
  });

  useEffect(() => {
    if (successMessage !== "" && signUpError === "") {
      toast({
        message: "User Created Please Login",
        bg: "background",
        color: "text",
        accentColor: "main",
        iconFamily: "Feather",
        iconName: "check-circle",
        iconColor: "success",
      });
    } else if (successMessage === "" && signUpError !== "") {
      toast({
        message: "SignUp Failed",
        bg: "background",
        color: "text",
        accentColor: "main",
        iconFamily: "Feather",
        iconName: "alert-triangle",
        iconColor: "error",
      });
    }
  }, [successMessage, signUpError]);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <Box
        backgroundColor="primaryText"
        flex={1}
        justifyContent="center"
        alignItems="center"
      >
        <Box
          justifyContent="center"
          alignItems="center"
          height={wHeight}
          width={wWidth}
          flex={1}
        >
          <Box
            style={{ marginTop: 50 }}
            height={wHeight / 3}
            width={wWidth / 2}
          >
            <Image
              style={{ height: "100%", width: "100%" }}
              source={require("../../../assets/login-logo.png")}
            />
          </Box>
        </Box>
        <Box
          borderTopLeftRadius="l"
          borderTopRightRadius="l"
          width={wWidth}
          backgroundColor="iconBackground"
          flex={2.5}
        >
          <ScrollView>
            <Box marginHorizontal="l">
              <Box>
                <TextField
                  onChangeText={handleChange("firstName")}
                  placeholder="First Name"
                  onBlur={handleBlur("firstName")}
                  error={errors.firstName}
                  touched={touched.firstName}
                />
              </Box>
              <Box marginTop="l" >
                <Text variant="cardText" color="primaryText">
                  Choose Your Surname
                </Text>
              </Box>
              <Select
                placeholder="Surname"
                value={values.lastName}
                onChange={(value: any) => setFieldValue("lastName", value)}
              >
                {lastNameList.map((item, i) => {
                  return (
                    <Select.Item
                      key={i}
                      label={item.lName}
                      value={item.lName}
                    />
                  );
                })}
              </Select>
              <Box>
                <TextField
                  keyboardType="email-address"
                  placeholder="Email"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  error={errors.email}
                  touched={touched.email}
                />
              </Box>
              <Box>
                <TextField
                  secureTextEntry={true}
                  placeholder="Password"
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  error={errors.password}
                  touched={touched.password}
                />
              </Box>
              <Box>
                <TextField
                  keyboardType="number-pad"
                  placeholder="Phone Number"
                  onChangeText={handleChange("phoneNumber")}
                  onBlur={handleBlur("phoneNumber")}
                  error={errors.phoneNumber}
                  touched={touched.phoneNumber}
                />
              </Box>
              <Box marginTop="xl"  flexDirection="row">
                <CheckBox
                  checked={values.callback}
                  onChange={() => setFieldValue("callback", !values.callback)}
                  label="Term and conditions"
                />
              </Box>
              <LargeButton
                loading={signUpLoading}
                onPress={handleSubmit}
                label={"SIGN UP"}
              />
              <Box alignItems="center">
                <TouchableWithoutFeedback
                  onPress={() => navigation.navigate("login")}
                >
                  <Text fontSize={13} marginTop="xl" marginBottom="xxl" variant="silentText">
                    Already have account ? <Text variant="seeAll">Sign In</Text>
                  </Text>
                </TouchableWithoutFeedback>
              </Box>
            </Box>
          </ScrollView>
        </Box>
      </Box>
    </KeyboardAvoidingView>
  );
};

function mapStateToProps(state: any) {
  return {
    userSignupState: state.auth,
  };
}

const mapDispatchToProps = (dispatch: any) => ({
  userSignUp: (
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    navigation: any
  ) =>
    dispatch(
      userSignup(email, password, firstName, lastName, phoneNumber, navigation)
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
