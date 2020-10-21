import React from "react";
import { Dimensions } from "react-native";
import { Box, LargeButton, Text, TextField } from "../../components";
import * as Yup from "yup";
import { useFormik } from "formik";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { combineAuthStackProps } from ".";

const { width: wWidth, height: wHeight } = Dimensions.get("window");

interface LoginProps {
  navigation: combineAuthStackProps<"SignUp">;
}

const validationSchema = Yup.object().shape({
  password: Yup.string().required(),
  email: Yup.string().required(),
  fName: Yup.string().required(), //TODO: Validate Email
});

const SignUp = ({ navigation }: LoginProps) => {
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
      callback: false,
    },
    onSubmit: (values) => {
      navigation.navigate("Home");
      console.log(values);
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
          <LargeButton onPress={handleSubmit} label={"LOGIN"} />
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

export default SignUp;
