import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Box, Text, HorizontalCard } from "../../components";

interface PropertyProps {}

export const PropertyList = [
  {
    id: 1,
    title: "Full Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod…",
    image: require("../../../assets/images/property-1.png"),
    btn: "View full details",
  },
  {
    id: 2,
    title: "Full Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod…",
    image: require("../../../assets/images/property-1.png"),
    btn: "View full details",
  },
  {
    id: 3,
    title: "Full Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod…",
    image: require("../../../assets/images/property-1.png"),
    btn: "View full details",
  },
];
export const B2BPropertyAssets = PropertyList.map((item, i) => item.image);

const Property = ({ navigation }: PropertyProps) => {
  return (
    <ScrollView>
      <Box backgroundColor="iconBackground" flex={1}>
        <Box>
          {/* {PropertyList.map((data, i) => {
            return (
              <HorizontalCard
                key={i}
                onPress={() => console.log("Navigate to propertyDetail screen")}
                {...{ data }}
              />
            );
          })} */}
        </Box>
      </Box>
    </ScrollView>
  );
};

export default Property;
