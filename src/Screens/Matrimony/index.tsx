import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Box, HeaderBackButton, useTheme } from "../../components";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Groom from "./Groom";
import Bride from "./Bride";
import Vendors from "./Vendors";
import GroomDetail from "./GroomDetail";
import { MatrimonyRootParamList } from "./MatrimonyRoutes";
import { RoundedBorderButton } from "../MyProfile/components";

const Stack = createStackNavigator<MatrimonyRootParamList>();
const Tab = createMaterialTopTabNavigator<MatrimonyRootParamList>();

const MatrimonyTab = ({}) => {
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
      <Tab.Screen name="Groom" component={Groom} />
      <Tab.Screen name="Bride" component={Bride} />
      <Tab.Screen name="Vendors" component={Vendors} />
    </Tab.Navigator>
  );
};

const MatrimonyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={({ navigation, route }) => ({
          headerStyle: {
            elevation: 0,
          },
          title: "Matrimony",
          headerLeft: () => {
            return (
              <HeaderBackButton
                image={require("../assets/matrimony-head.png")}
                onPress={() => navigation.pop()}
              />
            );
          },
          headerRight: () => {
            return (
              <Box marginHorizontal="s">
                <RoundedBorderButton
                  label="Register"
                  onPress={() => navigation.navigate("Register")}
                />
              </Box>
            );
          },
        })}
        name="Matrimony"
        component={MatrimonyTab}
      />
      <Stack.Screen name="GroomDetail" component={GroomDetail} />
    </Stack.Navigator>
  );
};

export default MatrimonyStack;
