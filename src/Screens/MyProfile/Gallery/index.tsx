import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Gallery from "./Gallery";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Albums from "./Albums";
import Uploads from "./Uploads";

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const GalleryTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="photoOfYou" component={Gallery} />
      <Tab.Screen name="uploads" component={Uploads} />
      <Tab.Screen name="albums" component={Albums} />
    </Tab.Navigator>
  );
};

const GalleryStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
        },
      }}
    >
      <Stack.Screen name="Gallery" component={GalleryTab} />
    </Stack.Navigator>
  );
};
export default GalleryStack;
