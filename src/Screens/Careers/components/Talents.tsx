import React, { useEffect, useState } from "react";
import {
  RectButton,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
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
interface CareerRegisterProps {
  createNewTalent: (data: any) => void;
  careerTalent: any;
}

const validationSchema = Yup.object().shape({
  name: Yup.string(),
  contact: Yup.string().length(10),
  community: Yup.string(),
  email: Yup.string().email().required(), //TODO:, Validate Email
  city: Yup.string(),
  tellUs: Yup.number(),
});
const Talents = ({ createNewTalent, careerTalent }: CareerRegisterProps) => {
  const [galleryImage, setGalleryImage] = useState<any[]>([]);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [imageLoadingState, setImageLoadingState] = useState<any>({
    first: false,
    second: false,
    third: false,
  });
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
      coverImage: "", // TODO:
      email: "",
      fullName: "",
      galleries: [
        // TODO:
      ],
      phoneNumber: "",
      pincode: "",
      state: "",
      title: "",
      video: "",
    },
    onSubmit: (values) => {
      createNewTalent(values);
      console.log(values);
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
  const handleVideoUpload = async () => {};
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
    setFieldValue("gallery", (values.galleries[0] = uri));
  };
  const handleSecondImage = async () => {
    const url: any = await handleImageUpload();
    const imageUrl = await _rest.getMediaUrl(url);
    const uri: any = await imageUrl.data.url;
    setFieldValue("gallery", (values.galleries[1] = uri));
  };
  const handleImageThree = async () => {
    const url: any = await handleImageUpload();
    const imageUrl = await _rest.getMediaUrl(url);
    const uri: any = await imageUrl.data.url;
    setFieldValue("gallery", (values.galleries[2] = uri));
  };
  const { postingTalent, postedTalent, errorPostingTalent } = careerTalent;
  console.log("galleryImage", values.galleries);
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
                          name={values.galleries[0] ? "check" : "plus"}
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
                          name={values.galleries[1] ? "check" : "plus"}
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
                          name={values.galleries[2] ? "check" : "plus"}
                          size={10}
                        />
                      </Box>
                    </RectButton>
                  </Box>
                </Box>
              </Box>

              <LargeButton onPress={handleVideoUpload} label="ADD VIDEO" />
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
  createNewTalent: (data: any) => dispatch(postTalents(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Talents);
