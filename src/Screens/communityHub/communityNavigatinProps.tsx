import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { MaterialTopTabNavigationProp } from "@react-navigation/material-top-tabs";
import { CompositeNavigationProp, RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type TabRoutesList = {
  Karwar: undefined;
  Hubli: undefined;
  Bangalore: undefined;
};

export type StackRoutesList = {
  CommunityHub: undefined;
  KarawarDetail: { id: number };
  CommunityMember: undefined;
  CommunityRegister: undefined;
  CommunityHubMemberDetail: undefined;
};
export type CommunityNavProps<T extends keyof StackRoutesList> = {
  navigation: BottomTabNavigationProp<StackRoutesList, T>;
  route: RouteProp<StackRoutesList, T>;
};

export type combineTabWithStackProps<
  T extends keyof TabRoutesList
> = CompositeNavigationProp<
  MaterialTopTabNavigationProp<TabRoutesList, T>,
  StackNavigationProp<StackRoutesList>
>;
