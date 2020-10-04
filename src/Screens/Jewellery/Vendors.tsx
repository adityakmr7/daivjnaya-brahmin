import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Box, HorizontalCard, Text } from "../../components";

interface VendorsProps {}

const vendorList = [
  {
    id: 1,
    image: require("./assets/img-1.png"),
    title: "Community Name",
    subtitle: "Risus commodo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod…",
    btn: "View full details",
  },
  {
    id: 2,
    image: require("./assets/img-1.png"),
    title: "Community Name",
    subtitle: "Risus commodo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod…",
    btn: "View full details",
  },
  {
    id: 3,
    image: require("./assets/img-1.png"),
    title: "Community Name",
    subtitle: "Risus commodo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod…",
    btn: "View full details",
  },
  {
    id: 4,
    image: require("./assets/img-1.png"),
    title: "Community Name",
    subtitle: "Risus commodo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod…",
    btn: "View full details",
  },
];

const Vendors = ({}: VendorsProps) => {
  return (
    <ScrollView>
      <Box backgroundColor="iconBackground" flex={1}>
        {vendorList.map((data, i) => {
          return (
            <HorizontalCard
              key={i}
              onPress={() => console.log("ShopDetail")}
              {...{ data }}
            />
          );
        })}
      </Box>
    </ScrollView>
  );
};

export default Vendors;
