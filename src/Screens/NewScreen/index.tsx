import React from "react";
import { createStackNavigator, StackNavigationProp } from "@react-navigation/stack";
import EventAdded from "./EventAdded";
import NewScreen from "./NewScreen";
import { RouteProp } from "@react-navigation/native";


type NewScreenParams =  {
  New: undefined;
  EventAdded:undefined;
}

export type NewScreenStackNavigationProps<T extends keyof NewScreenParams> = {
  navigation: StackNavigationProp<NewScreenParams, T>;
  route: RouteProp<NewScreenParams, T>;
};



const Stack = createStackNavigator<NewScreenParams>();
const NewScreenStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="New" component={NewScreen} />
      <Stack.Screen name="EventAdded" component={EventAdded} />
    </Stack.Navigator>
  );
};

export default NewScreenStack;
