import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MyProfile from "./MyProfile";
import Videos from "./Videos";
import Gallery from "./Gallery";
import Message from "./Message";
const Tab = createBottomTabNavigator();

const TabNavigation = ({}) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{ tabBarLabel: "Profile" }}
        name="Profile"
        component={MyProfile}
      />
      <Tab.Screen
        options={{ tabBarLabel: "Videos" }}
        name="Videos"
        component={Videos}
      />
      <Tab.Screen
        options={{ tabBarLabel: "Gallery" }}
        name="Gallery"
        component={Gallery}
      />
      <Tab.Screen
        options={{ tabBarLabel: "Message" }}
        name="Message"
        component={Message}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
