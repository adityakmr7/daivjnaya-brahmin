import React from "react";
import { Box, CheckBox, LargeButton, Text, TextField } from "../../components";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import { Keyboard, KeyboardAvoidingView } from "react-native";
import {
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { StackNavigationProps } from "../../components/NavigationRoutes";
interface EditProfileProps {}
const validationSchema = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  phoneNumber: Yup.string().length(10).required(),
  location: Yup.string().required(),
  studyAt: Yup.string().required(),
  workAt: Yup.string().required(),
  work: Yup.string().required(),
  bio: Yup.string().required(),
});
const EditProfile = ({
  navigation,
  route,
}: StackNavigationProps<"EditProfile">) => {
  const {
    email,
    firstName,
    lastName,
    location,
    phoneNumber,
    studyAt,
    uId,
    work,
    workAt,
  } = route.params;
  console.log("paramData", route.params);

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
      firstName: firstName !== null ? firstName : "",
      lastName: lastName !== null ? lastName : "",
      phoneNumber: phoneNumber !== null ? phoneNumber : "",
      location: location !== null ? location : "",
      studyAt: studyAt !== null ? studyAt : "",
      workAt: workAt !== null ? workAt : "",
      work: work !== null ? work : "",
      bio: "",
      callback: false,
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <Box flex={1} flexDirection="column">
      <KeyboardAvoidingView>
        <ScrollView>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Box marginHorizontal="xl">
              <TextField
                value={values.firstName}
                onChangeText={handleChange("firstName")}
                onBlur={handleBlur("firstName")}
                error={errors.firstName}
                touched={touched.firstName}
                placeholder="First Name"
              />
              <TextField
                value={values.lastName}
                onChangeText={handleChange("lastName")}
                onBlur={handleBlur("lastName")}
                error={errors.lastName}
                touched={touched.lastName}
                placeholder="Last Name"
              />
              <TextField
                value={values.phoneNumber}
                keyboardType="phone-pad"
                onChangeText={handleChange("phoneNumber")}
                onBlur={handleBlur("phoneNumber")}
                error={errors.phoneNumber}
                touched={touched.phoneNumber}
                placeholder="Phone Number"
              />
              <TextField
                value={values.location}
                onChangeText={handleChange("location")}
                onBlur={handleBlur("location")}
                error={errors.location}
                touched={touched.location}
                placeholder="Location"
              />
              <TextField
                value={values.studyAt}
                onChangeText={handleChange("studyAt")}
                onBlur={handleBlur("studyAt")}
                error={errors.studyAt}
                touched={touched.studyAt}
                placeholder="Study At"
              />
              <TextField
                value={values.workAt}
                onChangeText={handleChange("workAt")}
                onBlur={handleBlur("workAt")}
                error={errors.workAt}
                touched={touched.workAt}
                placeholder="Work At"
              />
              <TextField
                value={values.work}
                onChangeText={handleChange("work")}
                onBlur={handleBlur("work")}
                error={errors.work}
                touched={touched.work}
                placeholder="Work"
              />
              <TextField
                value={values.bio}
                onChangeText={handleChange("bio")}
                onBlur={handleBlur("bio")}
                error={errors.bio}
                touched={touched.bio}
                placeholder="Bio"
              />
            </Box>
            <Box marginTop="l" flexDirection="row" marginHorizontal="xl">
              <CheckBox
                checked={values.callback}
                onChange={() => setFieldValue("callback", !values.callback)}
                label="Get a Callback"
              />
            </Box>
            <Box marginBottom="l">
              <LargeButton onPress={handleSubmit} label="EDIT PROFILE" />
            </Box>
          </TouchableWithoutFeedback>
        </ScrollView>
      </KeyboardAvoidingView>
    </Box>
  );
};

export default EditProfile;
