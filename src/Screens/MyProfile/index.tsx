import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MyProfile from "./MyProfile";
import Videos from "./Videos";
import Gallery from "./Gallery";
import Message from "./Message";
import { Feather as Icon } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

const TabNavigation = ({}) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Profile") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Videos") {
            iconName = focused ? "play-circle" : "play-circle";
          } else if (route.name === "Gallery") {
            iconName = focused ? "image" : "image";
          } else if (route.name === "Message") {
            iconName = focused ? "message-square" : "message-square";
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#D4AF37",
        inactiveTintColor: "gray",
        showLabel: false,
      }}
    >
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
