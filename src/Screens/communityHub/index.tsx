import React from "react";

import Karwar from "./Karwar";
import Hubli from "./Hubli";
import Bangalore from "./Bangalore";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Dimensions } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import KarawarDetail from "./KarawarDetail";
const { width: wWidth, height: wHeight } = Dimensions.get("window");
const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const KarwarStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Karawar" component={Karwar} />
      <Stack.Screen name="KarawarDetail" component={KarawarDetail} />
    </Stack.Navigator>
  );
};

const CommunityHub = ({}) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Karwar" component={KarwarStack} />
      <Tab.Screen name="Hubli" component={Hubli} />
      <Tab.Screen name="Bangalore" component={Bangalore} />
    </Tab.Navigator>
  );
};

export default CommunityHub;
