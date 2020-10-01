import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/native";

export type MatrimonyStackRoutes = {
  Matrimony: undefined;
  GroomDetail: undefined;
};
export type MatrimonyTabRoutes = {
  Groom: undefined;
  Bride: undefined;
  Vendors: undefined;
};

export type MatrimonyStackNavigationProps<
  T extends keyof MatrimonyStackRoutes
> = {
  navigation: BottomTabNavigationProp<MatrimonyStackRoutes, T>;
  route: RouteProp<MatrimonyStackRoutes, T>;
};
export type MatrimonyTabNavigationProps<T extends keyof MatrimonyTabRoutes> = {
  navigation: BottomTabNavigationProp<MatrimonyTabRoutes, T>;
  route: RouteProp<MatrimonyTabRoutes, T>;
};
