import React, { useEffect } from "react";
import { Dimensions, Image } from "react-native";
import { Box, CheckBox, LargeButton, Text, TextField } from "../../components";
import * as Yup from "yup";
import { ErrorMessage, useFormik } from "formik";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { combineAuthStackProps } from ".";
import { userSignup } from "../../actions/authActions";
import { connect } from "react-redux";
import { useToast } from "react-native-styled-toast";

import { AuthState } from "../../reducers/authReducer";
import { Picker } from "@react-native-community/picker";
const { width: wWidth, height: wHeight } = Dimensions.get("window");

interface SignupProps {
  navigation: combineAuthStackProps<"SignUp">;
  userSignupState: AuthState;
  userSignUp: (
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    navigation: any
  ) => void;
}
const lastNameList = [
  { id: 1, lName: "Achrekar" },
  { id: 2, lName: "Anvekar" },
  { id: 3, lName: "Amrute" },
  { id: 4, lName: "Arkashali" },
  { id: 5, lName: "Aryamane" },
  { id: 6, lName: "Baikerikar" },
  { id: 7, lName: "Bandivadekar" },
  { id: 8, lName: "Bandodkar" },
  { id: 9, lName: "Belekar" },
  { id: 10, lName: "Belvalkar" },
  { id: 11, lName: "Bhadekar" },
  { id: 12, lName: "Bhatt" },
  { id: 13, lName: "Bhide" },
  { id: 14, lName: "Borkar" },
  { id: 15, lName: "Chachad" },
  { id: 16, lName: "Chandgadkar" },
  { id: 17, lName: "Chapwale" },
  { id: 18, lName: "Chindarkar" },
  { id: 19, lName: "Chiplunkar" },
  { id: 20, lName: "Chodankar" },
  { id: 21, lName: "Daivajna" },
  { id: 22, lName: "Devrukhkar or Deorukhkar" },
  { id: 23, lName: "Dhargalkar" },
  { id: 24, lName: "Dhotre" },
  { id: 25, lName: "Gangolli" },
  { id: 26, lName: "Ghosalkar" },
  { id: 27, lName: "Guhagarkar" },
  { id: 28, lName: "Gujrathi" },
  { id: 29, lName: "Haldankar" },
  { id: 30, lName: "Hate" },
  { id: 31, lName: "Hatkar" },
  { id: 32, lName: "Herekar" },
  { id: 33, lName: "Jamsandekar" },
  { id: 34, lName: "Jannu" },
  { id: 35, lName: "Jathar" },
  { id: 36, lName: "Kagalkar" },
  { id: 37, lName: "Kannikar" },
  { id: 38, lName: "Kale" },
  { id: 39, lName: "Kagalka" },
  { id: 40, lName: "Karekar" },
  { id: 41, lName: "Kerkar" },
  { id: 42, lName: "Khandeparkar" },
  { id: 43, lName: "Khedekar" },
  { id: 44, lName: "Kolvekar" },
  { id: 45, lName: "Kshirsagar" },
  { id: 46, lName: "Kudtarkar" },
  { id: 47, lName: "Kulkarni" },
  { id: 48, lName: "Kundpura" },
  { id: 49, lName: "Kurdekar" },
  { id: 50, lName: "Kuste" },
  { id: 51, lName: "Lotlikar" },
  { id: 52, lName: "Madkaikar" },
  { id: 53, lName: "Maldikar" },
  { id: 54, lName: "Malandkar" },
  { id: 55, lName: "Malekar" },
  { id: 56, lName: "Malondkar" },
  { id: 57, lName: "Malpekar" },
  { id: 58, lName: "Mankame" },
  { id: 59, lName: "Mhashelkar" },
  { id: 60, lName: "Mhashilkar" },
  { id: 61, lName: "Mislankar" },
  { id: 62, lName: "Mitkar" },
  { id: 63, lName: "Mohare" },
  { id: 64, lName: "Murkute" },
  { id: 65, lName: "Pednekar" },
  { id: 66, lName: "Pawaskar" },
  { id: 67, lName: "Pauskar" },
  { id: 68, lName: "Paudwal" },
  { id: 69, lName: "Patkar" },
  { id: 70, lName: "Palshetkar" },
  { id: 71, lName: "Palankar" },
  { id: 72, lName: "Paithankar" },
  { id: 73, lName: "Nerurkar" },
  { id: 74, lName: "Nesrikar" },
  { id: 75, lName: "Navghare" },
  { id: 76, lName: "Narvekar" },
  { id: 77, lName: "Narkar" },
  { id: 78, lName: "Nagvekar" },
  { id: 79, lName: "Shankarsheth" },
  { id: 80, lName: "Sawkar" },
  { id: 81, lName: "Salkar" },
  { id: 82, lName: "Satvilkar" },
  { id: 83, lName: "Saitavdekar" },
  { id: 84, lName: "Sanu" },
  { id: 85, lName: "Sambhare" },
  { id: 86, lName: "Rajapurkar" },
  { id: 87, lName: "Revankar" },
  { id: 88, lName: "Rao" },
  { id: 89, lName: "Ramamurthy" },
  { id: 90, lName: "Raikar" },
  { id: 91, lName: "Prabhulikar" },
  { id: 92, lName: "Powale" },
  { id: 93, lName: "Potdar" },
  { id: 94, lName: "Pitale" },
  { id: 95, lName: "Pendurkar" },
  { id: 96, lName: "Shet" },
  { id: 97, lName: "Shejwadkar" },
  { id: 98, lName: "Shejekan" },
  { id: 99, lName: "Verlekar" },
  { id: 100, lName: "Vedpathak" },
  { id: 101, lName: "Vedak" },
  { id: 102, lName: "Vaiude" },
  { id: 103, lName: "Vaidya" },
  { id: 104, lName: "Vagal" },
  { id: 105, lName: "Usapkar" },
  { id: 106, lName: "Umrotkar" },
  { id: 107, lName: "Shirodkar" },
  { id: 108, lName: "Vernekar" },
  { id: 109, lName: "Vesnekar" },
  { id: 110, lName: "Vithalkar" },
  { id: 111, lName: "Wagal" },
];

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/
    )
    .required(),
  email: Yup.string().email().required(),
  firstName: Yup.string().required(),
  phoneNumber: Yup.string().length(10).required(),
});

