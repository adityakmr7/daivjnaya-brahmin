import React from "react";
import Karwar from "./Karwar";
import Hubli from "./Hubli";
import Bangalore from "./Bangalore";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import KarawarDetail from "./KarawarDetail";
import { useTheme } from "../../components/Theme";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/native";
import CommunityMember from "./CommunityMember";
import { StackRoutesList, TabRoutesList } from "./communityNavigatinProps";

const Tab = createMaterialTopTabNavigator<TabRoutesList>();
const Stack = createStackNavigator<StackRoutesList>();

const CommunityHub = ({}) => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: theme.colors.primaryText,
        inactiveTintColor: theme.colors.grey,
        indicatorStyle: {
          backgroundColor: theme.colors.mainIconColor,
        },
      }}
    >
      <Tab.Screen name="Karwar" component={Karwar} />
      <Tab.Screen name="Hubli" component={Hubli} />
      <Tab.Screen name="Bangalore" component={Bangalore} />
    </Tab.Navigator>
  );
};
const CommunityStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CommunityHub" component={CommunityHub} />
      <Stack.Screen name="KarawarDetail" component={KarawarDetail} />
      <Stack.Screen name="CommunityMember" component={CommunityMember} />
    </Stack.Navigator>
  );
};

export default CommunityStack;
