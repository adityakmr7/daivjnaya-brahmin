import React, { useEffect } from "react";
import {
  ActivityIndicator,
  Dimensions,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { Box, Text } from "../../components";
import { connect } from "react-redux";
import { getJewellerVendor } from "../../actions/jewelleryActions";
import { useIsFocused } from "@react-navigation/native";
interface VendorsProps {
  jewellery: any;
  navigation: any;
  getVendor: () => void;
}
const { width: wWidth, height: wHeight } = Dimensions.get("window");

const Vendors = ({ jewellery, getVendor, navigation }: VendorsProps) => {
  const isFocused = useIsFocused();
  useEffect(() => {
    getVendor();
  }, [isFocused]);
  const {
    jewelleryVendorLoading,
    jewelleryVendorData,
    jewelleryVendorError,
  } = jewellery;

  const renderItem = ({ item }: { item: any }) => {
    return (
      <TouchableWithoutFeedback
      // onPress={() =>
      //   navigation.navigate("B2BProductDetail", {
      //     id: item.pId,
      //     title: item.productName,
      //   })
      // }
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
            {item.galleries.length > 0 &&
            item.galleries[0]._links &&
            item.galleries[0]._links.image ? (
              <Image
                style={{ width: "30%", height: "80%" }}
                source={{ uri: item.galleries[0]._links.image.href }}
              />
            ) : null}
            <Box paddingHorizontal="s">
              <Text>{item.fullName}</Text>
              <Text>{item.facilities}</Text>
            </Box>
          </Box>
        </Box>
      </TouchableWithoutFeedback>
    );
  };
  return (
    <Box backgroundColor="iconBackground" flex={1}>
      <Box>
        {jewelleryVendorLoading ? (
          <Box>
            <ActivityIndicator />
          </Box>
        ) : (
          <Box>
            <FlatList
              data={jewelleryVendorData}
              renderItem={renderItem}
              keyExtractor={(item: any) => item.jId.toString()}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

function mapStateToProps(state: any) {
  return {
    jewellery: state.jewellery,
  };
}

const mapDispatchToProps = (dispatch: any) => ({
  getVendor: () => dispatch(getJewellerVendor()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Vendors);
