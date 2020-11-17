import React, { useState } from "react";
import {
  RectButton,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { Box, LargeButton, Text, CheckBox, TextField } from "../../components";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Keyboard, KeyboardAvoidingView } from "react-native";
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
      communityName: "",
      fullName: "",
      contactNumber: "",
      email: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      country: "",
      pinCode: "",
      aboutHub: "",
      facilities: "",
      longitude: "",
      latitude: "",
    },
    onSubmit: (values) => {
      console.log(values);
      // const data: postNewHubProps = {
      //   city: values.city,
      //   email: values.email,
      //   name: values.name,
      //   phoneNumber: values.contact,
      //   location: {
      //     latitude: 56,
      //     longitude: 59,
      //     locationName: "London",
      //   },
      // };
      // createNewHub(data);
    },
  });

  return (
    <Box flex={1} marginBottom="l" flexDirection="column">
      <ScrollView>
        <KeyboardAvoidingView>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Box marginHorizontal="xl">
              <TextField
                onChangeText={handleChange("communityName")}
                onBlur={handleBlur("communityName")}
                error={errors.communityName}
                touched={touched.communityName}
                placeholder="Community Hub Name"
              />
              <TextField
                onChangeText={handleChange("fullName")}
                onBlur={handleBlur("fullName")}
                error={errors.fullName}
                touched={touched.fullName}
                placeholder="Full Name"
              />
              <TextField
                keyboardType="phone-pad"
                onChangeText={handleChange("contactNumber")}
                onBlur={handleBlur("contactNumber")}
                error={errors.contactNumber}
                touched={touched.contactNumber}
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
                onChangeText={handleChange("address1")}
                onBlur={handleBlur("address1")}
                error={errors.address1}
                touched={touched.address1}
                placeholder="Address 1"
              />
              <TextField
                keyboardType="default"
                onChangeText={handleChange("address2")}
                onBlur={handleBlur("address2")}
                error={errors.address2}
                touched={touched.address2}
                placeholder="Address 2"
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
                onChangeText={handleChange("state")}
                onBlur={handleBlur("state")}
                error={errors.state}
                touched={touched.state}
                placeholder="State"
              />
              <TextField
                keyboardType="default"
                onChangeText={handleChange("country")}
                onBlur={handleBlur("country")}
                error={errors.country}
                touched={touched.country}
                placeholder="Country"
              />
              <TextField
                keyboardType="default"
                onChangeText={handleChange("pinCode")}
                onBlur={handleBlur("pinCode")}
                error={errors.pinCode}
                touched={touched.pinCode}
                placeholder="Pin Code"
              />
              <Box>
                <Box
                  marginVertical="xl"
                  flexDirection="row"
                  justifyContent="space-between"
                >
                  <Text variant="silentText">Cover Image upload </Text>
                  <RectButton>
                    <Text>Upload</Text>
                  </RectButton>
                </Box>
                <Box
                  marginVertical="l"
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Text variant="silentText">Gallery</Text>
                  <Box flexDirection="row" justifyContent="space-between">
                    <RectButton style={{ margin: 5 }}>
                      <Box
                        width={40}
                        height={40}
                        borderColor="primaryText"
                        borderWidth={2}
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Icon name="plus" size={10} />
                      </Box>
                    </RectButton>
                    <RectButton style={{ margin: 5 }}>
                      <Box
                        width={40}
                        height={40}
                        borderColor="primaryText"
                        borderWidth={2}
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Icon name="plus" size={10} />
                      </Box>
                    </RectButton>
                    <RectButton style={{ margin: 5 }}>
                      <Box
                        width={40}
                        height={40}
                        borderColor="primaryText"
                        borderWidth={2}
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Icon name="plus" size={10} />
                      </Box>
                    </RectButton>
                  </Box>
                </Box>
                <Box>
                  <Text variant="silentText">Location</Text>
                  <Box flexDirection="row" justifyContent="space-between">
                    <TextField
                      keyboardType="numeric"
                      onChangeText={handleChange("latitude")}
                      onBlur={handleBlur("latitude")}
                      error={errors.latitude}
                      touched={touched.latitude}
                      placeholder="Latitude"
                    />
                    <TextField
                      keyboardType="numeric"
                      onChangeText={handleChange("longitude")}
                      onBlur={handleBlur("longitude")}
                      error={errors.longitude}
                      touched={touched.longitude}
                      placeholder="Longitude"
                    />
                  </Box>
                </Box>
              </Box>

              <TextField
                keyboardType="default"
                onChangeText={handleChange("aboutHub")}
                onBlur={handleBlur("aboutHub")}
                error={errors.aboutHub}
                touched={touched.aboutHub}
                placeholder="About the Hub"
              />
              <TextField
                keyboardType="default"
                onChangeText={handleChange("facilities")}
                onBlur={handleBlur("facilities")}
                error={errors.facilities}
                touched={touched.facilities}
                placeholder="Facilities"
              />
            </Box>

            <LargeButton onPress={handleSubmit} label="REGISTER" />
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ScrollView>
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
