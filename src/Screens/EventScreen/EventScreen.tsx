import React from "react";
import { Image, StyleSheet } from "react-native";
import {
  RectButton,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { Box, Text } from "../../components";
import { StackNavigationProps } from "../../components/NavigationRoutes";
import { NotificationData } from "../Notifications/Notifications";
import { Feather as Icon } from "@expo/vector-icons";

const styles = StyleSheet.create({
  icon: {
    paddingHorizontal: 6,
  },
});

const EventScreen = ({ route, navigation }: StackNavigationProps<"Event">) => {
  const { id } = route.params;
  const eventsDetail = NotificationData.filter((x) => x.id === id)[0];

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Box flexDirection="row">
          <TouchableWithoutFeedback onPress={() => console.log("bookmark")}>
            <Icon style={styles.icon} size={26} name="bookmark" />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => console.log("share")}>
            <Icon style={styles.icon} size={26} name="share-2" />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => console.log("More")}>
            <Icon style={styles.icon} size={26} name="more-vertical" />
          </TouchableWithoutFeedback>
        </Box>
      ),
    });
  }, [navigation]);

  return (
    <Box flex={1} backgroundColor="mainBackground">
      <Box marginHorizontal="l" paddingTop="s">
        <ScrollView showsVerticalScrollIndicator={false}>
          <Box paddingVertical="s">
            <Text color="primaryText" variant="silentText">
              {eventsDetail.title}
            </Text>
          </Box>
          <Box>
            <Image source={eventsDetail.img} />
          </Box>
          <Box paddingVertical="s">
            <Text color="primaryText" variant="cardText">
              {eventsDetail.subtitle}
            </Text>
          </Box>
          <Box paddingBottom="xxl">
            <Text lineHeight={30} color="grey" variant="cardSubTitle">
              {eventsDetail.description}
            </Text>
          </Box>
        </ScrollView>
      </Box>
    </Box>
  );
};

export default EventScreen;
