import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type AppRoutes = {
  Authentication: undefined;
  Home: undefined;
  New: undefined;
  Notification: undefined;
  Event: { id: number };
  NewsEvent: undefined;
  MyProfile: undefined;
  CommunityStack: undefined;
  Register: undefined;
  FriendList: { username: string };
  Videos: undefined;

  //profile
  Profile: undefined;
  EditProfile: {
    email: string;
    firstName: string;
    isEnabled: string;
    lastName: string;
    location: string;
    phoneNumber: string;
    studyAt: string;
    uId: string;
    work: string;
    workAt: string;
  };
  Gallery: undefined;
  Message: undefined;
  //Matrimony
  Matrimony: undefined;
  //B2B
  B2b: undefined;
  Careers: undefined;
  Jewellery: undefined;
  Pricing: undefined;
};

export type StackNavigationProps<T extends keyof AppRoutes> = {
  navigation: StackNavigationProp<AppRoutes, T>;
  route: RouteProp<AppRoutes, T>;
};
