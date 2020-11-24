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
interface PostProductProps {}

const validationSchema = Yup.object().shape({
  pname: Yup.string().required(),
  contact: Yup.string().length(10).required(),
  email: Yup.string().required(), //TODO: Validate Email
  city: Yup.string().required(),
  upload: Yup.string().required(),
  description: Yup.string().required(),
});
const JewelleryRegister = ({}: PostProductProps) => {
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
      callback: false,
      tmc: false,
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const [galleryImage, setGalleryImage] = useState<any[]>([]);
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
                  checked={values.tmc}
                  onChange={() => setFieldValue("tmc", !values.tmc)}
                  label="Shop"
                />
                <CheckBox
                  checked={values.callback}
                  onChange={() => setFieldValue("callback", !values.callback)}
                  label="Vendors"
                />
                <CheckBox
                  checked={values.tmc}
                  onChange={() => setFieldValue("tmc", !values.tmc)}
                  label="Workers"
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
            <LargeButton onPress={handleSubmit} label="POST" />
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ScrollView>
    </Box>
  );
};

export default JewelleryRegister;