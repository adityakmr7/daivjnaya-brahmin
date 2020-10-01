import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useTheme } from "../../components";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Groom from "./Groom";
import Bride from "./Bride";
import Vendors from "./Vendors";
import GroomDetail from "./GroomDetail";
import { MatrimonyStackRoutes, MatrimonyTabRoutes } from "./MatrimonyRoutes";

const Stack = createStackNavigator<MatrimonyStackRoutes>();
const Tab = createMaterialTopTabNavigator<MatrimonyTabRoutes>();
const MatrimonyTab = ({}) => {
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
      <Tab.Screen name="Groom" component={Groom} />
      <Tab.Screen name="Bride" component={Bride} />
      <Tab.Screen name="Vendors" component={Vendors} />
    </Tab.Navigator>
  );
};

const MatrimonyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Matrimony" component={MatrimonyTab} />
      <Stack.Screen name="GroomDetail" component={GroomDetail} />
    </Stack.Navigator>
  );
};

export default MatrimonyStack;
