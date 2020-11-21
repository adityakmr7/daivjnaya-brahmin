import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { Box } from "../../components/Theme";

import CommunityMember from "./CommunityMember";
import { StackRoutesList } from "./communityNavigatinProps";
import { RoundedBorderButton } from "../MyProfile/components";
import CommunityRegister from "./CommunityRegister";
import CommunityHubMemberDetail from "./CommunityHubMemberDetail";

const Stack = createStackNavigator<StackRoutesList>();

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
      <Stack.Screen
        name="CommunityHubMemberDetail"
        component={CommunityHubMemberDetail}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="CommunityRegister"
        component={CommunityRegisterStack}
      />
    </Stack.Navigator>
  );
};

export default CommunityStack;
