import React from "react";
import { Dimensions, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Box, Text, VideoSection } from "../../components";
import SectionHeader from "../HomeScreen/components/SectionHeader";

const { width: wWidth, height: wHeight } = Dimensions.get("window");
const image = require("../../../assets/images/img-2.png");
interface NotificationsProps {}
const Notifications = ({}: NotificationsProps) => {
  const CARD_WIDTH = wWidth - 40;
  const CARD_HEIGHT = wWidth;
  return (
    <Box flex={1} backgroundColor="mainBackground">
      <Box
        backgroundColor="iconBackground"
        elevation={1}
        borderRadius="s"
        marginTop="xl"
        marginBottom="l"
        height={CARD_HEIGHT}
        width={CARD_WIDTH}
        marginHorizontal="l"
        // backgroundColor="notificationColor"
      >
        <Box>
          <Image
            style={{ width: CARD_WIDTH, borderRadius: 6 }}
            source={require("./assets/card-image.png")}
          />
        </Box>
        <Box marginVertical="s" marginHorizontal="s">
          <Text color="primaryText" variant="silentText">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis
          </Text>
          <Text marginVertical="s" variant="mainIconSubTitle">
            Morbi a suscipit ipsum. Suspendisse mollis libero ante. Pellentesque
            finibus convallis nulla vel placerat. Nulla ipsum…
          </Text>
        </Box>
      </Box>
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
