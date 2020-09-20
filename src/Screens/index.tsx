import React from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { theme, Box, Text } from "../components";
import { AppRoutes } from "../components/NavigationRoutes";
import { HomeScreen } from "./HomeScreen";
import { RectButton } from "react-native-gesture-handler";
import { Image, View } from "react-native";
import NewScreen from "./NewScreen";
import { Notification } from "./Notifications";
import EventScreen from "./EventScreen";
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
          headerLeft: () => {
            return (
              <View style={{ paddingLeft: 22 }}>
                <Image source={require("./assets/sun.png")} />
              </View>
            );
          },
          headerRight: () => {
            return (
              <Box flexDirection={"row"} paddingHorizontal="s">
                <Box paddingHorizontal="s">
                  <RectButton
                    onPress={() => navigation.navigate("Notification")}
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: 10,
                      backgroundColor: "white",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
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
                  </RectButton>
                </Box>
                <Box>
                  <RectButton
                    onPress={() => navigation.navigate("New")}
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      width: 71,
                      height: 28,
                      borderRadius: 10,
                      backgroundColor: "white",
                    }}
                  >
                    <Box flexDirection="row" justifyContent="space-between">
                      <Text>New</Text>
                      <Icon style={{ padding: 2 }} name="plus" size={18} />
                    </Box>
                  </RectButton>
                </Box>
              </Box>
            );
          },

          headerTitle: () => (
            <Text style={{ fontFamily: "Saman", fontSize: 20 }}>
              Daivjnaya Brahmin
            </Text>
          ),
          headerStyle: {
            elevation: 0,
            backgroundColor: theme.colors.mainBackground,
          },
        })}
        name={"Home"}
        component={HomeScreen}
      />
      <AppStack.Screen
        options={{ headerStyle: { elevation: 1 } }}
        name="New"
        component={NewScreen}
      />
      <AppStack.Screen
        options={{ headerStyle: { elevation: 1 } }}
        name="Notification"
        component={Notification}
      />
      <AppStack.Screen
        options={{ headerStyle: { elevation: 1 } }}
        name="Event"
        component={EventScreen}
      />
    </AppStack.Navigator>
  );
};

export default AppNavigation;
