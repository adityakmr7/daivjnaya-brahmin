import React, { useState } from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Box, LargeButton, Text, CheckBox } from "../../components";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Keyboard, KeyboardAvoidingView } from "react-native";
import TextField from "../NewScreen/TextField";
import { Feather as Icon } from "@expo/vector-icons";
interface RegisterProps {}

const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  contact: Yup.string().length(10).required(),
  community: Yup.string().required(),
  email: Yup.string().required(), //TODO: Validate Email
  city: Yup.string().required(),
  tellUs: Yup.number().required(),
});
const Register = ({}: RegisterProps) => {
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
      name: "",
      contact: "",
      community: "",
      email: "",
      city: "",
      tellUs: "",
      callback: false,
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Box flex={1} flexDirection="column">
      <KeyboardAvoidingView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Box marginHorizontal="xl">
            <TextField
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              error={errors.name}
              touched={touched.name}
              placeholder="Name"
            />
            <TextField
              keyboardType="phone-pad"
              onChangeText={handleChange("contact")}
              onBlur={handleBlur("contact")}
              error={errors.contact}
              touched={touched.contact}
              placeholder="Contact Number"
            />
            <TextField
              onChangeText={handleChange("community")}
              onBlur={handleBlur("community")}
              error={errors.community}
              touched={touched.community}
              placeholder="Community Name"
            />
            <TextField
              keyboardType="email-address"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              error={errors.email}
              touched={touched.email}
              placeholder="Email"
            />
            <TextField
              keyboardType="default"
              onChangeText={handleChange("city")}
              onBlur={handleBlur("city")}
              error={errors.city}
              touched={touched.city}
              placeholder="City"
            />
            <TextField
              keyboardType="default"
              onChangeText={handleChange("tellUs")}
              onBlur={handleBlur("tellUs")}
              error={errors.tellUs}
              touched={touched.tellUs}
              placeholder="Tell Us About Yourself"
            />
          </Box>
          <Box marginVertical="xxl" flexDirection="row" marginHorizontal="xl">
            <CheckBox
              checked={values.callback}
              onChange={() => setFieldValue("callback", !values.callback)}
              label="Get a Callback"
            />
          </Box>
          <LargeButton onPress={handleSubmit} label="SEND REQUEST" />
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Box>
  );
};

export default Register;
