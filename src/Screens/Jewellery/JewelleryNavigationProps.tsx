import { MaterialTopTabNavigationProp } from "@react-navigation/material-top-tabs";
import { CompositeNavigationProp, RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type JewelleryTabParamList = {
  Shop: undefined;
  Vendors: undefined;
  Workers: undefined;
};

export type JewelleryStackParamList = {
  Jewellery: undefined;
  JewelleryRegister: undefined;
};

export type combineTabWithStackProps<
  T extends keyof JewelleryTabParamList
> = CompositeNavigationProp<
  MaterialTopTabNavigationProp<JewelleryTabParamList, T>,
  StackNavigationProp<JewelleryStackParamList>
>;

export type JewelleryStackNavigationProps<
  T extends keyof JewelleryStackParamList
> = {
  navigation: StackNavigationProp<JewelleryStackParamList, T>;
  route: RouteProp<JewelleryStackParamList, T>;
};
