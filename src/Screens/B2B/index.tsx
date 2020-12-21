import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Product from "./Product";
import Property from "./Property";
import { Box, useTheme, HeaderBackButton } from "../../components";
import { RoundedBorderButton } from "../MyProfile/components";

import PostProduct from "./PostProduct";
import B2BProductDetail from "./B2BProductDetail";
import B2BPropertyDetail from "./B2BPropertyDetail";
const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

export type TabRoutes = {
  Product: undefined;
  Property: undefined;
};
const B2BTabNavigation = ({}) => {
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
      <Tab.Screen name="Products" component={Product} />
      <Tab.Screen name="Property" component={Property} />
    </Tab.Navigator>
  );
};

const B2BStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={({ navigation, route }) => ({
          headerStyle: {
            elevation: 0,
          },
          title: "B2B",
          headerLeft: () => {
            return (
              <HeaderBackButton
                image={require("../../../assets/images/b2b.png")}
              />
            );
          },
          headerRight: () => {
            return (
              <Box marginHorizontal="s">
                <RoundedBorderButton
                  label="Post Product"
                  onPress={() => navigation.navigate("PostProduct")}
                />
              </Box>
            );
          },
        })}
        name="B2b"
        component={B2BTabNavigation}
      />
      <Stack.Screen
        options={{
          headerLeft: () => (
            <HeaderBackButton
              image={require("../../../assets/images/b2b.png")}
            />
          ),
          title: "Product & Property",
        }}
        name="PostProduct"
        component={PostProduct}
      />
      <Stack.Screen
        options={{
          headerLeft: () => (
            <HeaderBackButton
              image={require("../../../assets/images/b2b.png")}
            />
          ),
        }}
        name="B2BProductDetail"
        component={B2BProductDetail}
      />
      <Stack.Screen
        options={{
          headerLeft: () => (
            <HeaderBackButton
              image={require("../../../assets/images/b2b.png")}
            />
          ),
        }}
        name="B2BPropertyDetail"
        component={B2BPropertyDetail}
      />
    </Stack.Navigator>
  );
};
export default B2BStackNavigation;
