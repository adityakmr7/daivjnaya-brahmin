import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Box, HeaderBackButton, useTheme } from "../../components";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Groom from "./Groom";
import Bride from "./Bride";
import Vendors from "./Vendors";
import GroomDetail from "./GroomDetail";
import {
  MatrimonyStackParamList,
  MatrimonyTabParamList,
} from "./MatrimonyRoutes";
import { RoundedBorderButton } from "../MyProfile/components";
import BrideDetail from "./BrideDetail";
import VendorDetail from "./VendorDetail";
import FullScreen from "./FullScreen";
import MatrimonyRegister from "./MatrimonyRegister";

const Stack = createStackNavigator<MatrimonyStackParamList>();
const Tab = createMaterialTopTabNavigator<MatrimonyTabParamList>();

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
                image={require("../../../assets/images/matrimony-head.png")}
              />
            );
          },
          headerRight: () => {
            return (
              <Box marginHorizontal="s">
                <RoundedBorderButton
                  label="Register"
                  onPress={() => navigation.navigate("MatrimonyRegister")}
                />
              </Box>
            );
          },
        })}
        name="Matrimony"
        component={MatrimonyTab}
      />
      <Stack.Screen
        options={{ title: "Register" }}
        name="MatrimonyRegister"
        component={MatrimonyRegister}
      />
      <Stack.Screen name="GroomDetail" component={GroomDetail} />
      <Stack.Screen name="BrideDetail" component={BrideDetail} />
      <Stack.Screen name="VendorDetail" component={VendorDetail} />
      <Stack.Screen name="FullScreen" component={FullScreen} />
    </Stack.Navigator>
  );
};

export default MatrimonyStack;
