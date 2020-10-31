import React from "react";
import { Dimensions } from "react-native";
import { Box, LargeButton, Text, TextField } from "../../components";
import * as Yup from "yup";
import { useFormik } from "formik";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { combineAuthStackProps } from "./index";
import { connect } from "react-redux";
import { userLogin } from "../../actions/authActions";

const { width: wWidth, height: wHeight } = Dimensions.get("window");

interface LoginProps {
  navigation: combineAuthStackProps<"login">;
  getLogin: (email: string, password: string, navigation: any) => void;
}

const validationSchema = Yup.object().shape({
  password: Yup.string().required(),
  email: Yup.string().required(), //TODO: Validate Email
});

const Login = ({ navigation, getLogin }: LoginProps) => {
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
      email: "",
      callback: false,
    },
    onSubmit: async (values) => {
      //navigation.navigate("Home");
      // console.log(values);
      try {
        getLogin(values.email, values.password, navigation);
      } catch (e) {
        console.log(e);
      }
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
        flex={1}
      >
        <Box marginHorizontal="l">
          <Box>
            <TextField
              onChangeText={handleChange("email")}
              placeholder="email"
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
          <LargeButton onPress={handleSubmit} label={"LOGIN"} />
          <Box paddingVertical="m" alignItems="center">
            <TouchableWithoutFeedback>
              <Text variant="seeAll">Forgot Password ?</Text>
            </TouchableWithoutFeedback>
          </Box>

          <Box paddingVertical="m" alignItems="center">
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate("SignUp")}
            >
              <Text variant="seeAll">Create new account!</Text>
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

const mapDispatchToProps = (dispatch: any) => {
  return {
    getLogin: (email: string, password: string, navigation: any) =>
      dispatch(userLogin(email, password, navigation)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
