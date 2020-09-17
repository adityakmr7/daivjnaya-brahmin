import React from "react";
import { Feather as Icon } from "@expo/vector-icons";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import { theme, Box, Text } from "../components";
import { AppRoutes } from "../components/NavigationRoutes";
import HomeScreen from "./HomeScreen/HomeScreen";

const AppStack = createStackNavigator<AppRoutes>();

const AppNavigation = () => {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
        },
      }}
    >
      <AppStack.Screen
        options={({ navigation, route }) => ({
          headerRight: () => {
            return (
              <Box flexDirection={"row"} paddingHorizontal="s">
                <Box paddingHorizontal="s">
                  <Box
                    width={28}
                    height={28}
                    borderRadius="m"
                    backgroundColor="iconBackground"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Box
                      position="absolute"
                      borderRadius="l"
                      top={0}
                      right={0}
                      width={7}
                      height={7}
                      backgroundColor="notificationColor"
                    />
                    <Icon name="bell" size={20} color={"black"} />
                  </Box>
                </Box>
                <Box>
                  <Box
                    alignItems="center"
                    justifyContent="center"
                    width={71}
                    height={28}
                    borderRadius="m"
                    backgroundColor="iconBackground"
                  >
                    <Text>
                      <Text>New</Text>
                      <Text>+</Text>
                    </Text>
                  </Box>
                </Box>
              </Box>
            );
          },
          title: "Daivjnaya Brahmin",

          headerStyle: {
            elevation: 0,
            backgroundColor: theme.colors.mainBackground,
            // fontFamily: "Saman",
          },
        })}
        name={"Home"}
        component={HomeScreen}
      />
    </AppStack.Navigator>
  );
};

export default AppNavigation;
