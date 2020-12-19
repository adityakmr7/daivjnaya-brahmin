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

const validationSchema = Yup.object().shape({
  pname: Yup.string().required(),
  contact: Yup.string().length(10).required(),
  email: Yup.string().required(), //TODO: Validate Email
  city: Yup.string().required(),
  upload: Yup.string().required(),
  description: Yup.string().required(),
});
const PostProduct = ({
  createNewProduct,
  productCreateState,
  createNewProperty,
}: PostProductProps) => {
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
      fName: "",
      contact: "",
      productName: "",
      address: "",
      city: "",
      country: "",
      state: "",
      pinCode: "",
      email: "",
      website: "",
      about: "",
      otherInfo: "",
      price: "",
      imageUrl1: "",
      imageUrl2: "",
      imageUrl3: "",
      callback: false,
      tmc: false,
      offered: false,
      wanted: false,
      product: false,
      property: false,
    },
    onSubmit: (values) => {
      const data = {
        address: values.address,
        email: values.email,
        galleries: [values.imageUrl1, values.imageUrl2, values.imageUrl3],
        phoneNumber: values.contact,
        productName: values.productName,
        vendor: {
          designation: values,
          email: values.email,
          fullName: values.fName,
          phoneNumber: values.contact,
          place: values.address,
          profilePic: "",
        },
      };
      if (values.wanted && values.property) {
        createNewProperty(data);
      } else {
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
    setFieldValue("imageUrl1", imageUrl);
    // setGalleryImage((prevState) => [...prevState, imageUrl.data.url]);
  };
  const handleSecondImage = async () => {
    const url: any = await handleImageUpload();
    const imageUrl = await _rest.getMediaUrl(url);
    // stateCopy[0] = imageUrl.data.url;
    setFieldValue("imageUrl2", imageUrl);

    // setGalleryImage((prevState) => [...prevState, imageUrl.data.url]);
  };
  const handleImageThree = async () => {
    const url: any = await handleImageUpload();
    const imageUrl = await _rest.getMediaUrl(url);
    setFieldValue("imageUrl3", imageUrl);
    // setGalleryImage((prevState) => [...prevState, imageUrl.data.url]);
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
                  checked={values.offered}
                  onChange={() => setFieldValue("offered", !values.offered)}
                  label="Offered"
                />
                <CheckBox
                  checked={values.product}
                  onChange={() => setFieldValue("product", !values.product)}
                  label="Wanted"
                />
              </Box>
              <Box flexDirection="row" justifyContent="space-around">
                <CheckBox
                  checked={values.wanted}
                  onChange={() => setFieldValue("wanted", !values.wanted)}
                  label="Product"
                />
                <CheckBox
                  checked={values.property}
                  onChange={() => setFieldValue("property", !values.property)}
                  label="Property"
                />
              </Box>
              <TextField
                onChangeText={handleChange("fName")}
                onBlur={handleBlur("fName")}
                error={errors.fName}
                touched={touched.fName}
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
                onChangeText={handleChange("address")}
                onBlur={handleBlur("address")}
                error={errors.address}
                touched={touched.address}
                placeholder="Address"
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
              <TextField
                keyboardType="number-pad"
                onChangeText={handleChange("price")}
                onBlur={handleBlur("price")}
                error={errors.price}
                touched={touched.price}
                placeholder="Price"
              />
              <TextField
                keyboardType="default"
                onChangeText={handleChange("website")}
                onBlur={handleBlur("website")}
                error={errors.website}
                touched={touched.website}
                placeholder="Website"
              />
              <TextField
                keyboardType="default"
                onChangeText={handleChange("about")}
                onBlur={handleBlur("about")}
                error={errors.about}
                touched={touched.about}
                placeholder="About the post"
              />
              <TextField
                keyboardType="default"
                onChangeText={handleChange("otherInfo")}
                onBlur={handleBlur("otherInfo")}
                error={errors.otherInfo}
                touched={touched.otherInfo}
                placeholder="Other Info"
              />
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
              <LargeButton onPress={handleSubmit} label="POST" />
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
