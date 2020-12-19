import { useIsFocused } from "@react-navigation/native";
import React, { useEffect } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { getAllB2bProduct } from "../../actions/b2bActions";
import { Box, Text, HorizontalCard } from "../../components";

interface ProductProps {
  getAllProduct: () => void;
  productAll: any;
  navigation: any;
}

export const ProductList = [
  {
    id: 1,
    title: "Full Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod…",
    image: require("../../../assets/images/sweet-1.png"),
    btn: "View full details",
  },
  {
    id: 2,
    title: "Full Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod…",
    image: require("../../../assets/images/sweet-2.png"),
    btn: "View full details",
  },
  {
    id: 3,
    title: "Full Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod…",
    image: require("../../../assets/images/sweet-3.png"),
    btn: "View full details",
  },
];
export const B2BProductAssets = ProductList.map((item, i) => item.image);

const Product = ({ navigation, getAllProduct, productAll }: ProductProps) => {
  const isFocused = useIsFocused();
  useEffect(() => {
    getAllProduct();
  }, [isFocused]);
  const { productLoading, productData, productError } = productAll;
  return (
    <Box backgroundColor="iconBackground" flex={1}>
      <Box>
        {/* {ProductList.map((data, i) => {
            return (
              <HorizontalCard
                key={i}
                onPress={() => console.log("Navigate to productDetail screen")}
                {...{ data }}
              />
            );
          })} */}
      </Box>
    </Box>
  );
};

function mapStateToProps(state: any) {
  return {
    productAll: state.b2b,
  };
}
const mapDispatchToProps = (dispatch: any) => ({
  getAllProduct: () => dispatch(getAllB2bProduct()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
