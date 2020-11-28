import React, { useCallback, useEffect, useState } from "react";
import {
  RectButton,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { Picker } from "@react-native-community/picker";

import * as ImagePicker from "expo-image-picker";
import * as Location from "expo-location";
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
  Button,
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ToastAndroid,
} from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { connect } from "react-redux";
import restServices from "../../../services/restServices";
import { MonthPicker } from "react-native-propel-kit";
interface RegisterProps {}
const { width: wWidth, height: wHeight } = Dimensions.get("window");
const validationSchema = Yup.object().shape({
  name: Yup.string(),
  contact: Yup.string().length(10),
  community: Yup.string(),
  email: Yup.string().email().required(), //TODO:, Validate Email
  city: Yup.string(),
  tellUs: Yup.number(),
});
const PostJobForm = () => {
  const [galleryImage, setGalleryImage] = useState<any[]>([]);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [imageLoadingState, setImageLoadingState] = useState<any>({
    first: false,
    second: false,
    third: false,
  });
  const [timePeriodDateTo, setTimePeriodDateTo] = useState<Date>(new Date());
  const [timePeriodDateFrom, setTimePeriodDateFrom] = useState<Date>(
    new Date()
  );

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
      aboutTalent: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      country: "",
      coverImage: "", // TODO: Cover Image
      employerEmail: "",
      employerName: "",
      employerPhoneNumber: "",
      galleries: [""], // TODO: galleries
      jobTitle: "",
      pinCode: "",
      state: "",
      video: "",
    },
    onSubmit: (values) => {
      // console.log(values);
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
          // TODO: set Image upload Here
          //result.uri
          return result.uri;
        }
      }
    }
  };
  const handleVideoUpload = async () => {
    if (Platform.OS !== "web") {
      const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera Permissions");
      } else {
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Videos,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
          base64: true,
        });

        if (!result.cancelled) {
          console.log("responseVideo1", result);
          // TODO: video Upload
          const _rest = new restServices();
          _rest
            .getMediaUrl(result.uri)
            .then((res) => {
              console.log("responseVideo", res);
            })
            .catch((err) => {
              console.log("responseVideoError", err);
            });
          return result.uri;
        }
      }
    }
  };

  var _rest = new restServices();
  const handleFistImage = async () => {
    const url: any = await handleImageUpload();
    const imageUrl = await _rest.getMediaUrl(url);

    setGalleryImage((prevState) => [...prevState, imageUrl.data.url]);
  };
  const handleSecondImage = async () => {
    const url: any = await handleImageUpload();
    const imageUrl = await _rest.getMediaUrl(url);
    // stateCopy[0] = imageUrl.data.url;
    setGalleryImage((prevState) => [...prevState, imageUrl.data.url]);
  };
  const handleImageThree = async () => {
    const url: any = await handleImageUpload();
    const imageUrl = await _rest.getMediaUrl(url);
    setGalleryImage((prevState) => [...prevState, imageUrl.data.url]);
  };

  return (
    <Box flex={1} marginBottom="l" flexDirection="column">
      <ScrollView>
        <KeyboardAvoidingView>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Box marginHorizontal="xl">
              <TextField
                onChangeText={handleChange("employerName")}
                onBlur={handleBlur("employerName")}
                error={errors.employerName}
                touched={touched.employerName}
                placeholder="Employer Name"
              />
              <TextField
                keyboardType="number-pad"
                onChangeText={handleChange("employerPhoneNumber")}
                onBlur={handleBlur("employerPhoneNumber")}
                error={errors.employerPhoneNumber}
                touched={touched.employerPhoneNumber}
                placeholder="Employer Number"
              />
              <TextField
                keyboardType="email-address"
                onChangeText={handleChange("employerEmail")}
                onBlur={handleBlur("employerEmail")}
                error={errors.employerEmail}
                touched={touched.employerEmail}
                placeholder="Employer Email"
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
                onChangeText={handleChange("pinCode")}
                onBlur={handleBlur("pinCode")}
                error={errors.pinCode}
                touched={touched.pinCode}
                placeholder="Pin Code"
              />
              <TextField
                onChangeText={handleChange("jobTitle")}
                onBlur={handleBlur("jobTitle")}
                error={errors.jobTitle}
                touched={touched.jobTitle}
                placeholder="Job Title"
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
                      <Icon name="plus" size={10} />
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
                      <Icon name="plus" size={10} />
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
                      <Icon name="plus" size={10} />
                    </Box>
                  </RectButton>
                </Box>
              </Box>
              <LargeButton onPress={handleVideoUpload} label="Add Video" />
            </Box>

            <LargeButton onPress={handleSubmit} label="REGISTER" />
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ScrollView>
    </Box>
  );
};

// function mapStateToProps(state: any) {
//   return {
//     hubState: state.hub,
//   };
// }

// const mapDispatchToProps = (dispatch: any) => ({
//   createNewHub: (data: postNewHubProps, images: []) =>
//     dispatch(postNewHub(data, images)),
// });

export default PostJobForm;
