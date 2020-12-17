import { CompositeNavigationProp } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import React from "react";
import { AppRoutes } from "../../components/NavigationRoutes";
import ForgotPassword from "./ForgotPassword";
import Login from "./Login";
import OtpScreen from "./OtpScreen";
import ResetCompleteScreen from "./ResetCompleteScreen";
import SignUp from "./SignUp";

type AuthNavigationParams = {
  login: undefined;
  SignUp: undefined;
  Forgot: undefined;
  Otp: undefined;
  ResetComplete: undefined;
};
export type combineAuthStackProps<
  T extends keyof AuthNavigationParams
> = CompositeNavigationProp<
  StackNavigationProp<AuthNavigationParams, T>,
  StackNavigationProp<AppRoutes>
>;
const AuthStack = createStackNavigator<AuthNavigationParams>();
const AuthNavigation = () => {
  return (
    <AuthStack.Navigator headerMode="none">
      <AuthStack.Screen name="login" component={Login} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
      <AuthStack.Screen name="Forgot" component={ForgotPassword} />
      <AuthStack.Screen name="Otp" component={OtpScreen} />
      <AuthStack.Screen name="ResetComplete" component={ResetCompleteScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigation;
