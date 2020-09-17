import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type AppRoutes = {
  Home: undefined;
};

export type StackNavigationProps<T extends keyof AppRoutes> = {
  navigation: StackNavigationProp<AppRoutes, T>;
  route: RouteProp<AppRoutes, T>;
};
