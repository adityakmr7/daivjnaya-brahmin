import { useIsFocused } from "@react-navigation/native";
import React, { useEffect } from "react";
import { ActivityIndicator, Dimensions } from "react-native";
import {
  FlatList,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { Image } from "react-native";
import { connect } from "react-redux";
import { getAllB2bProduct } from "../../actions/b2bActions";
import { Box, Text, HorizontalCard } from "../../components";

interface ProductProps {
  getAllProduct: () => void;
  productAll: any;
  navigation: any;
}

const { width: wWidth, height: wHeight } = Dimensions.get("window");
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
      <TouchableWithoutFeedback
        onPress={() =>
          navigation.navigate("B2BProductDetail", {
            id: item.pId,
            title: item.productName,
          })
        }
      >
        <Box
          borderTopWidth={0}
          borderLeftWidth={0}
          borderRightWidth={0}
          borderWidth={1}
          marginHorizontal="s"
          height={wWidth / 4}
          borderColor="greyish"
        >
          <Box flex={1} alignItems="center" flexDirection="row">
            {item.vendor._links && item.vendor._links.profilePic ? (
              <Image
                style={{ width: "30%", height: "80%" }}
                source={{ uri: item.vendor._links.profilePic.href }}
              />
            ) : null}
            <Box paddingHorizontal="s">
              <Text>{item.vendor.fullName}</Text>
              <Text>{item.vendor.designation}</Text>
            </Box>
          </Box>
        </Box>
      </TouchableWithoutFeedback>
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
