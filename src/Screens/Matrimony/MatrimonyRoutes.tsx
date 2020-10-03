import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp, RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type MatrimonyTabParamList = {
  Groom: undefined;
  Bride: undefined;
  Vendors: undefined;
  Matrimony: undefined;
  GroomDetail: { id: number };
  BrideDetail: { id: number };
  VendorDetail: { id: number };
};

export type MatrimonyStackParamList = {
  Matrimony: undefined;
  GroomDetail: { id: number };
  BrideDetail: { id: number };
  VendorDetail: { id: number };

  Bride: undefined;
};

// export type MatrimonyRootParamList = {
//   tab: MatrimonyTabParamList;
//   stack: MatrimonyStackParamList;
// };

export type MatrimonyNavigationProps = CompositeNavigationProp<
  StackNavigationProp<MatrimonyTabParamList>,
  BottomTabNavigationProp<MatrimonyStackParamList>
>;
