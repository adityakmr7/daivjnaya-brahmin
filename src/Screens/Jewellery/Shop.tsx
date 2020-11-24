import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Box, HorizontalCard, SearchBox, Text } from "../../components";

const shopList = [
  {
    id: 1,
    image: require("../../../assets/images/jwellary-asset-1.png"),
    title: "Community Name",
    subtitle: "Risus commodo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod…",
    btn: "View full details",
  },
  {
    id: 2,
    image: require("../../../assets/images/jwellary-asset-1.png"),
    title: "Community Name",
    subtitle: "Risus commodo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod…",
    btn: "View full details",
  },
  {
    id: 3,
    image: require("../../../assets/images/jwellary-asset-1.png"),
    title: "Community Name",
    subtitle: "Risus commodo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod…",
    btn: "View full details",
  },
  {
    id: 4,
    image: require("../../../assets/images/jwellary-asset-1.png"),
    title: "Community Name",
    subtitle: "Risus commodo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod…",
    btn: "View full details",
  },
];

export const assetShop = shopList.map((item, i) => item.image);

export default function Shop() {
  return (
    <ScrollView>
      <Box backgroundColor="iconBackground" flex={1}>
        {/* {shopList.map((data, i) => {
          return (
            <HorizontalCard
              key={i}
              onPress={() => console.log("ShopDetail")}
              {...{ data }}
            />
          );
        })} */}
      </Box>
    </ScrollView>
  );
}
