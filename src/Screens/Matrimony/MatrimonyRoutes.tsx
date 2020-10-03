import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp, RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type MatrimonyRootParamList = {
  Matrimony: undefined;
  GroomDetail: { id: number };
  Groom: undefined;
  Bride: undefined;
  Vendors: undefined;
};

export type MatrimonyNavigationProps<
  T extends keyof MatrimonyRootParamList
> = CompositeNavigationProp<
  StackNavigationProp<MatrimonyRootParamList, T>,
  BottomTabNavigationProp<MatrimonyRootParamList, T>
>;

export type MatrimonyStackNavigationProps<
  T extends keyof MatrimonyRootParamList
> = {
  navigation: BottomTabNavigationProp<MatrimonyRootParamList, T>;
  route: RouteProp<MatrimonyRootParamList, T>;
};
export type MatrimonyTabNavigationProps<
  T extends keyof MatrimonyRootParamList
> = {
  navigation: BottomTabNavigationProp<MatrimonyRootParamList, T>;
  route: RouteProp<MatrimonyRootParamList, T>;
};
