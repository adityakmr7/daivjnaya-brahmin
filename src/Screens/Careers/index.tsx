import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CareerChat from "./CareerChat";
import CareerHome from "./CareerHome";
import CareerNetwork from "./CareerNetwork";
import CareerProfile from "./CareerProfile";
import { Feather as Icon } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const CareerTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#D4AF37",
        inactiveTintColor: "gray",
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string = "";

          if (route.name === "CareerHome") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "CareerNetwork") {
            iconName = focused ? "users" : "users";
          } else if (route.name === "CareerProfile") {
            iconName = focused ? "user" : "user";
          } else if (route.name === "CareerChat") {
            iconName = focused ? "message-square" : "message-square";
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      initialRouteName="CareerHome"
    >
      <Tab.Screen
        options={{ tabBarLabel: "Home" }}
        name="CareerHome"
        component={CareerHome}
      />
      <Tab.Screen
        options={{ tabBarLabel: "Network" }}
        name="CareerNetwork"
        component={CareerNetwork}
      />
      <Tab.Screen
        options={{ tabBarLabel: "Profile" }}
        name="CareerProfile"
        component={CareerProfile}
      />
      <Tab.Screen
        options={{ tabBarLabel: "Chat" }}
        name="CareerChat"
        component={CareerChat}
      />
    </Tab.Navigator>
  );
};

export default CareerTab;
