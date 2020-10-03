import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Box, Text } from "../../components";
import HorizontalCard from "../communityHub/components/HorizontalCard";

interface ProductProps {}

export const ProductList = [
  {
    id: 1,
    title: "Full Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod…",
    image: require("./assets/sweet-1.png"),
    btn: "View full details",
  },
  {
    id: 2,
    title: "Full Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod…",
    image: require("./assets/sweet-2.png"),
    btn: "View full details",
  },
  {
    id: 3,
    title: "Full Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod…",
    image: require("./assets/sweet-3.png"),
    btn: "View full details",
  },
];

const Product = ({ navigation }: ProductProps) => {
  return (
    <ScrollView>
      <Box backgroundColor="iconBackground" flex={1}>
        <Box>
          {ProductList.map((data, i) => {
            return (
              <HorizontalCard
                key={i}
                onPress={() =>
                  navigation.navigate("GroomDetail", {
                    id: data.id,
                  })
                }
                {...{ data }}
              />
            );
          })}
        </Box>
      </Box>
    </ScrollView>
  );
};

export default Product;
