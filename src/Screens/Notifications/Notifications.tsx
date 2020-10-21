import React from "react";
import { Dimensions, Image } from "react-native";
import {
  RectButton,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { Box, Text, VideoSection } from "../../components";
import SectionHeader from "../HomeScreen/components/SectionHeader";
import { StackNavigationProps } from "../../components/NavigationRoutes";
const { width: wWidth, height: wHeight } = Dimensions.get("window");
const image = require("../../../assets/images/img-2.png");

export const NotificationData = [
  {
    id: 1,
    title:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
    subtitle:
      "Morbi a suscipit ipsum. Suspendisse mollis libero ante. Pellentesque finibus convallis nulla vel placerat. Nulla ipsum…",
    img: require("../../../assets/images/card-image.png"),
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores. Morbi a suscipit ipsum. Suspendisse mollis libero ante. Pellentesque finibus convallis nulla vel placerat. Nulla ipsum. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus ras purus odio, vestibulum in vulputate at, tempus viverra turpis. Cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa officia deserunt mollit anim id est laborum. Cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat non proident, sunt in culpa qui officia deserunt anim id est laborum anim. Morbi a suscipit ipsum. Suspendisse mollis libero ante. Pellentesque finibus convallis nulla vel placerat. Nulla ipsum. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus ras purus odio, vestibulum in vulputate at, tempus viverra turpis.",
  },
  {
    id: 2,
    title:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
    subtitle:
      "Morbi a suscipit ipsum. Suspendisse mollis libero ante. Pellentesque finibus convallis nulla vel placerat. Nulla ipsum…",
    img: require("../../../assets/images/card-image.png"),
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores. Morbi a suscipit ipsum. Suspendisse mollis libero ante. Pellentesque finibus convallis nulla vel placerat. Nulla ipsum. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus ras purus odio, vestibulum in vulputate at, tempus viverra turpis. Cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa officia deserunt mollit anim id est laborum. Cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat non proident, sunt in culpa qui officia deserunt anim id est laborum anim. Morbi a suscipit ipsum. Suspendisse mollis libero ante. Pellentesque finibus convallis nulla vel placerat. Nulla ipsum. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus ras purus odio, vestibulum in vulputate at, tempus viverra turpis.",
  },
  {
    id: 2,
    title:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
    subtitle:
      "Morbi a suscipit ipsum. Suspendisse mollis libero ante. Pellentesque finibus convallis nulla vel placerat. Nulla ipsum…",
    img: require("../../../assets/images/card-image.png"),
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores. Morbi a suscipit ipsum. Suspendisse mollis libero ante. Pellentesque finibus convallis nulla vel placerat. Nulla ipsum. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus ras purus odio, vestibulum in vulputate at, tempus viverra turpis. Cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa officia deserunt mollit anim id est laborum. Cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat non proident, sunt in culpa qui officia deserunt anim id est laborum anim. Morbi a suscipit ipsum. Suspendisse mollis libero ante. Pellentesque finibus convallis nulla vel placerat. Nulla ipsum. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus ras purus odio, vestibulum in vulputate at, tempus viverra turpis.",
  },
];

export const NotificationAssets = NotificationData.map((item) => item.img);

const Notifications = ({
  navigation,
}: StackNavigationProps<"Notification">) => {
  const CARD_WIDTH = wWidth - 40;
  const CARD_HEIGHT = wWidth;
  return (
    <Box flex={1} backgroundColor="mainBackground">
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        {NotificationData.map((item, index) => {
          return (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => navigation.navigate("Event", { id: item.id })}
            >
              <Box
                backgroundColor="iconBackground"
                elevation={1}
                borderRadius="s"
                marginTop="xl"
                marginBottom="l"
                height={CARD_HEIGHT}
                width={CARD_WIDTH}
                marginLeft="l"
              >
                <Box>
                  <Image
                    style={{ width: CARD_WIDTH, borderRadius: 6 }}
                    source={item.img}
                  />
                </Box>
                <Box marginVertical="s" marginHorizontal="s">
                  <Text
                    numberOfLines={3}
                    lineBreakMode="clip"
                    color="primaryText"
                    variant="silentText"
                  >
                    {item.title}
                  </Text>
                  <Text
                    numberOfLines={3}
                    lineBreakMode="clip"
                    marginVertical="s"
                    variant="mainIconSubTitle"
                  >
                    {item.subtitle}
                  </Text>
                </Box>
              </Box>
            </TouchableWithoutFeedback>
          );
        })}
      </ScrollView>

      <SectionHeader title="Videos" onPress={() => {}} />
      <Box
        paddingVertical="l"
        width={wWidth - 40}
        marginLeft="l"
        justifyContent="space-between"
      >
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          {[1, 2, 3].map((item, index) => {
            return <VideoSection key={index} image={image} />;
          })}
        </ScrollView>
      </Box>
    </Box>
  );
};

export default Notifications;
