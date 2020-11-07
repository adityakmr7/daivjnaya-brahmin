import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Box, Text } from "../../components";

interface VendorsProps {}
const vendorList = [
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
export const assetsVendor = vendorList.map((item, i) => item.image);

const Vendors = ({}: VendorsProps) => {
  return (
    <ScrollView>
      <Box backgroundColor="iconBackground" flex={1}>
        {/* {vendorList.map((data, i) => {
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
};

export default Vendors;
