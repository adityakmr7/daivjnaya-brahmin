import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  createStackNavigator,
  HeaderBackButton,
} from "@react-navigation/stack";
import React from "react";
import { Box, useTheme } from "../../components";
import { RoundedBorderButton } from "../MyProfile/components";
import {
  JewelleryStackParamList,
  JewelleryTabParamList,
} from "./JewelleryNavigationProps";
import Shop from "./Shop";
import Vendors from "./Vendors";
import Workers from "./Workers";

const Stack = createStackNavigator<JewelleryStackParamList>();
const Tab = createMaterialTopTabNavigator<JewelleryTabParamList>();
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
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: {
          elevation: 0,
        },
        headerLeft: () => (
          <HeaderBackButton
            image={require("../../../assets/images/jwelIcon.png")}
          />
        ),
        headerRight: () => (
          <Box marginHorizontal="s">
            <RoundedBorderButton
              label="Register"
              onPress={() => navigation.navigate("Register")}
            />
          </Box>
        ),
      })}
    >
      <Stack.Screen name="Jewellery" component={JewelleryTab} />
    </Stack.Navigator>
  );
};

export default JewelleryStack;
