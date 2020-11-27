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
      fullName: "",
      contactNumber: "",
      email: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      country: "",
      pinCode: "",
      currentStatus: false,
      collegeUniversity: "",
      levelOfEdu: "",
      enterEdu: false,
      isWorkExperience: false,
      company: "",
      jobTitle: "",
      desiredJobTitle: "",
      fieldOfStudy: "",
      desiredSalary: "",
      description: "",
      isFullTime: false,
      isContract: false,
      isInternship: false,
      isFresher: false,
      isWalkIn: false,
      isPartTime: false,
      isTemporary: false,
      isCommission: false,
      isVolunteer: false,
      isRelocate: false,
      skills: "",
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
                onChangeText={handleChange("fullName")}
                onBlur={handleBlur("fullName")}
                error={errors.fullName}
                touched={touched.fullName}
                placeholder="Your Full Name"
              />
              <TextField
                keyboardType="number-pad"
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
                keyboardType="phone-pad"
                onChangeText={handleChange("pinCode")}
                onBlur={handleBlur("pinCode")}
                error={errors.pinCode}
                touched={touched.pinCode}
                placeholder="Pin Code"
              />
              {/* //! Education */}
              <Box marginVertical="s">
                <Text color="primaryText" variant="cardSubTitle">
                  Education
                </Text>
              </Box>
              <Text color="primaryText" variant="cardSubTitle">
                Level Of Education
              </Text>
              <Picker
                selectedValue={values.levelOfEdu}
                onValueChange={(itemValue, itemIndex) =>
                  setFieldValue("levelOfEdu", itemValue)
                }
              >
                <Picker.Item label="Intermediate" value="Intermediate" />
                <Picker.Item label="Graduate" value="Graduate" />
              </Picker>
              <Box marginVertical="s">
                <Text color="primaryText" variant="cardSubTitle">
                  Field of Study
                </Text>
                <Text variant="silentText" fontSize={10}>
                  e.g. Biology, Computer Science, Intellectual Property,
                  Nursing, Psychology
                </Text>
              </Box>
              <TextField
                onChangeText={handleChange("fieldOfStudy")}
                onBlur={handleBlur("fieldOfStudy")}
                error={errors.fieldOfStudy}
                touched={touched.fieldOfStudy}
                placeholder="Field Of Study"
              />
              <Box marginVertical="s">
                <Text color="primaryText" variant="cardSubTitle">
                  College or University
                </Text>
              </Box>
              <TextField
                onChangeText={handleChange("collegeUniversity")}
                onBlur={handleBlur("collegeUniversity")}
                error={errors.collegeUniversity}
                touched={touched.collegeUniversity}
                placeholder="College Or University"
              />
              <Box marginVertical="s">
                <Text color="primaryText" variant="cardSubTitle">
                  City - India(change)
                </Text>
                <Text variant="silentText" fontSize={10}>
                  eg. Mumbai
                </Text>
              </Box>
              <TextField
                onChangeText={handleChange("city")}
                onBlur={handleBlur("city")}
                error={errors.city}
                touched={touched.city}
                placeholder="City"
              />
              <Box marginVertical="s">
                <Text color="primaryText" variant="cardSubTitle">
                  Time Period
                </Text>
              </Box>
              <Box
                marginVertical="l"
                flexDirection="row"
                justifyContent="space-between"
              >
                <CheckBox
                  checked={values.currentStatus}
                  onChange={() =>
                    setFieldValue("currentStatus", !values.currentStatus)
                  }
                  label="I Currently go Here"
                />
              </Box>

              <Box marginTop="s">
                <Text color="primaryText" variant="cardSubTitle">
                  From
                </Text>
                <MonthPicker
                  placeholder={"Pick a month"}
                  title={"Pick a month"}
                  value={timePeriodDateFrom}
                  onChange={setTimePeriodDateFrom}
                />

                <Text color="primaryText" variant="cardSubTitle">
                  To
                </Text>
                <MonthPicker
                  placeholder={"Pick a month"}
                  title={"Pick a month"}
                  value={timePeriodDateTo}
                  onChange={setTimePeriodDateTo}
                />

                <CheckBox
                  checked={values.enterEdu}
                  onChange={() =>
                    setFieldValue("currentStatus", !values.enterEdu)
                  }
                  label="I do not want to enter my education."
                />
              </Box>
              <Box marginTop="m">
                <Text color="primaryText" variant="cardSubTitle">
                  Work Experience(Current)
                </Text>
              </Box>
              <TextField
                onChangeText={handleChange("jobTitle")}
                onBlur={handleBlur("jobTitle")}
                error={errors.jobTitle}
                touched={touched.jobTitle}
                placeholder="Job Title"
              />
              <TextField
                onChangeText={handleChange("company")}
                onBlur={handleBlur("company")}
                error={errors.company}
                touched={touched.company}
                placeholder="Company"
              />

              <Box marginTop="s">
                <Text color="primaryText" variant="cardSubTitle">
                  City - India(change)
                </Text>
                <Text fontSize={10} variant="silentText">
                  eg. Mumbai
                </Text>
              </Box>
              <TextField
                onChangeText={handleChange("city")}
                onBlur={handleBlur("city")}
                error={errors.city}
                touched={touched.city}
                placeholder="City"
              />

              <Box
                marginVertical="l"
                flexDirection="row"
                justifyContent="space-between"
              >
                <CheckBox
                  checked={values.currentStatus}
                  onChange={() =>
                    setFieldValue("currentStatus", !values.currentStatus)
                  }
                  label="I Currently go Here"
                />
              </Box>
              <Box marginTop="s">
                <Text color="primaryText" variant="cardSubTitle">
                  From
                </Text>
                <MonthPicker
                  placeholder={"Pick a month"}
                  title={"Pick a month"}
                  value={timePeriodDateFrom}
                  onChange={setTimePeriodDateFrom}
                />
                <Text color="primaryText" variant="cardSubTitle">
                  To
                </Text>
                <MonthPicker
                  placeholder={"Pick a month"}
                  title={"Pick a month"}
                  value={timePeriodDateTo}
                  onChange={setTimePeriodDateTo}
                />
              </Box>
              <Box>
                <Text color="primaryText" variant="cardSubTitle">
                  Description
                </Text>
                <Text fontSize={10} variant="silentText">
                  In 30 or more words describe your professional
                  responsibilities and accomplishments.(Eg: Maintained inventory
                  of office supplies and ordered as and when needed)
                </Text>
                <TextField
                  multiline={true}
                  numberOfLines={4}
                  onChangeText={handleChange("description")}
                  onBlur={handleBlur("description")}
                  error={errors.description}
                  touched={touched.description}
                  placeholder="Description"
                />
              </Box>
              <Box
                marginVertical="l"
                flexDirection="row"
                justifyContent="space-between"
              >
                <CheckBox
                  checked={values.currentStatus}
                  onChange={() =>
                    setFieldValue("currentStatus", !values.currentStatus)
                  }
                  label="I don't have any work experience yet"
                />
              </Box>
              {/* //! Skills section */}

              <Box marginTop="s">
                <Text color="primaryText" variant="cardSubTitle">
                  Add a new skill
                </Text>
                <Text fontSize={10} variant="silentText">
                  eg. Microsoft Office, Java, Tally, Python etc.
                </Text>
              </Box>
              <Box
                alignItems="center"
                justifyContent="space-between"
                flexDirection="row"
              >
                <Box style={{ width: "90%" }}>
                  <TextField
                    onChangeText={handleChange("skills")}
                    onBlur={handleBlur("skills")}
                    error={errors.skills}
                    touched={touched.skills}
                    placeholder="Skills"
                  />
                </Box>
                <Box>
                  <Button title="Add" onPress={() => {}} />
                </Box>
              </Box>

              <Box
                marginVertical="l"
                flexDirection="row"
                justifyContent="space-between"
              >
                <CheckBox
                  checked={values.isWorkExperience}
                  onChange={() =>
                    setFieldValue("isWorkExperience", !values.isWorkExperience)
                  }
                  label="I do not want to enter any skills at this time"
                />
              </Box>
              <Box>
                <Text color="primaryText" variant="cardSubTitle">
                  Job Preferences
                </Text>
                <Text color="primaryText" variant="cardSubTitle">
                  Desired Job Title
                </Text>
              </Box>

              <TextField
                onChangeText={handleChange("desiredJobTitle")}
                onBlur={handleBlur("desiredJobTitle")}
                error={errors.desiredJobTitle}
                touched={touched.desiredJobTitle}
                placeholder="Desired Job Title"
              />
              <Box marginTop="m">
                <Text color="primaryText" variant="cardSubTitle">
                  Desired Job Types
                </Text>
              </Box>

              <Box marginTop="s">
                <Box flexDirection="row" justifyContent="space-between">
                  <Box>
                    <CheckBox
                      checked={values.isFullTime}
                      onChange={() =>
                        setFieldValue("isFullTime", !values.isFullTime)
                      }
                      label="Full-time"
                    />
                    <CheckBox
                      checked={values.isContract}
                      onChange={() =>
                        setFieldValue("isContract", !values.isContract)
                      }
                      label="Contract"
                    />

                    <CheckBox
                      checked={values.isInternship}
                      onChange={() =>
                        setFieldValue("isInternship", !values.isInternship)
                      }
                      label="Internship"
                    />
                    <CheckBox
                      checked={values.isFresher}
                      onChange={() =>
                        setFieldValue("isFresher", !values.isFresher)
                      }
                      label="Fresher"
                    />
                    <CheckBox
                      checked={values.isWalkIn}
                      onChange={() =>
                        setFieldValue("isWalkIn", !values.isWalkIn)
                      }
                      label="Walk-in"
                    />
                  </Box>
                  <Box>
                    <CheckBox
                      checked={values.isPartTime}
                      onChange={() =>
                        setFieldValue("isPartTime", !values.isPartTime)
                      }
                      label="Part-time"
                    />
                    <CheckBox
                      checked={values.isTemporary}
                      onChange={() =>
                        setFieldValue("isTemporary", !values.isTemporary)
                      }
                      label="Temporary"
                    />
                    <CheckBox
                      checked={values.isCommission}
                      onChange={() =>
                        setFieldValue("isCommission", !values.isCommission)
                      }
                      label="Commission"
                    />
                    <CheckBox
                      checked={values.isVolunteer}
                      onChange={() =>
                        setFieldValue("isVolunteer", !values.isVolunteer)
                      }
                      label="Volunteer"
                    />
                  </Box>
                </Box>
              </Box>
              <Box marginTop="s">
                <Text color="primaryText" variant="cardSubTitle">
                  Desired Salary
                </Text>
              </Box>

              <TextField
                onChangeText={handleChange("desiredSalary")}
                onBlur={handleBlur("desiredSalary")}
                error={errors.desiredSalary}
                touched={touched.desiredSalary}
                placeholder="Desired Salary"
              />

              <Box marginTop="s">
                <Text color="primaryText" variant="cardSubTitle">
                  Relocation
                </Text>
              </Box>
              <Box marginTop="s">
                <CheckBox
                  checked={values.isRelocate}
                  onChange={() =>
                    setFieldValue("isRelocate", !values.isRelocate)
                  }
                  label="I am willing to relocate"
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
