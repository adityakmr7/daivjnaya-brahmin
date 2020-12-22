import React, { useState } from "react";
import { Box, Text, CheckBox, LargeButton, TextField } from "../../components";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Feather as Icon } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import { Keyboard, KeyboardAvoidingView, Platform } from "react-native";
import {
  RectButton,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import restServices from "../../services/restServices";
import {
  postNewB2bProduct,
  postNewB2bProperty,
} from "../../actions/b2bActions";
import { connect } from "react-redux";
interface PostProductProps {
  createNewProduct: (data: {}) => void;
  createNewProperty: (data: {}) => void;
  productCreateState: any;
}

const validationSchema = Yup.object().shape({});
const PostProduct = ({
  createNewProduct,
  productCreateState,
  createNewProperty,
}: PostProductProps) => {
  const {
    createProductLoading,
    createProductSuccess,
    createProductError,
    createPropertyLoading,
    createPropertySuccess,
    createPropertyError,
  } = productCreateState;
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
      address: "",
      email: "",
      imageUrl1: "",
      imageUrl2: "",
      imageUrl3: "",
      contact: "",
      productName: "",
      description:"",
      type:"",
      //vendor
      vendorDesignation: "",
      vendorEmail: "",
      vendorFName: "",
      vendorPhoneNumber: "",
      vendorPlace: "",
      profilePic: "",
      callback: false,
      tmc: false,
      product: false,
      property: false,
      productOffered: false,
      propertyWanted: false,
    },
    onSubmit: (values) => {
      const data = {
        address: values.address,
        description: values.description,
        type: values.type,
        email: values.email,
        galleries: [values.imageUrl1, values.imageUrl2, values.imageUrl3],
        phoneNumber: values.contact,
        productName: values.productName,
        type: values.productOffered ? "OFFERED" : "WANTED",
        vendor: {
          designation: values.vendorDesignation,
          vendorEmail: values.vendorEmail,
          fullName: values.vendorFName,
          phoneNumber: values.vendorPhoneNumber,
          place: values.vendorPlace,
          profilePic: values.profilePic,
        },
      };
      const propertyData = {
        address: values.address,
        description: values.description,
        email: values.email,
        galleries: [values.imageUrl1, values.imageUrl2, values.imageUrl3],
<<<<<<< HEAD
        productName: values.productName,
        type: values.type,
=======
        type: values.propertyWanted ? "WANTED" : "OFFERED",
>>>>>>> batman
        owner: {
          designation: values.vendorDesignation,
          email: values.vendorEmail,
          fullName: values.vendorFName,
          phoneNumber: values.vendorPhoneNumber,
          place: values.vendorPlace,
          profilePic: values.profilePic,
        },
        phoneNumber: values.contact,
        propertyName: values.productName,
      };
      if (values.property) {
        createNewProperty(propertyData);
      } else if (values.product) {
        createNewProduct(data);
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
          return result.uri;
        }
      }
    }
  };
  var _rest = new restServices();
  const handleFistImage = async () => {
    const url: any = await handleImageUpload();
    const imageUrl = await _rest.getMediaUrl(url);
    setFieldValue("imageUrl1", imageUrl.data.url);
    // setGalleryImage((prevState) => [...prevState, imageUrl.data.url]);
  };
  const handleSecondImage = async () => {
    const url: any = await handleImageUpload();
    const imageUrl = await _rest.getMediaUrl(url);

    setFieldValue("imageUrl2", imageUrl.data.url);

    // setGalleryImage((prevState) => [...prevState, imageUrl.data.url]);
  };
  const handleImageThree = async () => {
    const url: any = await handleImageUpload();
    const imageUrl = await _rest.getMediaUrl(url);
    setFieldValue("imageUrl3", imageUrl.data.url);
    // setGalleryImage((prevState) => [...prevState, imageUrl.data.url]);
  };
  const handleProfilePic = async () => {
    const url: any = await handleImageUpload();
    const imageUrl = await _rest.getMediaUrl(url);
    setFieldValue("profilePic", imageUrl.data.url);
  };
  return (
    <Box flex={1} flexDirection="column">
      <ScrollView>
        <KeyboardAvoidingView>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Box marginHorizontal="xl">
              <Box
                marginVertical="l"
                flexDirection="row"
                justifyContent="space-around"
              >
                <CheckBox
                  checked={values.productOffered}
                  onChange={() =>
                    setFieldValue("productOffered", !values.productOffered)
                  }
                  label="Offered"
                />
                <CheckBox
                  checked={values.propertyWanted}
                  onChange={() =>
                    setFieldValue("propertyWanted", !values.propertyWanted)
                  }
                  label="Wanted"
                />
              </Box>
              <Box flexDirection="row" justifyContent="space-around">
                <CheckBox
                  checked={values.product}
                  onChange={() => setFieldValue("product", !values.product)}
                  label="Product"
                />
                <CheckBox
                  checked={values.property}
                  onChange={() => setFieldValue("property", !values.property)}
                  label="Property"
                />
              </Box>

              <TextField
                onChangeText={handleChange("vendorFName")}
                onBlur={handleBlur("vendorFName")}
                error={errors.vendorFName}
                touched={touched.vendorFName}
                placeholder="Full Name"
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
                onChangeText={handleChange("productName")}
                onBlur={handleBlur("productName")}
                error={errors.productName}
                touched={touched.productName}
                placeholder={
                  values.propertyWanted ? "Property Name" : "Product Name"
                }
              />
              <TextField
                keyboardType="default"
                onChangeText={handleChange("address")}
                onBlur={handleBlur("address")}
                error={errors.address}
                touched={touched.address}
                placeholder="Address"
              />
              <TextField
                keyboardType="default"
                onChangeText={handleChange("description")}
                onBlur={handleBlur("description")}
                error={errors.description}
                touched={touched.description}
                placeholder="Description"
              />
              <TextField
                keyboardType="phone-pad"
                onChangeText={handleChange("vendorPhoneNumber")}
                onBlur={handleBlur("vendorPhoneNumber")}
                error={errors.vendorPhoneNumber}
                touched={touched.vendorPhoneNumber}
                placeholder={
                  values.propertyWanted
                    ? "Owner PhoneNumber"
                    : "Vendor PhoneNumber"
                }
              />
              <TextField
                keyboardType="default"
                onChangeText={handleChange("vendorDesignation")}
                onBlur={handleBlur("vendorDesignation")}
                error={errors.vendorDesignation}
                touched={touched.vendorDesignation}
                placeholder="Designation"
              />
              <TextField
                keyboardType="default"
                onChangeText={handleChange("vendorPlace")}
                onBlur={handleBlur("vendorPlace")}
                error={errors.vendorPlace}
                touched={touched.vendorPlace}
                placeholder="Place"
              />
              <TextField
                keyboardType="email-address"
                onChangeText={handleChange("vendorEmail")}
                onBlur={handleBlur("vendorEmail")}
                error={errors.vendorEmail}
                touched={touched.vendorEmail}
                placeholder={
                  values.propertyWanted ? "Owner Email" : "Vendor Email"
                }
              />

              <Box
                marginVertical="l"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Text variant="silentText">Gallery</Text>
                <Box flexDirection="row" justifyContent="space-between">
                  <RectButton
                    onPress={() => handleFistImage()}
                    style={{ margin: 5 }}
                  >
                    <Box
                      width={40}
                      height={40}
                      borderColor="primaryText"
                      borderWidth={2}
                      justifyContent="center"
                      alignItems="center"
                    >
                      {values.imageUrl1 !== "" ? (
                        <Icon name="check" size={10} />
                      ) : (
                        <Icon name="plus" size={10} />
                      )}
                    </Box>
                  </RectButton>
                  <RectButton
                    onPress={() => handleSecondImage()}
                    style={{ margin: 5 }}
                  >
                    <Box
                      width={40}
                      height={40}
                      borderColor="primaryText"
                      borderWidth={2}
                      justifyContent="center"
                      alignItems="center"
                    >
                      {values.imageUrl2 !== "" ? (
                        <Icon name="check" size={10} />
                      ) : (
                        <Icon name="plus" size={10} />
                      )}
                    </Box>
                  </RectButton>
                  <RectButton
                    onPress={() => handleImageThree()}
                    style={{ margin: 5 }}
                  >
                    <Box
                      width={40}
                      height={40}
                      borderColor="primaryText"
                      borderWidth={2}
                      justifyContent="center"
                      alignItems="center"
                    >
                      {values.imageUrl3 !== "" ? (
                        <Icon name="check" size={10} />
                      ) : (
                        <Icon name="plus" size={10} />
                      )}
                    </Box>
                  </RectButton>
                </Box>
              </Box>
              <Box
                marginVertical="l"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <Text variant="silentText">
                    {values.property ? "Owner ProfilePic" : "Vendor Profile"}{" "}
                  </Text>
                </Box>
                <RectButton onPress={() => handleProfilePic()}>
                  <Box
                    width={40}
                    height={40}
                    borderColor="primaryText"
                    borderWidth={2}
                    justifyContent="center"
                    alignItems="center"
                  >
                    {values.profilePic !== "" ? (
                      <Icon name="check" size={10} />
                    ) : (
                      <Icon name="plus" size={10} />
                    )}
                  </Box>
                </RectButton>
              </Box>
              <Box
                marginVertical="l"
                flexDirection="row"
                justifyContent="space-between"
              >
                <CheckBox
                  checked={values.tmc}
                  onChange={() => setFieldValue("tmc", !values.tmc)}
                  label="Accept TMC"
                />
                <CheckBox
                  checked={values.callback}
                  onChange={() => setFieldValue("callback", !values.callback)}
                  label="Get a Callback"
                />
              </Box>
            </Box>
            <Box marginBottom="xxl">
              <LargeButton
                loading={createPropertyLoading || createProductLoading}
                onPress={() => handleSubmit()}
                label="POST"
              />
            </Box>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ScrollView>
    </Box>
  );
};

function mapStateToProps(state: any) {
  return {
    productCreateState: state.b2b,
  };
}
const mapDispatchToProps = (dispatch: any) => ({
  createNewProduct: (data: {}) => dispatch(postNewB2bProduct(data)),
  createNewProperty: (data: {}) => dispatch(postNewB2bProperty(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostProduct);
