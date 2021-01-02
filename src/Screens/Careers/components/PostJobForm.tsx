import React, { useCallback, useEffect, useState } from "react";
import {
  RectButton,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { Picker } from "@react-native-community/picker";

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
import { createNewCareer } from "../../../actions/careerActions";
import { getLocalImage } from "../../../utils/getLocalImage";
interface RegisterProps {
  createNewJobPosting: (data: any, navigation: any) => void;
  postNewJob: any;
  navigation: any;
}
const { width: wWidth, height: wHeight } = Dimensions.get("window");
const validationSchema = Yup.object().shape({
  aboutTalent: Yup.string(),
  addressLine1: Yup.string(),
  addressLine2: Yup.string(),
  city: Yup.string(),
  country: Yup.string(),
  coverImage: Yup.string(),
  employerEmail: Yup.string().email(),
  employerName: Yup.string(),
  employerPhoneNumber: Yup.string(),

  jobTitle: Yup.string(),
  pinCode: Yup.string().length(6),
  state: Yup.string(),
  video: Yup.string(),
});
const PostJobForm = ({
  createNewJobPosting,
  navigation,
  postNewJob,
}: RegisterProps) => {
  const [videoUploading, setVideoUploading] = useState(false);

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
      addressLine1: "",
      addressLine2: "",
      city: "",
      companyName: "",
      country: "",
      coverImage: "",
      description: "",
      education: "",
      employerEmail: "",
      employerName: "",
      employerPhoneNumber: "",
      experience: "",
      jd: "",
      jobTitle: "",
      pinCode: "",
      state: "",
    },
    onSubmit: (values) => {
      const data = {
        employerName: values.employerName,
        employerPhoneNumber: values.employerPhoneNumber,
        employerEmail: values.employerEmail,

        addressLine1: values.addressLine1,
        addressLine2: values.addressLine2,

        city: values.city,
        state: values.state,
        country: values.country,
        pinCode: values.pinCode,
        jobTitle: values.jobTitle,
        jd: values.jd,
        description: values.description,

        companyName: values.companyName,

        education: values.education,

        experience: values.experience,
        coverImage: values.coverImage,
      };

      createNewJobPosting(data, navigation);
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

  const { postingNewJob, postedNewJob, errorPostingNewJob } = postNewJob;

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
              <TextField
                onChangeText={handleChange("jd")}
                onBlur={handleBlur("jd")}
                error={errors.jd}
                touched={touched.jd}
                placeholder="Job Description"
              />
              <TextField
                onChangeText={handleChange("companyName")}
                onBlur={handleBlur("companyName")}
                error={errors.companyName}
                touched={touched.companyName}
                placeholder="Company Name"
              />
              <TextField
                onChangeText={handleChange("description")}
                onBlur={handleBlur("description")}
                error={errors.description}
                touched={touched.description}
                placeholder="Description"
              />
              <TextField
                onChangeText={handleChange("education")}
                onBlur={handleBlur("education")}
                error={errors.education}
                touched={touched.education}
                placeholder="Education"
              />
              <TextField
                onChangeText={handleChange("experience")}
                onBlur={handleBlur("experience")}
                error={errors.experience}
                touched={touched.experience}
                placeholder="Experience"
              />
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
            </Box>

            <LargeButton
              loading={postingNewJob}
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
    postNewJob: state.career,
  };
}

const mapDispatchToProps = (dispatch: any) => ({
  createNewJobPosting: (data: any, navigation: any) =>
    dispatch(createNewCareer(data, navigation)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostJobForm);
