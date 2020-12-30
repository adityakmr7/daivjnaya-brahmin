import React from "react";
import { connect } from "react-redux";
import { postMatrimonyVendor } from "../../actions/matrimonyActions";
import { Box, CheckBox, LargeButton, Text, TextField } from "../../components";
import * as Yup from "yup";
import {
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useFormik } from "formik";
import {
  RectButton,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import { Feather as Icon } from "@expo/vector-icons";
import restServices from "../../services/restServices";
interface VendorRegisterProps {
  postVendor: (data: any, navigation: any) => void;
  matrimonyState: any;
  navigation: any;
}
const { width: wWidth, height: wHeight } = Dimensions.get("window");
const validationSchema = Yup.object().shape({
  firstName: Yup.string(),
  lastName: Yup.string(),
  phoneNumber: Yup.string().length(10),
  email: Yup.string().email(),
  companyName: Yup.string(),
  designation: Yup.string(),
  education: Yup.string(),
  livesIn: Yup.string(),
  about: Yup.string(),
  interest: Yup.string(),
  gender: Yup.string(),
});
const VendorRegister = ({
  postVendor,
  matrimonyState,
  navigation,
}: VendorRegisterProps) => {
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
      acceptTMC: false,
      addressLine1: "",
      addressLine2: "",
      businessName: "",
      category: "",
      city: "",
      country: "",
      email: "",

      galleryImage1: "",
      galleryImage2: "",
      galleryImage3: "",
      getCallback: false,
      image: "",

      ownerDesignation: "",
      ownerEmail: "",
      ownerFullName: "",
      ownerPhoneNumber: "",
      ownerPlace: "",
      ownerProfilePic: "",
      phoneNumber: "",
      pincode: "",
      service: "",
      state: "",
    },
    onSubmit: async (values) => {
      const dataToSend = {
        about: values.about,
        acceptTMC: values.acceptTMC,
        addressLine1: values.addressLine1,
        addressLine2: values.addressLine2,
        businessName: values.businessName,
        category: values.category,
        city: values.city,
        country: values.country,
        email: values.email,
        galleries: [
          values.galleryImage1,
          values.galleryImage2,
          values.galleryImage3,
        ],
        getCallback: values.getCallback,
        image: values.image,
        owners: [
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
        service: values.service,
        state: values.state,
      };

      postVendor(dataToSend, navigation);
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
    setFieldValue("galleryImage1", imageUrl.data.url);
  };
  const handleSecondImage = async () => {
    const url: any = await handleImageUpload();
    const imageUrl = await _rest.getMediaUrl(url);

    setFieldValue("galleryImage2", imageUrl.data.url);
  };
  const handleImageThree = async () => {
    const url: any = await handleImageUpload();
    const imageUrl = await _rest.getMediaUrl(url);
    setFieldValue("galleryImage3", imageUrl.data.url);
  };
  const handleProfilePic = async () => {
    const url: any = await handleImageUpload();
    const imageUrl = await _rest.getMediaUrl(url);
    setFieldValue("ownerProfilePic", imageUrl.data.url);
  };
  const {
    postVendorLoading,
    postVendorSuccess,
    postVendorError,
  } = matrimonyState;
  return (
    <Box flex={1} flexDirection="column">
      <ScrollView>
        <Box marginBottom="xxl">
          <KeyboardAvoidingView>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <Box marginHorizontal="xl">
                <TextField
                  onChangeText={handleChange("ownerFullName")}
                  onBlur={handleBlur("ownerFullName")}
                  error={errors.ownerFullName}
                  touched={touched.ownerFullName}
                  placeholder="Owner Full Name"
                />
                <TextField
                  onChangeText={handleChange("ownerEmail")}
                  onBlur={handleBlur("ownerEmail")}
                  error={errors.ownerEmail}
                  touched={touched.ownerEmail}
                  placeholder="Owner Email"
                />
                <TextField
                  onChangeText={handleChange("ownerDesignation")}
                  onBlur={handleBlur("ownerDesignation")}
                  error={errors.ownerDesignation}
                  touched={touched.ownerDesignation}
                  placeholder="Owner Designation"
                />
                <TextField
                  onChangeText={handleChange("ownerPhoneNumber")}
                  onBlur={handleBlur("ownerPhoneNumber")}
                  error={errors.ownerPhoneNumber}
                  touched={touched.ownerPhoneNumber}
                  placeholder="Owner Designation"
                />
                <TextField
                  onChangeText={handleChange("ownerPlace")}
                  onBlur={handleBlur("ownerPlace")}
                  error={errors.ownerPlace}
                  touched={touched.ownerPlace}
                  placeholder="Owner Place"
                />
                {/* // owner Detail Till Here */}

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
                  onChangeText={handleChange("businessName")}
                  onBlur={handleBlur("businessName")}
                  error={errors.businessName}
                  touched={touched.businessName}
                  placeholder="Business Name"
                />
                <TextField
                  onChangeText={handleChange("category")}
                  onBlur={handleBlur("category")}
                  error={errors.category}
                  touched={touched.category}
                  placeholder="Category"
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
                  keyboardType="email-address"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  error={errors.email}
                  touched={touched.email}
                  placeholder="email"
                />

                <TextField
                  keyboardType="number-pad"
                  onChangeText={handleChange("pincode")}
                  onBlur={handleBlur("pincode")}
                  error={errors.pincode}
                  touched={touched.pincode}
                  placeholder="Pincode"
                />

                <TextField
                  onChangeText={handleChange("service")}
                  onBlur={handleBlur("service")}
                  error={errors.service}
                  touched={touched.service}
                  placeholder="service"
                />

                <TextField
                  onChangeText={handleChange("state")}
                  onBlur={handleBlur("state")}
                  error={errors.state}
                  touched={touched.state}
                  placeholder="State"
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
                        {values.galleryImage1 !== "" ? (
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
                        {values.galleryImage2 !== "" ? (
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
                        {values.galleryImage3 !== "" ? (
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
                loading={postVendorLoading}
                onPress={handleSubmit}
                label="REGISTER"
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
    matrimonyState: state.matrimony,
  };
}

const mapDispatchToProps = (dispatch: any) => ({
  postVendor: (data: any, navigation: any) =>
    dispatch(postMatrimonyVendor(data, navigation)),
});
export default connect(mapStateToProps, mapDispatchToProps)(VendorRegister);
