import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MyProfile from "./MyProfile";
import Videos from "./Videos";
import Message from "./Message";
import { Feather as Icon } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import SeeAllFriends from "./SeeAllFriends";
import { AppRoutes } from "../../components/NavigationRoutes";
import GalleryStack from "./Gallery";
import EditProfile from "./EditProfile";
import Comment from "./Comment";
const Tab = createBottomTabNavigator();

export const AppStack = createStackNavigator<AppRoutes>();
const VideoStack = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="Videos" component={Videos} />
    </AppStack.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <AppStack.Navigator initialRouteName="Profile">
      <AppStack.Screen name="Profile" component={MyProfile} />
      <AppStack.Screen name="Comment" component={Comment} />
      <AppStack.Screen name="FriendList" component={SeeAllFriends} />
      <AppStack.Screen
        name="EditProfile"
        options={{ title: "Edit Profile" }}
        component={EditProfile}
      />
    </AppStack.Navigator>
  );
};

// const GalleryStack = () => {
//   return (
//     <AppStack.Navigator>
//       <AppStack.Screen name="Gallery" component={GalleryStack} />
//     </AppStack.Navigator>
//   );
// };
const MessageStack = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="Message" component={Message} />
    </AppStack.Navigator>
  );
};

const TabNavigation = ({}) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string = "";

          if (route.name === "Profile") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Videos") {
            iconName = focused ? "users" : "users";
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
        component={ProfileStack}
      />
      <Tab.Screen
        options={{ tabBarLabel: "Videos" }}
        name="Videos"
        component={VideoStack}
      />
      <Tab.Screen
        options={{ tabBarLabel: "Gallery" }}
        name="Gallery"
        component={GalleryStack}
      />
      <Tab.Screen
        options={{ tabBarLabel: "Message" }}
        name="Message"
        component={MessageStack}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
