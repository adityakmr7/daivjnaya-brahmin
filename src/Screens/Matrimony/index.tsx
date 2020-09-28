import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useTheme } from "../../components";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Matrimony from "./Matrimony";
import Groom from "./Groom";
import Bride from "./Bride";
import Vendors from "./Vendors";

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();
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
    </Stack.Navigator>
  );
};

export default MatrimonyStack;
