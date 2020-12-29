import React, { useEffect, useLayoutEffect } from "react";
import { ActivityIndicator, Dimensions, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";
import {
  getJewelleryVendorDetail,
  getJewelleryWorkerDetail,
} from "../../actions/jewelleryActions";
import { Box, Text } from "../../components";
import { Feather as Icon } from "@expo/vector-icons";

interface ShopDetailProps {
  route: any;
  getVendorDetail: (id: number) => void;
  vendor: any;
  navigation: any;
}
const { width: wWidth, height: wHeight } = Dimensions.get("window");

const VendorDetail = ({
  navigation,
  route,
  getVendorDetail,
  vendor,
}: ShopDetailProps) => {
  const { id, title } = route.params;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: title,
    });
  }, [title]);

  useEffect(() => {
    getVendorDetail(id);
  }, [id]);
  const { vendorDetailLoading, vendorDetailData, vendorDetailError } = vendor;
  const {
    galleries,
    email,
    phoneNumber,
    addressLine1,
    addressLine2,
    type,
    fullName,
    updatedDate,
    creationDate,
  } = vendorDetailData;
  //   about: "jdndndn"
  // acceptTMC: true
  // addressLine1: "dndnnfnf"
  // addressLine2: "dndnnfnf"
  // city: "dndndnnd"
  // country: "dfnfnnfnc"
  // creationDate: 1609049135000
  // email: "adityakmr088@gmail.com"
  // facilities: "dnfnffnf"
  // fullName: "jsjfkfkf fkfkfmf"
  // galleries: (3) [{…}, {…}, {…}]
  // getCallback: true
  // jId: 3
  // otherInfo: "ndnfnfnfn"
  // phoneNumber: "9985225252"
  // pincode: "851101"
  // price: "25"
  // professionName: "jddjdjdjd"
  // state: "bihar"
  // updatedDate: 1609049135000
  // website: "www.india.com"
  return (
    <Box flex={1}>
      <ScrollView>
        {vendorDetailLoading ? (
          <Box>
            <ActivityIndicator />
          </Box>
        ) : (
          <Box flex={1}>
            {galleries !== undefined ? (
              <Box>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  {galleries.map((item: any, i: number) => {
                    return (
                      <Box key={i} height={wWidth + 100} width={wWidth}>
                        <Image
                          style={{
                            width: "100%",
                            height: "100%",
                          }}
                          source={{
                            uri:
                              item &&
                              item._links &&
                              item._links.image &&
                              item._links.image.href &&
                              item._links.image.href,
                          }}
                        />
                      </Box>
                    );
                  })}
                </ScrollView>
              </Box>
            ) : (
              <Box>
                <Text>No Image To Show</Text>
              </Box>
            )}
            <Box marginHorizontal="s" marginVertical="s">
              <Box>
                <Text variant="cardSubTitle" color="primaryText">
                  {type}
                </Text>
                <Text
                  marginVertical="s"
                  variant="cardTitle"
                  color="primaryText"
                >
                  {fullName}
                </Text>
                <Text marginVertical="s">
                  <Icon name="map-pin" size={20} />{" "}
                  <Text variant="cardSubTitle" color="primaryText">
                    {addressLine1 ? addressLine1 : null}
                  </Text>
                </Text>
                <Text marginVertical="s">
                  <Icon name="mail" size={20} /> Email :
                  <Text variant="cardSubTitle" color="primaryText">
                    {email ? email : null}
                  </Text>
                </Text>
                <Text marginVertical="s">
                  <Icon name="phone" size={20} /> Phone :
                  <Text variant="cardSubTitle" color="primaryText">
                    {phoneNumber ? phoneNumber : null}
                  </Text>
                </Text>
              </Box>
              {vendor ? (
                <Box marginVertical="s">
                  <Text variant="cardTitle" color="primaryText">
                    Vendor
                  </Text>
                  <Box
                    marginVertical="s"
                    width={wWidth}
                    height={wWidth * 0.2}
                    flexDirection="row"
                    alignItems="center"
                  >
                    <Box width={"20%"} height={"100%"}>
                      {vendor._links !== undefined ? (
                        <Image
                          style={{ width: "100%", height: "100%" }}
                          source={{ uri: vendor._links.profilePic.href }}
                        />
                      ) : null}
                    </Box>
                    <Box marginHorizontal="s">
                      <Text>{vendor.fullName}</Text>
                      <Text>{vendor.designation}</Text>
                    </Box>
                  </Box>
                </Box>
              ) : null}
            </Box>
          </Box>
        )}
      </ScrollView>
    </Box>
  );
};
function mapStateToProps(state: any) {
  return {
    vendor: state.jewellery,
  };
}
const mapDispatchToProps = (dispatch: any) => ({
  getVendorDetail: (id: number) => dispatch(getJewelleryVendorDetail(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VendorDetail);
