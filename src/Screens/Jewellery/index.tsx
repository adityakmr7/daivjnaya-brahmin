import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { useTheme } from "../../components";
import Shop from "./Shop";
import Vendors from "./Vendors";
import Workers from "./Workers";

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();
const JewelleryTab = () => {
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
      <Tab.Screen name="Shop" component={Shop} />
      <Tab.Screen name="Vendors" component={Vendors} />
      <Tab.Screen name="Workers" component={Workers} />
    </Tab.Navigator>
  );
};

const JewelleryStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Jewellery" component={JewelleryTab} />
    </Stack.Navigator>
  );
};

export default JewelleryStack;
