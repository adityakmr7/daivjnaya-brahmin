import { color } from "@shopify/restyle";
import { StatusBar } from "expo-status-bar";
import React, { useLayoutEffect } from "react";
import { Image } from "react-native";
import { Box, Text } from "../../components";
import { StackNavigationProps } from "../../components/NavigationRoutes";
import { Feather as Icon } from "@expo/vector-icons";
const MyProfile = ({ navigation }: StackNavigationProps<"MyProfile">) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);
  return (
    <Box flex={1}>
      <StatusBar translucent={true} />
      <Box height={20}>
        <Image height={20} source={require("./assets/wall.png")} />
      </Box>
      <Box
        marginHorizontal="xl"
        justifyContent="space-between"
        style={{ marginTop: 115, marginLeft: 20 }}
        flexDirection="row"
      >
        <Box
          borderRadius="xl"
          backgroundColor="notificationColor"
          height={140}
          width={140}
        ></Box>
        <Box style={{ marginTop: 60 }} alignSelf="center">
          <Text>Edit Profile</Text>
        </Box>
      </Box>
      <Box paddingHorizontal="m" paddingVertical="s">
        <Text variant="sectionTitle">Siddharth Revankar</Text>
        <Box>
          <Box>
            <Box flexDirection="row" alignItems="center">
              <Icon name="briefcase" />
              <Text>Chef at Healthy Eats</Text>
            </Box>
            <Box flexDirection="row" alignItems="center">
              <Icon name="briefcase" />
              <Text>Studied at National College</Text>
            </Box>
            <Box flexDirection="row" alignItems="center">
              <Icon name="briefcase" />
              <Text>Lives in Baad, Karwar</Text>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box>{/* // TODO:  Tab Bar Navigation Here */}</Box>
    </Box>
  );
};

export default MyProfile;
