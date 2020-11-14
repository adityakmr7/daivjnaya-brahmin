import {
  MaterialTopTabBarProps,
  MaterialTopTabNavigationProp,
} from "@react-navigation/material-top-tabs";
import { CompositeNavigationProp, RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type MatrimonyTabParamList = {
  Groom: undefined;
  Bride: undefined;
  Vendors: undefined;
};

export type MatrimonyStackParamList = {
  Matrimony: undefined;
  GroomDetail: { id: number };
  BrideDetail: { id: number };
  VendorDetail: { id: number };
  MatrimonyRegister: undefined;
  FullScreen: {
    id: number;
    gender: string;
  };
  Bride: undefined;
};

export type combineTabWithStackProps<
  T extends keyof MatrimonyTabParamList
> = CompositeNavigationProp<
  MaterialTopTabNavigationProp<MatrimonyTabParamList, T>,
  StackNavigationProp<MatrimonyStackParamList>
>;

export type MatrimonyStackNavigationProps<
  T extends keyof MatrimonyStackParamList
> = {
  navigation: StackNavigationProp<MatrimonyStackParamList, T>;
  route: RouteProp<MatrimonyStackParamList, T>;
};

export type MatrimonyStackRouteProps<
  T extends keyof MatrimonyStackParamList
> = {
  route: RouteProp<MatrimonyStackParamList, T>;
};
