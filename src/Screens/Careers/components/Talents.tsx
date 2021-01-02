import React, { useEffect, useState } from "react";
import {
  RectButton,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import {
  Box,
  LargeButton,
  Text,
  CheckBox,
  TextField,
} from "../../../components";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ToastAndroid,
} from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { connect } from "react-redux";
import { postNewHub } from "../../../actions/hubActions";
import restServices from "../../../services/restServices";
import { postTalents } from "../../../actions/careerActions";
import { getLocalImage } from "../../../utils/getLocalImage";
interface CareerRegisterProps {
  createNewTalent: (data: any, navigation: any) => void;
  careerTalent: any;
  navigation: any;
}

const validationSchema = Yup.object().shape({
  about: Yup.string(),
  addressLine1: Yup.string(),
  addressLine2: Yup.string(),
  country: Yup.string(),
  coverImage: Yup.string(),
  fullName: Yup.string(),
  galleryImage1: Yup.string(),
  galleryImage2: Yup.string(),
  galleryImage3: Yup.string(),
  phoneNumber: Yup.string(),
  state: Yup.string(),
  title: Yup.string(),
  video: Yup.string(),
  name: Yup.string(),
  contact: Yup.string().length(10),
  community: Yup.string(),
  email: Yup.string().email().required(),
  city: Yup.string(),
  tellUs: Yup.number(),
  pincode: Yup.string().length(6),
});
const Talents = ({
  createNewTalent,
  navigation,
  careerTalent,
}: CareerRegisterProps) => {
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
      about: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      country: "",
      coverImage: "",
      email: "",
      fullName: "",
      galleryImage1: "",
      galleryImage2: "",
      galleryImage3: "",

      phoneNumber: "",
      pincode: "",
      state: "",
      title: "",
      video: "",
    },
    onSubmit: (values) => {
      const dataToSend = {
        about: values.about,
        addressLine1: values.addressLine1,
        addressLine2: values.addressLine2,
        city: values.city,
        country: values.country,
        coverImage: values.coverImage,
        email: values.email,
        fullName: values.fullName,
        galleries: [
          values.galleryImage1,
          values.galleryImage2,
          values.galleryImage3,
        ],

        phoneNumber: values.phoneNumber,
        pincode: values.pincode,
        state: values.state,
        title: values.title,
        video: values.video,
      };
      createNewTalent(dataToSend, navigation);

      //   if (values.callback === true && values.tmc === true) {
      //     createNewHub(values, galleryImage);
      //     if (createSuccess !== "" && createError === "") {
      //       ToastAndroid.showWithGravity(
      //         "Member Created",
      //         ToastAndroid.LONG,
      //         ToastAndroid.BOTTOM
      //       );
      //       setGalleryImage([]);
      //     }
      //   }
    },
  });

  const handleImageUpload = async () => {
    const uri = await getLocalImage();
    if (uri) {
      return uri;
    }
  };

  var _rest = new restServices();

  const handleCoverImage = async () => {
    const url: any = await handleImageUpload();
    const imageUrl = await _rest.getMediaUrl(url);
    const uri: any = await imageUrl.data.url;
    setFieldValue("coverImage", uri);
  };
  const handleFistImage = async () => {
    const url: any = await handleImageUpload();
    const imageUrl = await _rest.getMediaUrl(url);
    const uri: any = await imageUrl.data.url;
    setFieldValue("galleryImage1", uri);
  };
  const handleSecondImage = async () => {
    const url: any = await handleImageUpload();
    const imageUrl = await _rest.getMediaUrl(url);
    const uri: any = await imageUrl.data.url;
    setFieldValue("galleryImage2", uri);
  };
  const handleImageThree = async () => {
    const url: any = await handleImageUpload();
    const imageUrl = await _rest.getMediaUrl(url);
    const uri: any = await imageUrl.data.url;
    setFieldValue("galleryImage3", uri);
  };
  const { postingTalent, postedTalent, errorPostingTalent } = careerTalent;

  useEffect(() => {
    if (postedTalent !== "") {
      ToastAndroid.showWithGravity(
        "Talent Created",
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM
      );
    } else if (errorPostingTalent !== "") {
      ToastAndroid.showWithGravity(
        "Error Try Again",
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM
      );
    }
  }, [postedTalent, errorPostingTalent]);

  return (
    <Box flex={1} marginBottom="l" flexDirection="column">
      <ScrollView>
        <KeyboardAvoidingView>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Box marginHorizontal="xl">
              <TextField
                onChangeText={handleChange("fullName")}
                onBlur={handleBlur("fullName")}
                error={errors.fullName}
                touched={touched.fullName}
                placeholder="Your Full Name"
              />
              <TextField
                onChangeText={handleChange("title")}
                onBlur={handleBlur("title")}
                error={errors.title}
                touched={touched.title}
                placeholder="Title"
              />
              <TextField
                keyboardType="phone-pad"
                onChangeText={handleChange("phoneNumber")}
                onBlur={handleBlur("phoneNumber")}
                error={errors.phoneNumber}
                touched={touched.phoneNumber}
                placeholder="Phone Number"
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
                onChangeText={handleChange("addressLine1")}
                onBlur={handleBlur("addressLine1")}
                error={errors.addressLine1}
                touched={touched.addressLine1}
                placeholder="Address 1"
              />
              <TextField
                keyboardType="default"
                onChangeText={handleChange("addressLine2")}
                onBlur={handleBlur("addressLine2")}
                error={errors.addressLine2}
                touched={touched.addressLine2}
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
                onChangeText={handleChange("about")}
                onBlur={handleBlur("about")}
                error={errors.about}
                touched={touched.about}
                placeholder="About"
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
                keyboardType="phone-pad"
                onChangeText={handleChange("pincode")}
                onBlur={handleBlur("pincode")}
                error={errors.pincode}
                touched={touched.pincode}
                placeholder="Pin Code"
              />
              <Box>
                <Box
                  marginVertical="xl"
                  flexDirection="row"
                  justifyContent="space-between"
                >
                  <Text variant="silentText">Cover Image upload </Text>
                  <RectButton onPress={handleCoverImage}>
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
                        <Icon
                          name={values.galleryImage1 !== "" ? "check" : "plus"}
                          size={10}
                        />
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
                        <Icon
                          name={values.galleryImage2 !== "" ? "check" : "plus"}
                          size={10}
                        />
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
                        <Icon
                          name={values.galleryImage3 !== "" ? "check" : "plus"}
                          size={10}
                        />
                      </Box>
                    </RectButton>
                  </Box>
                </Box>
              </Box>
            </Box>

            <LargeButton
              loading={postingTalent}
              onPress={handleSubmit}
              label="REGISTER"
            />
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ScrollView>
    </Box>
  );
};

function mapStateToProps(state: any) {
  return {
    careerTalent: state.career,
  };
}

const mapDispatchToProps = (dispatch: any) => ({
  createNewTalent: (data: any, navigation: any) =>
    dispatch(postTalents(data, navigation)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Talents);
