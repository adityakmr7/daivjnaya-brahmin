import { useIsFocused } from "@react-navigation/native";
import React, { useEffect } from "react";
import { ActivityIndicator, Dimensions, Image } from "react-native";
import {
  FlatList,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { connect } from "react-redux";
import { getJewellerShop } from "../../actions/jewelleryActions";
import { Box, HorizontalCard, SearchBox, Text } from "../../components";

interface ShopProps {
  getShop: () => void;
  jewellery: any;
  navigation: any;
}
const { width: wWidth, height: wHeight } = Dimensions.get("window");

function Shop({ getShop, jewellery, navigation }: ShopProps) {
  const {
    jewelleryShopLoading,
    jewelleryShopData,
    jewelleryShopError,
  } = jewellery;
  const isFocused = useIsFocused();
  useEffect(() => {
    getShop();
  }, [isFocused]);

  // about: "We at ShipJewel create tastefully crafted Gold & Diamond Jewellery for the new generation, for whom Style and Sophistication go hand-in-hand. We deeply understand what today's women is made up of! And that's what reflects in each Jewellery design that we make. It just doesn't stop at unique designs; we own each stage of jewellery making, starting from an idea to a beautifully crafted master piece."
  // acceptTMC: true
  // addressLine1: "Rayhillsort Residency, "
  // addressLine2: "Pickle Road, Kajubag, Karwar - 581301"
  // city: "Karwar"
  // country: "India"
  // creationDate: 1608653813000
  // email: "shreyajewels@gmail.com"
  // facilities: "Jewellery repair, Gold Designing, "
  // galleries: []
  // getCallback: true
  // jId: 1
  // otherInfo: null
  // owners: [{…}]
  // phoneNumber: "8342342323"
  // pincode: "581301"
  // price: null
  // professionName: "string"
  // shopName: "Shrya Jewels"
  // state: "Karnataka"
  // updatedDate: 1608653813000
  // website: "www.shryajewels.com"
  // _links:
  // coverImage:
  // href: "string"

  const renderItem = ({ item }: { item: any }) => {
    return (
      <TouchableWithoutFeedback
        onPress={() =>
          navigation.navigate("JewelleryShopDetail", {
            id: item.jId,
            title: item.shopName,
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
            {item.galleries.length > 0 &&
            item.galleries[0]._links !== undefined &&
            item.galleries[0]._links.image ? (
              <Image
                style={{ width: "30%", height: "80%" }}
                source={{ uri: item.galleries[0]._links.image.href }}
              />
            ) : null}
            <Box paddingHorizontal="s">
              <Text>{item.shopName}</Text>
              <Text>{item.state}</Text>
            </Box>
          </Box>
        </Box>
      </TouchableWithoutFeedback>
    );
  };
  return (
    <Box backgroundColor="iconBackground" flex={1}>
      <Box>
        {jewelleryShopLoading ? (
          <Box>
            <ActivityIndicator />
          </Box>
        ) : (
          <Box>
            <FlatList
              data={jewelleryShopData}
              renderItem={renderItem}
              keyExtractor={(item: any) => item.jId.toString()}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
}

function mapStateToProps(state: any) {
  return {
    jewellery: state.jewellery,
  };
}

const mapDispatchToProps = (dispatch: any) => ({
  getShop: () => dispatch(getJewellerShop()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