const SignUp = ({ navigation, userSignUp, userSignupState }: SignupProps) => {
  const { signUpLoading, signUpError, successMessage } = userSignupState;
  const { toast } = useToast();
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
      firstName: "",
      lastName: "",
      password: "",
      email: "",
      phoneNumber: "",
      callback: false,
    },
    onSubmit: async (values) => {
      const { email, password, firstName, lastName, phoneNumber } = values;
      // const fullName = fName.split(" ");
      const fName = firstName;
      const lName = lastName;
      console.log({ values });
      if (values.callback === true) {
        userSignUp(email, password, fName, lName, phoneNumber, navigation);
      } else {
        toast({
          message: "Accept Terms and Conditions",
          bg: "background",
          color: "text",
          accentColor: "main",
          iconFamily: "Feather",
          iconName: "alert-triangle",
          iconColor: "error",
        });
      }

      // navigation.navigate("Home");
    },
  });

  useEffect(() => {
    if (successMessage !== "" && signUpError === "") {
      toast({
        message: "User Created Please Login",
        bg: "background",
        color: "text",
        accentColor: "main",
        iconFamily: "Feather",
        iconName: "check-circle",
        iconColor: "success",
      });
    } else if (successMessage === "" && signUpError !== "") {
      toast({
        message: "SignUp Failed",
        bg: "background",
        color: "text",
        accentColor: "main",
        iconFamily: "Feather",
        iconName: "alert-triangle",
        iconColor: "error",
      });
    }
  }, [successMessage, signUpError]);

  return (
    <Box
      backgroundColor="primaryText"
      flex={1}
      justifyContent="center"
      alignItems="center"
    >
      <Box
        justifyContent="center"
        alignItems="center"
        height={wHeight / 2}
        width={wWidth}
        flex={1}
      >
        <Box style={{ marginTop: 50 }} height={wHeight / 3} width={wWidth / 2}>
          <Image
            style={{ height: "100%", width: "100%" }}
            source={require("../../../assets/login-logo.png")}
          />
        </Box>
      </Box>
      <Box
        borderTopLeftRadius="l"
        borderTopRightRadius="l"
        width={wWidth}
        backgroundColor="iconBackground"
        flex={1.5}
      >
        <Box marginHorizontal="l">
          <Box>
            <TextField
              onChangeText={handleChange("firstName")}
              placeholder="First Name"
              onBlur={handleBlur("firstName")}
              error={errors.firstName}
              touched={touched.firstName}
            />
          </Box>

          <Picker
            selectedValue={values.lastName}
            onValueChange={(itemValue, itemIndex) =>
              setFieldValue("lastName", itemValue)
            }
          >
            {lastNameList.map((item, i) => {
              return (
                <Picker.Item
                  key={item.id}
                  label={item.lName}
                  value={item.lName}
                />
              );
            })}
          </Picker>

          {/* <Box>
            <TextField
              onChangeText={handleChange("lastName")}
              placeholder="Last Name"
              onBlur={handleBlur("lastName")}
              error={errors.lastName}
              touched={touched.lastName}
            />
          </Box> */}
          <Box>
            <TextField
              placeholder="Email"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              error={errors.email}
              touched={touched.email}
            />
          </Box>
          <Box>
            <TextField
              secureTextEntry={true}
              placeholder="Password"
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              error={errors.password}
              touched={touched.password}
            />
          </Box>
          <Box>
            <TextField
              keyboardType="number-pad"
              placeholder="Phone Number"
              onChangeText={handleChange("phoneNumber")}
              onBlur={handleBlur("phoneNumber")}
              error={errors.phoneNumber}
              touched={touched.phoneNumber}
            />
          </Box>
          <Box marginTop="l" flexDirection="row">
            <CheckBox
              checked={values.callback}
              onChange={() => setFieldValue("callback", !values.callback)}
              label="Term and conditions"
            />
          </Box>
          <LargeButton
            loading={signUpLoading}
            onPress={handleSubmit}
            label={"SIGN UP"}
          />
          <Box paddingVertical="s" alignItems="center">
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate("login")}
            >
              <Text fontSize={13} variant="silentText">
                Already have account ? <Text variant="seeAll">Sign In</Text>
              </Text>
            </TouchableWithoutFeedback>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

function mapStateToProps(state: any) {
  return {
    userSignupState: state.auth,
  };
}

const mapDispatchToProps = (dispatch: any) => ({
  userSignUp: (
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    navigation: any
  ) =>
    dispatch(
      userSignup(email, password, firstName, lastName, phoneNumber, navigation)
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
