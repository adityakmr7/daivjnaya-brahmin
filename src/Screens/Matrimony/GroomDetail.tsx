import { StackNavigationProp } from "@react-navigation/stack";
import React, { useLayoutEffect } from "react";
import { Box, Text } from "../../components";
import { MatrimonyStackParamList } from "./MatrimonyRoutes";
import { Feather as Icon } from "@expo/vector-icons";
import { RouteProp } from "@react-navigation/native";
import { GroomList } from "./Groom";
import { Dimensions, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const { width: wWidth, height: wHeight } = Dimensions.get("window");
const GroomDetail = ({
  navigation,
  route,
}: {
  navigation: StackNavigationProp<MatrimonyStackParamList, "GroomDetail">;
  route: RouteProp<MatrimonyStackParamList, "GroomDetail">;
}) => {
  const id = route.params.id;
  const data = GroomList.filter((item) => item.id === id)[0];
  console.log(data);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      headerTitleStyle: {
        display: "none",
      },
      headerRight: () => (
        <Box paddingHorizontal="s" flexDirection="row" alignItems="center">
          <Text paddingHorizontal="s">1/2</Text>
          <Icon name="more-vertical" size={26} />
        </Box>
      ),
    });
  }, [navigation]);
  return (
    <Box flex={1}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box height={wHeight * 0.7}>
          <Image
            style={{ height: "100%", width: "100%" }}
            source={data.image}
          />
          <Box
            bottom={0}
            right={30}
            position="absolute"
            backgroundColor="mainIconColor"
            height={52}
            width={52}
            borderRadius="xl"
            justifyContent="center"
            alignItems="center"
          >
            <Icon color="white" size={26} name="message-square" />
          </Box>
        </Box>
        <Box paddingHorizontal="xl">
          <Text variant="seeAll">Info</Text>
          <Text variant="sectionTitle">{data.title}</Text>
          <Text color="grey" variant="mainIconSubTitle">
            Designation
          </Text>

          <Box
            alignItems="center"
            width={wWidth - wWidth * 0.2}
            flexDirection="row"
            paddingVertical="s"
          >
            <Icon size={15} name="briefcase" />
            <Text paddingHorizontal="mx">
              Chef at <Text>Healthy eats</Text>
            </Text>
          </Box>

          <Box
            alignItems="center"
            width={wWidth - wWidth * 0.2}
            flexDirection="row"
          >
            <Icon size={15} name="briefcase" />
            <Text paddingHorizontal="mx">
              Studied at <Text>National College</Text>
            </Text>
          </Box>

          <Box
            paddingVertical="s"
            alignItems="flex-start"
            width={wWidth - wWidth * 0.2}
            flexDirection="row"
          >
            <Icon size={15} name="map-pin" />
            <Text paddingHorizontal="mx">
              Studied at
              <Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laboriosam, repellendus.
              </Text>
            </Text>
          </Box>

          <Box
            alignItems="center"
            width={wWidth - wWidth * 0.2}
            flexDirection="row"
          >
            <Icon size={15} name="home" />
            <Text paddingHorizontal="mx">
              Lives in <Text>Baad, Kanwar</Text>
            </Text>
          </Box>

          <Box
            paddingVertical="s"
            alignItems="center"
            width={wWidth - wWidth * 0.2}
            flexDirection="row"
          >
            <Icon size={15} name="mail" />
            <Text paddingHorizontal="mx">
              Email <Text>helllo@gmail.com</Text>
            </Text>
          </Box>
          <Box
            paddingVertical="s"
            alignItems="center"
            width={wWidth - wWidth * 0.2}
            flexDirection="row"
          >
            <Icon size={15} name="phone" />
            <Text paddingHorizontal="mx">
              Phone <Text>+91 8956 8597 859</Text>
            </Text>
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default GroomDetail;
