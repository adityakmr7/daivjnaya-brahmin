import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { useIsFocused } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect } from "react";
import { ActivityIndicator, Dimensions, FlatList, Image } from "react-native";
import {
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { connect } from "react-redux";
import { getJewellerVendor } from "../../actions/jewelleryActions";
import { getMatrimonyVendor } from "../../actions/matrimonyActions";
import { Box, Text, HorizontalCard } from "../../components";
import {
  MatrimonyStackParamList,
  MatrimonyTabParamList,
} from "./MatrimonyRoutes";
interface vendorProps {
  navigation: BottomTabNavigationProp<MatrimonyTabParamList, "Vendors">;
  getVendor: () => void;
  vendorState: any;
}
const { width: wWidth, height: wHeight } = Dimensions.get("window");

const Vendors = ({ navigation, getVendor, vendorState }: vendorProps) => {
  const isFocused = useIsFocused();
  useEffect(() => {
    getVendor();
  }, [isFocused]);
  const {
    matrimonyVendorLoading,
    matrimonyVendorData,
    matrimonyVendorError,
  } = vendorState;

  //   about: "beauty parlour is well know in Bangalore As we have well experienced professional expertise in bridal make up and other events Service - bridal makeup, pedicure menacer, outdoor events, other events"
  // acceptTMC: true
  // addressLine1: "near tulsi theater"
  // addressLine2: "marathhalli"
  // businessName: "Aronodaya Beauty parlour"
  // category: "PHOTOGRAPHER"
  // city: "Bangalore"
  // country: "India"
  // creationDate: 1609240433000
  // email: "aronodya@gmail.com"
  // galleries: Array(3)
  // 0: {mvgId: 1, creationDate: 1609240433000, updatedDate: 1609240433000, _links: {…}}
  // 1: {mvgId: 2, creationDate: 1609240433000, updatedDate: 1609240433000, _links: {…}}
  // 2: {mvgId: 3, creationDate: 1609240433000, updatedDate: 1609240433000, _links: {…}}
  // length: 3
  // __proto__: Array(0)
  // getCallback: true
  // mvId: 1
  // owners: Array(1)
  // 0:
  // creationDate: 1609240433000
  // designation: "expert"
  // email: ""
  // fullName: "Padma shree"
  // mvId: 1
  // phoneNumber: ""
  // place: null
  // updatedDate: 1609240433000
  // _links:
  // profilePic:
  // href: "https://s3-ap-south-1.amazonaws.com/daivajnya.brahmin/Daivajna/Matrimony/Media/1609239836710.jpeg"
  // __proto__: Object
  // __proto__: Object
  // __proto__: Object
  // length: 1
  // __proto__: Array(0)
  // phoneNumber: "7238823423"
  // pincode: "560087"
  // service: ""
  // state: "Karnataka"
  // updatedDate: 1609240433000
  const renderItem = ({ item }: { item: any }) => {
    return (
      <TouchableWithoutFeedback
        onPress={() =>
          navigation.navigate("VendorDetail", {
            id: item.mvId,
            title: item.businessName,
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
              <Text color="grey" variant="cardSubTitle">
                {item.businessName}
              </Text>
              {item.about !== null ? (
                <Text variant="cardText" color="primaryText" numberOfLines={1}>
                  {item.about.substring(0, 30)}...
                </Text>
              ) : null}
            </Box>
          </Box>
        </Box>
      </TouchableWithoutFeedback>
    );
  };
  return (
    <Box backgroundColor="iconBackground" flex={1}>
      {matrimonyVendorLoading ? (
        <Box flex={1}>
          <ActivityIndicator />
        </Box>
      ) : (
        <FlatList
          data={matrimonyVendorData}
          renderItem={renderItem}
          keyExtractor={(item: any) => item.mvId.toString()}
        />
      )}
    </Box>
  );
};
function mapStateToProps(state: any) {
  return {
    vendorState: state.matrimony,
  };
}
const mapDispatchToProps = (dispatch: any) => ({
  getVendor: () => dispatch(getMatrimonyVendor()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Vendors);
