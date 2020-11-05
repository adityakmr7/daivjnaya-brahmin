import React from "react";
import { Box, CheckBox, LargeButton, Text, TextField } from "../../components";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Keyboard, KeyboardAvoidingView } from "react-native";
import {
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import {
  AppRoutes,
  StackNavigationProps,
} from "../../components/NavigationRoutes";
import { editProfile } from "../../actions/userActions";
import { connect } from "react-redux";
import { RouteProp } from "@react-navigation/native";
import { userProfileProps } from "./interfaces";

interface EditProfileProps {
  navigation: StackNavigationProps<"EditProfile">;
  route: StackNavigationProps<"EditProfile">;
  editProfile: (data: userProfileProps, navigation: any) => void;
}

const validationSchema = Yup.object().shape({
  firstName: Yup.string(),
  lastName: Yup.string(),
  phoneNumber: Yup.string().length(10),
  location: Yup.string(),
  studyAt: Yup.string(),
  workAt: Yup.string(),
  work: Yup.string(),
  bio: Yup.string(),
});
// StackNavigationProps<"EditProfile">

const EditProfile = ({
  navigation,
  route,
  editProfile,
}: {
  navigation: StackNavigationProps<"EditProfile">;
  route: RouteProp<AppRoutes, "EditProfile">;
  editProfile: (data: {}, navigation: any) => void;
}) => {
  // const { navigation, route, editProfile } = props;
  const {
    email,
    firstName,
    lastName,
    phoneNumber,
    address,
    city,
    state,
    pincode,
    companyName,
    education,
    designation,
    livesIn,
    about,
    interest,
  } = route.params;

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
      education: education !== null ? education : "",
      designation: designation !== null ? designation : "",
      companyName: companyName !== null ? companyName : "",
      phoneNumber: phoneNumber !== null ? phoneNumber : "",
      about: about !== null ? about : "",
      address: address !== null ? address : "",
      interest: interest !== null ? interest : "",
      livesIn: livesIn !== null ? livesIn : "",
      pincode: pincode !== null ? pincode : "",
      state: state !== null ? state : "",
      city: city !== null ? city : "",
      callback: false,
    },
    onSubmit: async (values) => {
      try {
        editProfile(values, navigation);
      } catch (e) {
        console.log("error Here", e);
      }
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
                value={values.address}
                onChangeText={handleChange("address")}
                onBlur={handleBlur("address")}
                error={errors.address}
                touched={touched.address}
                placeholder="Address"
              />
              <TextField
                value={values.city}
                onChangeText={handleChange("city")}
                onBlur={handleBlur("city")}
                error={errors.city}
                touched={touched.city}
                placeholder="City"
              />
              <TextField
                value={values.state}
                onChangeText={handleChange("state")}
                onBlur={handleBlur("state")}
                error={errors.state}
                touched={touched.state}
                placeholder="State"
              />
              <TextField
                keyboardType="number-pad"
                value={values.pincode}
                onChangeText={handleChange("pincode")}
                onBlur={handleBlur("pincode")}
                error={errors.pincode}
                touched={touched.pincode}
                placeholder="Pincode"
              />
              <TextField
                value={values.companyName}
                onChangeText={handleChange("companyName")}
                onBlur={handleBlur("companyName")}
                error={errors.companyName}
                touched={touched.companyName}
                placeholder="Company Name"
              />
              <TextField
                value={values.education}
                onChangeText={handleChange("education")}
                onBlur={handleBlur("education")}
                error={errors.education}
                touched={touched.education}
                placeholder="Education"
              />

              <TextField
                value={values.about}
                onChangeText={handleChange("about")}
                onBlur={handleBlur("about")}
                error={errors.about}
                touched={touched.about}
                placeholder="About"
              />
              <TextField
                value={values.designation}
                onChangeText={handleChange("designation")}
                onBlur={handleBlur("designation")}
                error={errors.designation}
                touched={touched.designation}
                placeholder="Designation"
              />
              <TextField
                value={values.livesIn}
                onChangeText={handleChange("livesIn")}
                onBlur={handleBlur("livesIn")}
                error={errors.livesIn}
                touched={touched.livesIn}
                placeholder="lives In"
              />
              <TextField
                value={values.interest}
                onChangeText={handleChange("interest")}
                onBlur={handleBlur("interest")}
                error={errors.interest}
                touched={touched.interest}
                placeholder="Interest"
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
              <LargeButton onPress={handleSubmit} label="Save" />
            </Box>
          </TouchableWithoutFeedback>
        </ScrollView>
      </KeyboardAvoidingView>
    </Box>
  );
};

function mapStateToProps(state: any) {
  return { ...state };
}

const mapDispatchToProps = (dispatch: any) => ({
  editProfile: (data: userProfileProps, navigation: any) =>
    dispatch(editProfile(data, navigation)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
