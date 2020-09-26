import React, { useLayoutEffect } from "react";
import { Dimensions, Image } from "react-native";
import { TabNavigationProps } from ".";
import { Box, Text } from "../../components";
import { houses } from "./Karwar";
import { Feather as Icon } from "@expo/vector-icons";
import { RectButton, ScrollView } from "react-native-gesture-handler";
const { width: wWidth, height: wHeight } = Dimensions.get("window");

const KarawarDetail = ({
  navigation,
  route,
}: TabNavigationProps<"KarawarDetail">) => {
  const { id } = route.params;
  const house = houses.filter((x) => x.id === id)[0];

  return (
    <Box flex={1}>
      <ScrollView>
        <Box>
          <Image
            style={{
              height: wWidth,
              width: wWidth,
              borderBottomRightRadius: 10,
              borderBottomLeftRadius: 10,
            }}
            source={house.image}
          />
        </Box>
        <Box marginTop="l" marginHorizontal="xxl">
          <Text variant="sectionTitle">{house.title}</Text>
          <Box flexDirection="row" marginVertical="s">
            <Icon name="map-pin" size={15} />
            <Text paddingHorizontal="s">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmo.
            </Text>
          </Box>
          <Box flexDirection="row" marginVertical="s">
            <Icon name="mail" size={15} />
            <Text paddingHorizontal="s">example@gmail.com</Text>
          </Box>
          <Box flexDirection="row" marginVertical="s">
            <Icon name="phone-call" size={15} />
            <Text paddingHorizontal="s">+91 1234 567 890</Text>
          </Box>
        </Box>
        <Box marginVertical="s" marginHorizontal="xxl">
          <Text variant="sectionTitle">Community Members</Text>
        </Box>

        {[1, 2, 3].map((_, i) => {
          return (
            <Box
              marginVertical="s"
              key={i}
              flexDirection="row"
              marginHorizontal="xxl"
            >
              <Box>
                <Image
                  style={{
                    borderRadius: 10,
                    height: wWidth / 4,
                    width: wWidth / 4,
                  }}
                  source={house.image}
                />
              </Box>
              <Box paddingHorizontal="l">
                <Text color="primaryText" variant="cardSubTitle">
                  Full Name
                </Text>
                <Text marginVertical="s" variant="cardText" color="primaryText">
                  Designation
                </Text>
                <RectButton
                  onPress={() => navigation.navigate("CommunityMember")}
                >
                  <Text color="selectColor">View details</Text>
                </RectButton>
              </Box>
              <Box height={3} backgroundColor="mainBackground" />
            </Box>
          );
        })}
      </ScrollView>
    </Box>
  );
};

export default KarawarDetail;
