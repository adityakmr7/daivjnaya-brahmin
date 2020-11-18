import React, { useState } from "react";
import {
  RectButton,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import * as Location from "expo-location";
import { Box, LargeButton, Text, CheckBox, TextField } from "../../components";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { connect } from "react-redux";
import { postNewHubProps } from "./interfaces";
import { postNewHub } from "../../actions/hubActions";
import restServices from "../../services/restServices";
interface RegisterProps {
  createNewHub: (data: postNewHubProps, images: []) => void;
}

const validationSchema = Yup.object().shape({
  name: Yup.string(),
  contact: Yup.string().length(10),
  community: Yup.string(),
  email: Yup.string(), //TODO:, Validate Email
  city: Yup.string(),
  tellUs: Yup.number(),
});
const CommunityRegister = ({ createNewHub }: RegisterProps) => {
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
      callback: false,
      tmc: false,
    },
    onSubmit: (values) => {
      if (values.callback === true && values.tmc === true) {
        createNewHub(values, galleryImage);
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
          // TODO: set Image upload Here
          //result.uri
          return result.uri;
        }
      }
    }
  };

  React.useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
      }
      let location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude, accuracy } = location.coords;
      setFieldValue("latitude", latitude.toFixed(2));
      setFieldValue("longitude", longitude.toFixed(2));
    })();
  }, []);

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

  console.log("gallyerCopmo", galleryImage);
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
                <Box>
                  <Text variant="silentText">Location</Text>
                  <Box flexDirection="row" justifyContent="space-between">
                    <TextField
                      keyboardType="numeric"
                      onChangeText={handleChange("latitude")}
                      onBlur={handleBlur("latitude")}
                      error={errors.latitude}
                      touched={touched.latitude}
                      value={values.latitude}
                      placeholder="Latitude"
                    />
                    <TextField
                      keyboardType="numeric"
                      value={values.longitude}
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
  createNewHub: (data: postNewHubProps, images: []) =>
    dispatch(postNewHub(data, images)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommunityRegister);
