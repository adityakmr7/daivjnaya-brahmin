import React from "react";
import { Dimensions } from "react-native";
import { Box, LargeButton, Text, TextField } from "../../components";
import * as Yup from "yup";
import { useFormik } from "formik";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { combineAuthStackProps } from ".";
import { userSignup } from "../../actions/authActions";
import { connect } from "react-redux";

const { width: wWidth, height: wHeight } = Dimensions.get("window");

interface SignupProps {
  navigation: combineAuthStackProps<"SignUp">;
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
  password: Yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/).required(),
  email: Yup.string().email().required(),
  fName: Yup.string().required(),
  phoneNumber: Yup.string().length(10).required(),
});

const SignUp = ({ navigation, userSignUp }: SignupProps) => {
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
      password: "",
      fName: "",
      email: "",
      phoneNumber: "",
      callback: false,
    },
    onSubmit: async (values) => {
      const { email, password, fName, phoneNumber } = values;
      const fullName = fName.split(" ");
      const firstName = fullName[0];
      const lastName = fullName[1];
      try {
        userSignUp(
          email,
          password,
          firstName,
          lastName,
          phoneNumber,
          navigation
        );
      } catch (e) {
        console.log(e);
      }

      // navigation.navigate("Home");
    },
  });
  return (
    <Box
      backgroundColor="primaryText"
      flex={1}
      justifyContent="center"
      alignItems="center"
    >
      <Box flex={1}></Box>
      <Box
        borderTopLeftRadius="l"
        borderTopRightRadius="l"
        width={wWidth}
        backgroundColor="iconBackground"
        flex={1.5}
      >
        <Box marginHorizontal="l">
          <Box>
            <TextField
              onChangeText={handleChange("fName")}
              placeholder="Full Name"
              onBlur={handleBlur("fName")}
              error={errors.fName}
              touched={touched.fName}
            />
          </Box>
          <Box>
            <TextField
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
              placeholder="Phone Number"
              onChangeText={handleChange("phoneNumber")}
              onBlur={handleBlur("phoneNumber")}
              error={errors.phoneNumber}
              touched={touched.phoneNumber}
            />
          </Box>
          <LargeButton onPress={handleSubmit} label={"SING UP"} />
          <Box paddingVertical="s" alignItems="center">
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate("login")}
            >
              <Text fontSize={13} variant="silentText">
                Already have account ? <Text variant="seeAll">Sign In</Text>
              </Text>
            </TouchableWithoutFeedback>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

function mapStateToProps(state: any) {
  return { ...state };
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
