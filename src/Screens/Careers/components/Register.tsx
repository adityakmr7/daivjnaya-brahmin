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
import { postNewCV } from "../../../actions/careerActions";
interface RegisterProps {}
const { width: wWidth, height: wHeight } = Dimensions.get("window");
const validationSchema = Yup.object().shape({
  name: Yup.string(),
  contact: Yup.string().length(10),
  community: Yup.string(),
  email: Yup.string().email().required(),
  city: Yup.string(),
  tellUs: Yup.number(),
});
const Register = ({}: RegisterProps) => {
  const [galleryImage, setGalleryImage] = useState<any[]>([]);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // const [timePeriodDateTo, setTimePeriodDateTo] = useState<Date>(new Date());
  // const [timePeriodDateFrom, setTimePeriodDateFrom] = useState<Date>(
  //   new Date()
  // );

  // const [cityDateTo, setCityDateTo] = useState<Date>(new Date());
  // const [cityDateFrom, setCityDateFrom] = useState<Date>(new Date());

  // {

  //   "companyCity": "string",
  //   "companyFromMonth": "string",
  //   "companyFromYear": "string",
  //   "companyName": "string",
  //   "companyToMonth": "string",
  //   "companyToYear": "string",
  //   "country": "string",
  //   "currentlyStudyingHere": true,
  //   "currentlyWorkingHere": true,
  //   "educationLevel": "PRIMARY",
  //   "fieldOfStudy": "string",
  //   "jobTitle": "string",
  //   "pdf": "string",

  //   "preferedJobSalary": "string",
  //   "preferedJobTitle": "string",
  //   "preferedJobType": "string",
  //   "skills": "string",
  //   "state": "string",
  //   "studyFromMonth": "string",
  //   "studyFromYear": "string",
  //   "studyToMonth": "string",
  //   "studyToYear": "string",
  //   "willingToRelocate": true,
  //   "workDescription": "string",
  //   "workExperience": true
  // }

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
      phoneNumber: "",
      email: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      country: "",
      pinCode: "",
      currentStatus: false,
      collegeName: "",
      levelOfEdu: "",
      enterEdu: false,
      isWorkExperience: false,

      timePeriodDateTo: new Date(),
      timePeriodDateFrom: new Date(),
      cityDateTo: new Date(),
      cityDateFrom: new Date(),
      company: "",
      jobTitle: "",
      desiredJobTitle: "",
      fieldOfStudy: "",
      desiredSalary: "",
      description: "",
      skills: "",
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
                onChangeText={handleChange("collegeName")}
                onBlur={handleBlur("collegeName")}
                error={errors.collegeName}
                touched={touched.collegeName}
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
                  value={values.timePeriodDateFrom}
                  onChange={(e: any) => setFieldValue("timePeriodDateFrom", e)}
                />

                <Text color="primaryText" variant="cardSubTitle">
                  To
                </Text>
                <MonthPicker
                  placeholder={"Pick a month"}
                  title={"Pick a month"}
                  value={values.timePeriodDateTo}
                  onChange={(e: any) => setFieldValue("timePeriodDateTo", e)}
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
                  value={values.cityDateFrom}
                  onChange={(e: any) => setFieldValue("cityDateFrom", e)}
                />
                <Text color="primaryText" variant="cardSubTitle">
                  To
                </Text>
                <MonthPicker
                  placeholder={"Pick a month"}
                  title={"Pick a month"}
                  value={values.cityDateTo}
                  onChange={(e: any) => setFieldValue("cityDateTo", e)}
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
            {/* //! Cv Section       */}
            <Box>
              <LargeButton onPress={() => {}} label={"Upload to replace CV"} />
              <Box marginVertical="s">
                <Text textAlign="center" fontSize={10} variant="silentText">
                  You can upload a new or replace the existing one
                </Text>
              </Box>
              <Box marginVertical="s" marginHorizontal="xl">
                <TouchableWithoutFeedback>
                  <Box
                    marginVertical="s"
                    alignItems="center"
                    justifyContent="flex-start"
                    flexDirection="row"
                  >
                    <Icon name="trash-2" color="red" />
                    <Text>Remove Your Resume</Text>
                  </Box>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                  <Box
                    alignItems="center"
                    justifyContent="flex-start"
                    flexDirection="row"
                  >
                    <Icon name="download" color="blue" />
                    <Text>Remove Your Resume</Text>
                  </Box>
                </TouchableWithoutFeedback>
              </Box>
              <Box
                marginHorizontal="xl"
                flexDirection="row"
                justifyContent="space-between"
              >
                <Text>Upload Your Profile Picture</Text>
                <Text>Upload</Text>
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
    hubState: state.career,
  };
}

const mapDispatchToProps = (dispatch: any) => ({
  findJob: (data: any) => dispatch(postNewCV(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
