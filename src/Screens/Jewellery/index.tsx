import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Box, useTheme, HeaderBackButton } from "../../components";
import { RoundedBorderButton } from "../MyProfile/components";
import {
  JewelleryStackParamList,
  JewelleryTabParamList,
} from "./JewelleryNavigationProps";
import JewelleryRegister from "./JewelleryRegister";
import Shop from "./Shop";
import ShopDetail from "./ShopDetail";
import VendorDetail from "./VendorDetail";
import Vendors from "./Vendors";
import WorkerDetail from "./WorkerDetail";
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
      })}
    >
      <Stack.Screen
        options={({ navigation }) => ({
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
                onPress={() => navigation.navigate("JewelleryRegister")}
              />
            </Box>
          ),
        })}
        name="Jewellery"
        component={JewelleryTab}
      />
      <Stack.Screen
        name="JewelleryRegister"
        options={{ headerTitle: "Register" }}
        component={JewelleryRegister}
      />
      <Stack.Screen name="JewelleryShopDetail" component={ShopDetail} />
      <Stack.Screen name="JewelleryWorkerDetail" component={WorkerDetail} />
      <Stack.Screen name="JewelleryVendorDetail" component={VendorDetail} />
    </Stack.Navigator>
  );
};

export default JewelleryStack;
