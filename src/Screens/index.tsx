import React from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { theme, Box, Text } from "../components";
import { AppRoutes } from "../components/NavigationRoutes";
import { HomeScreen } from "./HomeScreen";
import { RectButton } from "react-native-gesture-handler";
import { Image, View } from "react-native";
import NewScreenStack from "./NewScreen";
import { Notification } from "./Notifications";
import EventScreen from "./EventScreen";
import NewsAndEventsStack from "./NewsEvents";
import TabNavigation from "./MyProfile";
import CommunityStack from "./communityHub/index";
import { Register } from "./Register";
import MatrimonyStack from "./Matrimony";
import B2BStackNavigation from "./B2B";
import JewelleryStack from "./Jewellery";
import AuthNavigation from "./Authentication";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import CareerStack from "./Careers";
export const AppStack = createStackNavigator<AppRoutes>();

const AppNavigation = (props: any) => {
  return (
    // <NavigationContainer>
    <AppStack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
        },
      }}
    >
      {props.isAuthenticated ? (
        <>
          <AppStack.Screen
            options={({ navigation }) => ({
              headerLeft: () => {
                return (
                  <View style={{ paddingLeft: 22 }}>
                    <Image source={require("../../assets/sun.png")} />
                  </View>
                );
              },
              headerRight: () => {
                return (
                  <Box flexDirection={"row"} paddingHorizontal="s">
                    <Box paddingHorizontal="s">
                      {/* <RectButton
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
                      </RectButton> */}
                    </Box>
                    <Box>
                      <RectButton
                        onPress={() => props.logout()}
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                          
                        }}
                      >
                        <Box flexDirection="row" justifyContent="space-between">
<<<<<<< HEAD
                          {/* <Text>Logout</Text> */}
                          <Icon
                            style={{ padding: 2 }}
                            name="log-out"
                            size={20}
                            color="black"
                            
                          />
                          
=======
                          <Box>
                            <Icon
                              style={{ padding: 2 }}
                              name="log-out"
                              size={20}
                              color="black"
                            />
                            <Text fontSize={8}>Logout</Text>
                          </Box>
>>>>>>> batman
                        </Box>
                      </RectButton>
                    </Box>
                  </Box>
                );
              },

              headerTitle: () => (
                <Image source={require("../../assets/home-logo.png")} />
                // <Text style={{ fontFamily: "Saman", fontSize: 20 }}>
                //   Daivjnaya Brahmin
                // </Text>
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
            component={NewScreenStack}
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
          <AppStack.Screen
            options={{ headerStyle: { elevation: 0 } }}
            name="NewsEvent"
            component={NewsAndEventsStack}
          />
          <AppStack.Screen
            options={{
              headerShown: false,
            }}
            name="MyProfile"
            component={TabNavigation}
          />
          {/* // ? Nested Community */}
          <AppStack.Screen
            options={{ headerShown: false }}
            name="CommunityStack"
            component={CommunityStack}
          />
          <AppStack.Screen name="Register" component={Register} />
          <AppStack.Screen
            name="Matrimony"
            options={{ headerShown: false }}
            component={MatrimonyStack}
          />
          <AppStack.Screen
            options={{ headerShown: false }}
            name="B2b"
            component={B2BStackNavigation}
          />
          <AppStack.Screen
            options={{ headerShown: false }}
            name="Jewellery"
            component={JewelleryStack}
          />
          <AppStack.Screen
            options={{
              headerShown: false,
            }}
            name="Careers"
            component={CareerStack}
          />
          {/* <AppStack.Screen name="Pricing" component={Pricing} /> */}
        </>
      ) : (
        <AppStack.Screen
          options={{ headerShown: false }}
          name="Authentication"
          component={AuthNavigation}
        />
      )}
    </AppStack.Navigator>
    // </NavigationContainer>
  );
};

function mapStateToProps(state: any) {
  const { isAuthenticated } = state.auth;
  return {
    isAuthenticated,
  };
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    logout: () => dispatch(logoutUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigation);
