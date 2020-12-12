import React, { ReactNode, useEffect, useRef, useState } from "react";
import { Box, Text } from "../components";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";
import Constants from "expo-constants";
import { Platform, View } from "react-native";
import { Button } from "react-native-propel-kit";
import restServices from "../services/restServices";

interface NotificationProps {}

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "You've got mail! 📬",
      body: "Here is the notification body",
      data: { data: "goes here" },
    },
    trigger: { seconds: 2 },
  });
}

async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } = await Permissions.getAsync(
      Permissions.NOTIFICATIONS
    );
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log("token", token);
  } else {
    alert("Must use physical device for Push Notifications");
  }

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  return token;
}
const Notification = () => {
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState<boolean | any>(false);
  const notificationListener: any = useRef<any>();
  const responseListener: any = useRef<any>();

  useEffect(() => {
    registerForPushNotificationsAsync().then((token: any) =>
      setExpoPushToken(token)
    );

    notificationListener.current = Notifications.addNotificationReceivedListener(
      (notification) => {
        setNotification(notification);
      }
    );

    responseListener.current = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        console.log("######res", response);
      }
    );

    return () => {
      Notifications.removeNotificationSubscription(notificationListener);
      Notifications.removeNotificationSubscription(responseListener);
    };
  }, []);
  console.log("###Not", notification);
  console.log("##Not", expoPushToken);

  useEffect(() => {
    if (expoPushToken !== "") {
      const _rest = new restServices();
      _rest
        .post(`/notification/token?token=${expoPushToken}`, {})
        .then((res) => {
          console.log("tokenR", res);
        })
        .catch((err) => {
          console.log("tokenRError", err);
        });
    }
  }, [expoPushToken]);

  useEffect(() => {
    if (expoPushToken) {
      const _rest = new restServices();
      _rest
        .get(`/notification?isRead=${true}`)
        .then((res) => {
          console.log("resNotification", res);
        })
        .catch((err) => {
          console.log("Error", err);
        });
    }
  }, [expoPushToken]);

  return null;
  // return <Box flex={1}>{children}</Box>;
};

export default Notification;
