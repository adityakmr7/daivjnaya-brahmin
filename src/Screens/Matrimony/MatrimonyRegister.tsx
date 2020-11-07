import React, { useState } from "react";
import { Box, CheckBox, LargeButton, Text, TextField } from "../../components";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ToastAndroid,
} from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import {
  RectButton,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import {
  AppRoutes,
  StackNavigationProps,
} from "../../components/NavigationRoutes";

import { RouteProp } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
import { connect } from "react-redux";
import { createMatrimonyProps } from "./interface";
import { createMatrimonyProfile } from "../../actions/matrimonyActions";
import * as ImagePicker from "expo-image-picker";
interface MatrimonyRegisterProps {
  navigation: StackNavigationProps<"EditProfile">;
  route: StackNavigationProps<"EditProfile">;
  matrimonyState: any;
  registerMatrimony: (data: createMatrimonyProps) => void;
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

const MatrimonyRegister = ({
  navigation,
  route,
  registerMatrimony,
  matrimonyState,
}: MatrimonyRegisterProps) => {
  const [imageUri, setImageUri] = useState("");
  const { created } = matrimonyState;
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
      email: "",
      phoneNumber: "",
      companyName: "",
      designation: "",
      education: "",
      livesIn: "",
      about: "",
      interest: "",
      gender: "",
    },
    onSubmit: async (values) => {
      const val = {
        image: imageUri,
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        phoneNumber: values.phoneNumber,
        companyName: values.companyName,
        designation: values.designation,
        education: values.education,
        livesIn: values.livesIn,
        about: values.about,
        interest: values.interest,
        gender: values.gender,
      };
      registerMatrimony(val);
      if (created === true) {
        ToastAndroid.showWithGravity(
          "User Created",
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM
        );
      } else {
        ToastAndroid.showWithGravity(
          "Failed Try Again",
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM
        );
      }
    },
  });

  const handleImageUpload = async () => {
    if (Platform.OS !== "web") {
      const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera Permissions");
      } else {
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
          base64: true,
        });

        if (!result.cancelled) {
          setImageUri(result.uri);
        }
      }
    }
  };

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
                value={values.email}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                error={errors.email}
                touched={touched.email}
                placeholder="Email"
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
                value={values.companyName}
                onChangeText={handleChange("companyName")}
                onBlur={handleBlur("companyName")}
                error={errors.companyName}
                touched={touched.companyName}
                placeholder="Company Name"
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
                value={values.education}
                onChangeText={handleChange("education")}
                onBlur={handleBlur("education")}
                error={errors.education}
                touched={touched.education}
                placeholder="Education"
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
                value={values.about}
                onChangeText={handleChange("about")}
                onBlur={handleBlur("about")}
                error={errors.about}
                touched={touched.about}
                placeholder="About"
              />
              <TextField
                value={values.interest}
                onChangeText={handleChange("interest")}
                onBlur={handleBlur("interest")}
                error={errors.interest}
                touched={touched.interest}
                placeholder="Interest"
              />

              {/* <Picker
                selectedValue={values.gender}
                onValueChange={(itemValue, itemIndex) =>
                  setFieldValue("gender", itemValue)
                }
              >
                <Picker.Item label="Male" value="male" />
                <Picker.Item label="Female" value="female" />
              </Picker> */}
              <TextField
                value={values.gender}
                onChangeText={handleChange("gender")}
                onBlur={handleBlur("gender")}
                error={errors.gender}
                touched={touched.gender}
                placeholder="Gender"
              />
              <Box
                style={{ shadowOffset: { width: 0, height: 5 } }}
                shadowColor="greyish"
                elevation={1}
                marginHorizontal="xl"
                borderRadius="s"
                marginTop="xxl"
              >
                <RectButton
                  onPress={() => handleImageUpload()}
                  style={{ height: 40, width: "100%" }}
                >
                  <Box flexDirection="row" paddingTop="s" paddingLeft="l">
                    <Icon size={20} style={{ paddingRight: 5 }} name="upload" />
                    <Text color="primaryText" variant="cardText">
                      Upload Files
                    </Text>
                  </Box>
                </RectButton>
              </Box>
            </Box>
            <Box marginTop="l" flexDirection="row" marginHorizontal="xl"></Box>
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
  return {
    matrimonyState: state.matrimony,
  };
}

const mapDispatchToProps = (dispatch: any) => ({
  registerMatrimony: (data: createMatrimonyProps) =>
    dispatch(createMatrimonyProfile(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MatrimonyRegister);
