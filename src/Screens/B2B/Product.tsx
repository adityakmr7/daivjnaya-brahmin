import { useIsFocused } from "@react-navigation/native";
import React, { useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
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

  //   address: "Kodibag, Karwar, Karnataka 581301"
  // creationDate: 1608451535000
  // email: "ocean@gmail.com"
  // galleries: (3) [{…}, {…}, {…}]
  // pId: 1
  // phoneNumber: "983412341"
  // productName: "Ocean Food Vendor"
  // updatedDate: 1608451535000
  // vendor:
  // creationDate: 1608451535000
  // designation: "Sales Manager"
  // email: "ocean@gmail.com"
  // fullName: "Shiva Revankar"
  // phoneNumber: "983412341"
  // place: "Karwar"
  // profilePic: null
  // pvId: 1
  // updatedDate: 1608451535000
  // _links:
  // profilePic:
  // href: "https://s3-ap-south-1.amazonaws.com/daivajnya.brahmin/Daivajna/B2B/Media/1608451359901.jpeg"

  const renderItem = ({ item }: { item: any }) => {
    console.log("productItem", item);
    return (
      <Box flex={1}>
        <Text>{item.vendor.fullName}</Text>
      </Box>
    );
  };

  return (
    <Box backgroundColor="iconBackground" flex={1}>
      <Box>
        {productLoading ? (
          <Box>
            <ActivityIndicator />
          </Box>
        ) : (
          <Box>
            <FlatList
              data={productData}
              renderItem={renderItem}
              keyExtractor={(item: any) => item.pId.toString()}
            />
          </Box>
        )}

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
