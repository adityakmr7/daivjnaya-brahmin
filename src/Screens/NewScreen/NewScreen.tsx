import React from "react";
import {
  RectButton,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { Box, Text, LargeButton, TextField } from "../../components";

import { Feather as Icon } from "@expo/vector-icons";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Keyboard, KeyboardAvoidingView } from "react-native";
import { NewScreenStackNavigationProps } from ".";

/**
 *  TODO:  Add Native Function to Upload Image Button
 */

interface NewScreenProps {}

const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  contact: Yup.string().length(10).required(),
  bank: Yup.string().required(),
  cardNumber: Yup.string().length(16).required(),
  cvv: Yup.string().length(3).required(),
  amount: Yup.number().positive().required(),
});

const NewScreen = ({navigation}:NewScreenStackNavigationProps<"New"> ) => {
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
      name: "",
      contact: "",
      bank: "",
      cardNumber: "",
      cvv: "",
      amount: "",
    },
    onSubmit: (values) => {
      console.log(values);
      navigation.navigate('EventAdded');
    },
  });
  return (
    <Box flex={1} flexDirection="column">
      <KeyboardAvoidingView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Box marginHorizontal="xl">
            <TextField
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              error={errors.name}
              touched={touched.name}
              placeholder="Name"
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
              onChangeText={handleChange("bank")}
              onBlur={handleBlur("bank")}
              error={errors.bank}
              touched={touched.bank}
              placeholder="Bank"
            />
            <TextField
              keyboardType="numeric"
              onChangeText={handleChange("cardNumber")}
              onBlur={handleBlur("cardNumber")}
              error={errors.cardNumber}
              touched={touched.cardNumber}
              placeholder="Card Number"
            />
            <TextField
              keyboardType="numeric"
              onChangeText={handleChange("cvv")}
              onBlur={handleBlur("cvv")}
              error={errors.cvv}
              touched={touched.cvv}
              placeholder="CVV"
            />
            <TextField
              keyboardType="number-pad"
              onChangeText={handleChange("amount")}
              onBlur={handleBlur("amount")}
              error={errors.amount}
              touched={touched.amount}
              placeholder="Amount"
            />
          </Box>
          <Box
            style={{ shadowOffset: { width: 0, height: 5 } }}
            shadowColor="greyish"
            elevation={1}
            marginHorizontal="xl"
            borderRadius="s"
            marginTop="xxl"
          >
            <RectButton style={{ height: 40, width: "100%" }}>
              <Box flexDirection="row" paddingTop="s" paddingLeft="l">
                <Icon size={20} style={{ paddingRight: 5 }} name="upload" />
                <Text color="primaryText" variant="cardText">
                  Upload Files
                </Text>
              </Box>
            </RectButton>
          </Box>
          <LargeButton onPress={handleSubmit} label="ADD" />
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Box>
  );
};

export default NewScreen;
