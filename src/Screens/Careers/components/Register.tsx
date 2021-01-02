import React, { useEffect, useState } from "react";
import {
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { Picker } from "@react-native-community/picker";
import DatePicker from "@react-native-community/datetimepicker";
import moment from "moment";
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
import * as DocumentPicker from "expo-document-picker";
import { Feather as Icon } from "@expo/vector-icons";
import { connect } from "react-redux";
import restServices from "../../../services/restServices";
import { MonthPicker } from "react-native-propel-kit";
import { postNewCV } from "../../../actions/careerActions";
import { event } from "react-native-reanimated";
interface RegisterProps {
  findJob: (data: any, navigation: any) => void;
  careerState: any;
  navigation: any;
}
const { width: wWidth, height: wHeight } = Dimensions.get("window");
const validationSchema = Yup.object().shape({});
const Register = ({ findJob, careerState, navigation }: RegisterProps) => {
  const [uploading, setUploading] = useState(false);
  const [isEdu, setIsEdu] = useState(false);
  const [isSkill, setIsSkill] = useState(false);
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
      about: "",
      phoneNumber: "",
      email: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      country: "",
      pincode: "",
      // TextInput till Here Created
      educationLevel: "", // dropdown
      fieldOfStudy: "", // textInput
      collegeName: "",
      currentlyStudyingHere: false,

      companyCity: "",
      companyFromMonth: "",
      companyFromYear: "",
      companyName: "",
      companyToMonth: "",
      companyToYear: "",
      currentlyWorkingHere: false,
      // TODO:  Need to work from here
      studyFromMonth: moment().format("MM/YYYY"),
      studyFromYear: "",
      studyToMonth: moment().format("MM/YYYY"),
      studyToYear: "",
      jobTitle: "",
      // experiences
      experiencesCompanyName: "",
      experiencesCompanyCity: "",
      experiencesCompanyFrom: "",
      experiencesCompanyTo: "",
      experiencesCurrentlyWorkingHere: false,
      experiencesJobTitle: "",
      // experiences: [
      //   {
      //     companyCity: "",
      //     companyFromMonth: "string",
      //     companyFromYear: "string",
      //     companyName: "string",
      //     companyToMonth: "string",
      //     companyToYear: "string",
      //     currentlyWorkingHere: true,
      //     jobTitle: "string",
      //   },
      // ],
      workDescription: "",
      workExperience: false,
      skills: "",
      preferedJobTitle: "",
      preferedJobSalary: "",
      willingToRelocate: false,
      pdf: "",
      profilePic: "",

      // Job Type
      isFullTime: false,
      isContract: false,
      isInternship: false,
      isFresher: false,
      isWalkIn: false,
      isPartTime: false,
      isTemporary: false,
      isCommission: false,
      isVolunteer: false,
    },
    onSubmit: (values) => {
      const type: any = {
        FullTime: values.isFullTime,
        Contract: values.isContract,
        Internship: values.isInternship,
        Fresher: values.isFresher,
        WalkIn: values.isWalkIn,
        PartTime: values.isPartTime,
        Temporary: values.isTemporary,
        Commission: values.isCommission,
        Volunteer: values.isVolunteer,
      };
      const getTypes = Object.keys(type).filter((v: any) => {
        return type[v] === true;
      });

      const dataToSend = {
        about: "",
        addressLine1: values.addressLine1,
        addressLine2: values.addressLine2,
        city: values.city,
        collegeName: values.collegeName,
        companyCity: values.companyCity,
        companyFromMonth: values.companyFromMonth,
        companyFromYear: values.companyFromYear,
        companyName: values.companyName,
        companyToMonth: values.companyToMonth,
        companyToYear: values.companyToYear,
        country: values.country,
        currentlyStudyingHere: values.currentlyStudyingHere,
        currentlyWorkingHere: values.currentlyWorkingHere,
        educationLevel: "PRIMARY", // TODO: edurationlevel
        email: values.email,
        // experiences: [
        //   {
        //     companyCity: "",
        //     companyFromMonth: "string",
        //     companyFromYear: "string",
        //     companyName: "string",
        //     companyToMonth: "string",
        //     companyToYear: "string",
        //     currentlyWorkingHere: true,
        //     jobTitle: "string",
        //   },
        // ],
        fieldOfStudy: values.fieldOfStudy,
        fullName: values.fullName,
        jobTitle: values.jobTitle,
        pdf: values.pdf,
        phoneNumber: values.phoneNumber,
        pincode: values.pincode,
        preferedJobSalary: values.preferedJobSalary,
        preferedJobTitle: values.preferedJobTitle,
        preferedJobType: getTypes.toString(),
        profilePic: values.profilePic,
        skills: values.skills,
        state: values.state,
        studyFromMonth: values.studyFromMonth,
        studyFromYear: values.studyFromYear,
        studyToMonth: values.studyToMonth,
        studyToYear: values.studyToYear,
        willingToRelocate: values.willingToRelocate,
        workDescription: values.workDescription,
        workExperience: values.workExperience,
      };
      console.log("typeslist", getTypes.toString());
      // findJob(values, navigation);
    },
  });
  const [show, setShow] = useState(false);

  const handleStudyFrom = (event, selectedDate) => {
    const selected = moment(selectedDate).format("MM/YYYY");
    setFieldValue("studyFromMonth", selected);
    setShow(false);
  };
  const handleStudyTo = (event, selectedDate) => {
    const selected = moment(selectedDate).format("MM/YYYY");
    setFieldValue("studyToMonth", selected);
    setShow(false);
  };

  const getPdfFile = async () => {
    setUploading(true);
    const result: any = await DocumentPicker.getDocumentAsync({
      type: "application/pdf",
      copyToCacheDirectory: false,
    });
    if (result.type !== "success") {
      setUploading(false);
    }
    if (result.uri && result.type === "success") {
      const _rest = new restServices();
      _rest
        .getPdfUrl(result)
        .then((res) => {
          const url = res.data.url;
          setFieldValue("pdf", url);
          setUploading(false);
        })
        .catch((err) => {
          setUploading(false);
        });
    }
  };
  const { postingCv, postedCv, errorPosting } = careerState;
  useEffect(() => {
    if (postedCv !== "") {
      ToastAndroid.showWithGravity(
        "CV ADDED",
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM
      );
    } else if (errorPosting !== "") {
      ToastAndroid.showWithGravity(
        "Error Try Again",
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM
      );
    }
  }, [postedCv, errorPosting]);
  const handleResumeRemove = () => {
    setFieldValue("pdf", "");
    setUploading(false);
  };
  return (
    <Box flex={1} marginBottom="l" flexDirection="column">
      <ScrollView>
        <KeyboardAvoidingView>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Box marginHorizontal="xl">
              <TextField
                onChangeText={handleChange("about")}
                onBlur={handleBlur("about")}
                error={errors.about}
                touched={touched.about}
                placeholder="About"
              />
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
                onChangeText={handleChange("pincode")}
                onBlur={handleBlur("pincode")}
                error={errors.pincode}
                touched={touched.pincode}
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
                selectedValue={values.educationLevel}
                onValueChange={(itemValue, itemIndex) =>
                  setFieldValue("educationLevel", itemValue)
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
              {/* <Box marginVertical="s">
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
              /> */}
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
                  checked={values.currentlyStudyingHere}
                  onChange={() =>
                    setFieldValue(
                      "currentlyStudyingHere",
                      !values.currentlyStudyingHere
                    )
                  }
                  label="I Currently go Here"
                />
              </Box>

              <Box marginTop="s">
                <Text color="primaryText" variant="cardSubTitle">
                  From
                </Text>
                <TouchableWithoutFeedback onPress={() => setShow(true)}>
                  <Text>{values.studyFromMonth}</Text>
                </TouchableWithoutFeedback>
                {show ? (
                  <DatePicker
                    testID="datePicker"
                    value={new Date()}
                    mode={"date"}
                    display="default"
                    onChange={handleStudyFrom}
                  />
                ) : null}

                <Text color="primaryText" variant="cardSubTitle">
                  To
                </Text>
                <TouchableWithoutFeedback onPress={() => setShow(true)}>
                  <Text>{values.studyToMonth}</Text>
                </TouchableWithoutFeedback>
                {show ? (
                  <DatePicker
                    testID="datePicker"
                    value={new Date()}
                    mode={"date"}
                    display="default"
                    onChange={handleStudyTo}
                  />
                ) : null}
                <Box marginVertical="s">
                  <CheckBox
                    checked={isEdu}
                    onChange={() => setIsEdu(!isEdu)}
                    label="I do not want to enter my education."
                  />
                </Box>
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
                onChangeText={handleChange("experiencesCompanyName")}
                onBlur={handleBlur("experiencesCompanyName")}
                error={errors.experiencesCompanyName}
                touched={touched.experiencesCompanyName}
                placeholder="Company Name"
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
                onChangeText={handleChange("experiencesCompanyCity")}
                onBlur={handleBlur("experiencesCompanyCity")}
                error={errors.experiencesCompanyCity}
                touched={touched.experiencesCompanyCity}
                placeholder="Company City"
              />

              <Box
                marginVertical="l"
                flexDirection="row"
                justifyContent="space-between"
              >
                <CheckBox
                  checked={values.experiencesCurrentlyWorkingHere}
                  onChange={() =>
                    setFieldValue(
                      "experiencesCurrentlyWorkingHere",
                      !values.experiencesCurrentlyWorkingHere
                    )
                  }
                  label="I Currently go Here"
                />
              </Box>
              <Box marginTop="s">
                <Text color="primaryText" variant="cardSubTitle">
                  From
                </Text>
                <TouchableWithoutFeedback onPress={() => setShow(true)}>
                  <Text>{values.experiencesCompanyFrom}</Text>
                </TouchableWithoutFeedback>
                {show ? (
                  <DatePicker
                    testID="datePicker"
                    value={new Date()}
                    mode={"date"}
                    display="default"
                    onChange={handleStudyFrom}
                  />
                ) : null}

                <Text color="primaryText" variant="cardSubTitle">
                  To
                </Text>
                <TouchableWithoutFeedback onPress={() => setShow(true)}>
                  <Text>{values.experiencesCompanyTo}</Text>
                </TouchableWithoutFeedback>
                {show ? (
                  <DatePicker
                    testID="datePicker"
                    value={new Date()}
                    mode={"date"}
                    display="default"
                    onChange={handleStudyFrom}
                  />
                ) : null}
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
                  onChangeText={handleChange("workDescription")}
                  onBlur={handleBlur("workDescription")}
                  error={errors.workDescription}
                  touched={touched.workDescription}
                  placeholder="Description"
                />
              </Box>
              <Box
                marginVertical="l"
                flexDirection="row"
                justifyContent="space-between"
              >
                <CheckBox
                  checked={values.workExperience}
                  onChange={() =>
                    setFieldValue("workExperience", !values.workExperience)
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
                {/* <Box>
                  <Button title="Add" onPress={() => {}} />
                </Box> */}
              </Box>

              {/* // TODO: Disable skills Here */}
              <Box
                marginVertical="l"
                flexDirection="row"
                justifyContent="space-between"
              >
                <CheckBox
                  checked={isSkill}
                  onChange={() => setIsSkill(!isSkill)}
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
                onChangeText={handleChange("preferedJobTitle")}
                onBlur={handleBlur("preferedJobTitle")}
                error={errors.preferedJobTitle}
                touched={touched.preferedJobTitle}
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
                keyboardType="number-pad"
                onChangeText={handleChange("preferedJobSalary")}
                onBlur={handleBlur("preferedJobSalary")}
                error={errors.preferedJobSalary}
                touched={touched.preferedJobSalary}
                placeholder="Desired Salary"
              />

              <Box marginTop="s">
                <Text color="primaryText" variant="cardSubTitle">
                  Relocation
                </Text>
              </Box>
              <Box marginTop="s">
                <CheckBox
                  checked={values.willingToRelocate}
                  onChange={() =>
                    setFieldValue(
                      "willingToRelocate",
                      !values.willingToRelocate
                    )
                  }
                  label="I am willing to relocate"
                />
              </Box>
            </Box>
            {/* //! Cv Section       */}
            <Box>
              <LargeButton
                loading={uploading}
                onPress={() => getPdfFile()}
                label={
                  values.pdf !== "" ? "Resume Added" : "Upload to replace CV"
                }
              />
              <Box marginVertical="s">
                <Text textAlign="center" fontSize={10} variant="silentText">
                  You can upload a new or replace the existing one
                </Text>
              </Box>
              <Box marginVertical="s" marginHorizontal="xl">
                <TouchableWithoutFeedback onPress={() => handleResumeRemove()}>
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
                <TouchableWithoutFeedback onPress={() => getPdfFile()}>
                  <Box
                    alignItems="center"
                    justifyContent="flex-start"
                    flexDirection="row"
                  >
                    <Icon name="download" color="blue" />
                    <Text>Upload A new Resume</Text>
                  </Box>
                </TouchableWithoutFeedback>
              </Box>
            </Box>
            <LargeButton
              loading={postingCv}
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
    careerState: state.career,
  };
}

const mapDispatchToProps = (dispatch: any) => ({
  findJob: (data: any, navigation: any) =>
    dispatch(postNewCV(data, navigation)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
