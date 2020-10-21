import { CompositeNavigationProp } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import React from "react";
import { AppRoutes } from "../../components/NavigationRoutes";
import Login from "./Login";
import SignUp from "./SignUp";

type AuthNavigationParams = {
  login: undefined;
  SignUp: undefined;
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
    </AuthStack.Navigator>
  );
};

export default AuthNavigation;
