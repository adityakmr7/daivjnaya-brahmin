import React from "react";
import Karwar from "./Karwar";
import Hubli from "./Hubli";
import Bangalore from "./Bangalore";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import KarawarDetail from "./KarawarDetail";
import { Box, useTheme } from "../../components/Theme";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/native";
import CommunityMember from "./CommunityMember";
import { StackRoutesList, TabRoutesList } from "./communityNavigatinProps";
import { RoundedBorderButton } from "../MyProfile/components";
import CommunityRegister from "./CommunityRegister";

const Tab = createMaterialTopTabNavigator<TabRoutesList>();
const Stack = createStackNavigator<StackRoutesList>();

const CommunityHub = ({}) => {
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
      <Tab.Screen name="Karwar" component={Karwar} />
      <Tab.Screen name="Hubli" component={Hubli} />
      <Tab.Screen name="Bangalore" component={Bangalore} />
    </Tab.Navigator>
  );
};

const CommunityRegisterStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ title: "Register" }}
        name="CommunityRegister"
        component={CommunityRegister}
      />
    </Stack.Navigator>
  );
};

const CommunityStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="CommunityMember"
      screenOptions={({ navigation }) => ({
        headerStyle: {
          elevation: 0,
        },
        title: "Community Hub",
        headerRight: () => {
          return (
            <Box marginHorizontal="s">
              <RoundedBorderButton
                label="For Members"
                onPress={() => navigation.navigate("CommunityRegister")}
              />
            </Box>
          );
        },
      })}
    >
      <Stack.Screen name="CommunityMember" component={CommunityMember} />

      <Stack.Screen name="CommunityHub" component={CommunityHub} />
      <Stack.Screen
        options={{ headerShown: false }}
        name="CommunityRegister"
        component={CommunityRegisterStack}
      />
      <Stack.Screen name="KarawarDetail" component={KarawarDetail} />
    </Stack.Navigator>
  );
};

export default CommunityStack;
