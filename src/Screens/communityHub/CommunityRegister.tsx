import React, { useState } from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Box, LargeButton, Text, CheckBox, TextField } from "../../components";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Keyboard, KeyboardAvoidingView } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { connect } from "react-redux";
import { postNewHubProps } from "./interfaces";
import { postNewHub } from "../../actions/hubActions";
interface RegisterProps {
  createNewHub: (data: postNewHubProps) => void;
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  contact: Yup.string().length(10).required(),
  community: Yup.string().required(),
  email: Yup.string().required(), //TODO: Validate Email
  city: Yup.string().required(),
  tellUs: Yup.number().required(),
});
const CommunityRegister = ({ createNewHub }: RegisterProps) => {
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

      email: "",
      city: "",
    },
    onSubmit: (values) => {
      console.log(values);
      const data: postNewHubProps = {
        city: values.city,
        email: values.email,
        name: values.name,
        phoneNumber: values.contact,
        location: {
          latitude: 56,
          longitude: 59,
          locationName: "London",
        },
      };
      createNewHub(data);
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
          </Box>

          <LargeButton onPress={handleSubmit} label="SEND REQUEST" />
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Box>
  );
};

function mapStateToProps(state: any) {
  return {
    ...state,
  };
}

const mapDispatchToProps = (dispatch: any) => ({
  createNewHub: (data: postNewHubProps) => dispatch(postNewHub(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommunityRegister);
