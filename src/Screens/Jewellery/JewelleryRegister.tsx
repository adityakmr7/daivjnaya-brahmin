import React, { useState } from "react";
import { Box, Text, CheckBox, LargeButton, TextField } from "../../components";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Feather as Icon } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { connect } from "react-redux";
import { Keyboard, KeyboardAvoidingView, Platform } from "react-native";
import {
  RectButton,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import restServices from "../../services/restServices";
import { postJeweller } from "../../actions/jewelleryActions";
interface PostProductProps {
  postJwel: (data: {}) => void;
  jewellery: any;
}

const validationSchema = Yup.object().shape({
  pname: Yup.string().required(),
  contact: Yup.string().length(10).required(),
  email: Yup.string().required(), //TODO: Validate Email
  city: Yup.string().required(),
  upload: Yup.string().required(),
  description: Yup.string().required(),
});
const JewelleryRegister = ({ postJwel, jewellery }: PostProductProps) => {
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
      shop: false,
      vendor: false,
      worker: false,
      // data to send
      fullName: "",
      about: "",

      addressLine1: "",
      addressLine2: "",

      city: "",
      country: "",

      email: "",
      facilities: "",

      coverImage: "",
      image1: "",
      image2: "",
      image3: "",
      acceptTMC: false,
      getCallback: false,
      otherInfo: "",
      //owner
      ownerDesignation: "",
      ownerEmail: "",
      ownerFullName: "",
      ownerPhoneNumber: "",
      ownerPlace: "",
      ownerProfilePic: "",

      phoneNumber: "",
      pincode: "",
      price: "",
      professionName: "",
      shopName: "",
      state: "",
      type: "",
      website: "",
    },
    onSubmit: (values) => {
      let typeData: string = "";
      if (values.shop) {
        typeData = "SHOP";
      } else if (values.worker) {
        typeData = "WORKER";
      } else if (values.vendor) {
        typeData = "VENDOR";
      }
      const data = {
        about: values.about,
        acceptTMC: values.acceptTMC,
        addressLine1: values.addressLine1,
        addressLine2: values.addressLine1,
        city: values.city,
        country: values.country,
        coverImage: values.coverImage,
        email: values.email,
        facilities: values.facilities,
        fullName: values.fullName,
        galleries: [values.image1, values.image2, values.image3],
        getCallback: values.getCallback,
        otherInfo: values.otherInfo,
        owner: [
          {
            designation: values.ownerDesignation,
            email: values.ownerEmail,
            fullName: values.ownerFullName,
            phoneNumber: values.ownerPhoneNumber,
            place: values.ownerPlace,
            profilePic: values.ownerProfilePic,
          },
        ],
        phoneNumber: values.phoneNumber,
        pincode: values.pincode,
        price: values.price,
        professionName: values.professionName,
        shopName: values.shopName,
        state: values.state,
        type: typeData,
        website: values.website,
      };
      postJwel(data);
    },
  });
  const {
    postJewelleryLoading,
    postJewelleryData,
    postJewelleryError,
  } = jewellery;

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
    setFieldValue("image1", imageUrl.data.url);
  };
  const handleSecondImage = async () => {
    const url: any = await handleImageUpload();
    const imageUrl = await _rest.getMediaUrl(url);

    setFieldValue("image2", imageUrl.data.url);
  };
  const handleImageThree = async () => {
    const url: any = await handleImageUpload();
    const imageUrl = await _rest.getMediaUrl(url);
    setFieldValue("image3", imageUrl.data.url);
  };
  const handleProfilePic = async () => {
    const url: any = await handleImageUpload();
    const imageUrl = await _rest.getMediaUrl(url);
    setFieldValue("ownerProfilePic", imageUrl.data.url);
  };
  const handleCoverImage = async () => {
    const url: any = await handleImageUpload();
    const imageUrl = await _rest.getMediaUrl(url);
    setFieldValue("coverImage", imageUrl.data.url);
  };
  return (
    <Box flex={1} flexDirection="column">
      <ScrollView>
        <Box marginBottom="xxl">
          <KeyboardAvoidingView>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <Box marginHorizontal="xl">
                <Box
                  marginVertical="l"
                  flexDirection="row"
                  justifyContent="space-around"
                >
                  <CheckBox
                    checked={values.shop}
                    onChange={() => setFieldValue("shop", !values.shop)}
                    label="Shop"
                  />
                  <CheckBox
                    checked={values.vendor}
                    onChange={() => setFieldValue("vendor", !values.vendor)}
                    label="Vendors"
                  />
                  <CheckBox
                    checked={values.worker}
                    onChange={() => setFieldValue("tmc", !values.worker)}
                    label="Workers"
                  />
                </Box>

                <TextField
                  onChangeText={handleChange("fullName")}
                  onBlur={handleBlur("fullName")}
                  error={errors.fullName}
                  touched={touched.fullName}
                  placeholder="Full Name"
                />
                <TextField
                  onChangeText={handleChange("about")}
                  onBlur={handleBlur("about")}
                  error={errors.about}
                  touched={touched.about}
                  placeholder="About"
                />
                <TextField
                  onChangeText={handleChange("addressLine1")}
                  onBlur={handleBlur("addressLine1")}
                  error={errors.addressLine1}
                  touched={touched.addressLine1}
                  placeholder="AddressLine1"
                />
                <TextField
                  onChangeText={handleChange("addressLine2")}
                  onBlur={handleBlur("addressLine2")}
                  error={errors.addressLine2}
                  touched={touched.addressLine2}
                  placeholder="AddressLine2"
                />
                <TextField
                  onChangeText={handleChange("city")}
                  onBlur={handleBlur("city")}
                  error={errors.city}
                  touched={touched.city}
                  placeholder="city"
                />
                <TextField
                  onChangeText={handleChange("country")}
                  onBlur={handleBlur("country")}
                  error={errors.country}
                  touched={touched.country}
                  placeholder="country"
                />
                <TextField
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  error={errors.email}
                  touched={touched.email}
                  placeholder="email"
                />
                <TextField
                  onChangeText={handleChange("facilities")}
                  onBlur={handleBlur("facilities")}
                  error={errors.facilities}
                  touched={touched.facilities}
                  placeholder="facilities"
                />
                <TextField
                  onChangeText={handleChange("otherInfo")}
                  onBlur={handleBlur("otherInfo")}
                  error={errors.otherInfo}
                  touched={touched.otherInfo}
                  placeholder="otherInfo"
                />
                <TextField
                  onChangeText={handleChange("ownerDesignation")}
                  onBlur={handleBlur("ownerDesignation")}
                  error={errors.ownerDesignation}
                  touched={touched.ownerDesignation}
                  placeholder="ownerDesignation"
                />
                <TextField
                  onChangeText={handleChange("ownerEmail")}
                  onBlur={handleBlur("ownerEmail")}
                  error={errors.ownerEmail}
                  touched={touched.ownerEmail}
                  placeholder="ownerEmail"
                />
                <TextField
                  onChangeText={handleChange("ownerFullName")}
                  onBlur={handleBlur("ownerFullName")}
                  error={errors.ownerFullName}
                  touched={touched.ownerFullName}
                  placeholder="ownerFullName"
                />
                <TextField
                  onChangeText={handleChange("ownerPhoneNumber")}
                  onBlur={handleBlur("ownerPhoneNumber")}
                  error={errors.ownerPhoneNumber}
                  touched={touched.ownerPhoneNumber}
                  placeholder="ownerPhoneNumber"
                />
                <TextField
                  onChangeText={handleChange("ownerPlace")}
                  onBlur={handleBlur("ownerPlace")}
                  error={errors.ownerPlace}
                  touched={touched.ownerPlace}
                  placeholder="ownerPlace"
                />

                <TextField
                  keyboardType="phone-pad"
                  onChangeText={handleChange("phoneNumber")}
                  onBlur={handleBlur("phoneNumber")}
                  error={errors.phoneNumber}
                  touched={touched.phoneNumber}
                  placeholder="phone Number"
                />
                <TextField
                  keyboardType="phone-pad"
                  onChangeText={handleChange("pincode")}
                  onBlur={handleBlur("pincode")}
                  error={errors.pincode}
                  touched={touched.pincode}
                  placeholder="pincode"
                />
                <TextField
                  keyboardType="phone-pad"
                  onChangeText={handleChange("price")}
                  onBlur={handleBlur("price")}
                  error={errors.price}
                  touched={touched.price}
                  placeholder="price"
                />
                <TextField
                  onChangeText={handleChange("professionName")}
                  onBlur={handleBlur("professionName")}
                  error={errors.professionName}
                  touched={touched.professionName}
                  placeholder="professionName"
                />
                <TextField
                  onChangeText={handleChange("shopName")}
                  onBlur={handleBlur("shopName")}
                  error={errors.shopName}
                  touched={touched.shopName}
                  placeholder="shopName"
                />

                <TextField
                  onChangeText={handleChange("state")}
                  onBlur={handleBlur("state")}
                  error={errors.state}
                  touched={touched.state}
                  placeholder="state"
                />
                {/* // TODO:  type for better way */}
                <TextField
                  onChangeText={handleChange("type")}
                  onBlur={handleBlur("type")}
                  error={errors.type}
                  touched={touched.type}
                  placeholder="type"
                />
                <TextField
                  onChangeText={handleChange("website")}
                  onBlur={handleBlur("website")}
                  error={errors.website}
                  touched={touched.website}
                  placeholder="website"
                />

                {/* // ! // gallery select Image */}
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
                        {values.image1 !== "" ? (
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
                        {values.image2 !== "" ? (
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
                        {values.image3 !== "" ? (
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
                    <Text variant="silentText">ProfilePic</Text>
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
                      {values.ownerProfilePic !== "" ? (
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
                  alignItems="center"
                >
                  <Box>
                    <Text variant="silentText">CoverImage</Text>
                  </Box>
                  <RectButton onPress={() => handleCoverImage()}>
                    <Box
                      width={40}
                      height={40}
                      borderColor="primaryText"
                      borderWidth={2}
                      justifyContent="center"
                      alignItems="center"
                    >
                      {values.coverImage !== "" ? (
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
                    checked={values.acceptTMC}
                    onChange={() =>
                      setFieldValue("acceptTMC", !values.acceptTMC)
                    }
                    label="Accept TMC"
                  />
                  <CheckBox
                    checked={values.getCallback}
                    onChange={() =>
                      setFieldValue("getCallback", !values.getCallback)
                    }
                    label="Get a Callback"
                  />
                </Box>
              </Box>
              <LargeButton
                loading={postJewelleryLoading}
                onPress={handleSubmit}
                label="POST"
              />
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
        </Box>
      </ScrollView>
    </Box>
  );
};

function mapStateToProps(state: any) {
  return {
    jewellery: state.jewellery,
  };
}

const mapDispatchToProps = (dispatch: any) => ({
  postJwel: (data: {}) => dispatch(postJeweller(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(JewelleryRegister);
