import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CareerChat from "./CareerChat";
import CareerHome from "./CareerHome";
import CareerNetwork from "./CareerNetwork";
import CareerProfile from "./CareerProfile";
import { Feather as Icon } from "@expo/vector-icons";
import CareerRegister from "./CareerRegister";
import { createStackNavigator } from "@react-navigation/stack";
import { Box } from "../../components";
import { RoundedBorderButton } from "../MyProfile/components";
import Talents from "./components/Talents";
import CareerTipDetail from "./CareerTipDetail";
import CareerCandidates from "./CareerCandidates";
import CareerJobs from "./CareerJobs";
import CareerTalents from "./CareerTalents";
import HeaderButton from "./components/HeaderButton";
import MyNetwork from "./MyNetwork";
import Register from "./components/Register";
import CandidateProfile from "./CandidateProfile";
import CareerJobProfile from "./CareerJobProfile";

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
      {/* <Tab.Screen
        options={{ tabBarLabel: "Profile" }}
        name="CareerProfile"
        component={CareerProfile}
      />
      <Tab.Screen
        options={{ tabBarLabel: "Chat" }}
        name="CareerChat"
        component={CareerChat}
      /> */}
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();

const CareerStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: {
          elevation: 0,
        },
      })}
    >
      <Stack.Screen
        options={({ navigation }) => ({
          title: "Career & Talents",
          headerStyle: {
            elevation: 0,
          },
          headerRight: () => {
            return (
              <Box marginHorizontal="s">
                <RoundedBorderButton
                  label="Register"
                  onPress={() => navigation.navigate("CareerRegister")}
                />
              </Box>
            );
          },
        })}
        name={"CareerTab"}
        component={CareerTab}
      />
      <Stack.Screen
        options={{ headerTitle: "Register" }}
        name={"CareerRegister"}
        component={CareerRegister}
      />
      <Stack.Screen
        options={{ title: "Tips" }}
        name={"CareerTipDetail"}
        component={CareerTipDetail}
      />
      <Stack.Screen
        options={({ navigation }) => ({
          headerRight: () => (
            <Box marginRight="s">
              <HeaderButton
                title="Apply Job"
                onPress={() => navigation.navigate("ApplyJob")}
              />
            </Box>
          ),
        })}
        name="Candidates"
        component={CareerCandidates}
      />
      <Stack.Screen
        options={{
          title: "Jobs",
        }}
        name="CareerJobs"
        component={CareerJobs}
      />
      <Stack.Screen
        options={({ navigation }) => ({
          title: "Talents",
          headerRight: () => (
            <Box marginRight="s">
              <HeaderButton
                title="Post Talents"
                onPress={() => navigation.navigate("PostTalent")}
              />
            </Box>
          ),
        })}
        name="CareerTalents"
        component={CareerTalents}
      />
      <Stack.Screen name="MyNetwork" component={MyNetwork} />
      <Stack.Screen name="ApplyJob" component={Register} />
      <Stack.Screen name="PostTalent" component={Talents} />
      <Stack.Screen name="CandidateProfile" component={CandidateProfile} />
      <Stack.Screen name="CareerJobsProfile" component={CareerJobProfile} />
    </Stack.Navigator>
  );
};

export default CareerStack;
