import React from "react";
import { Box, CheckBox, LargeButton, TextField } from "../../components";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Keyboard, KeyboardAvoidingView } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
interface PostProductProps {}

const validationSchema = Yup.object().shape({
  pname: Yup.string().required(),
  contact: Yup.string().length(10).required(),
  email: Yup.string().required(), //TODO: Validate Email
  city: Yup.string().required(),
  upload: Yup.string().required(),
  description: Yup.string().required(),
});
const PostProduct = ({}: PostProductProps) => {
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
      pname: "",
      contact: "",
      email: "",
      city: "",
      upload: "",
      description: "",
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
              onChangeText={handleChange("pname")}
              onBlur={handleBlur("pname")}
              error={errors.pname}
              touched={touched.pname}
              placeholder="Product Name"
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
              keyboardType="email-address"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              error={errors.email}
              touched={touched.email}
              placeholder="Email Id"
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
              onChangeText={handleChange("upload")}
              onBlur={handleBlur("upload")}
              error={errors.upload}
              touched={touched.upload}
              placeholder="Upload Photos"
            />
            <TextField
              keyboardType="default"
              onChangeText={handleChange("description")}
              onBlur={handleBlur("description")}
              error={errors.description}
              touched={touched.description}
              placeholder="Description"
            />
          </Box>
          <LargeButton onPress={handleSubmit} label="SEND REQUEST" />
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Box>
  );
};

export default PostProduct;
