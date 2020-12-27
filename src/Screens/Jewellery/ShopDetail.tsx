import React, { useEffect, useLayoutEffect } from "react";
import { ActivityIndicator, Dimensions, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { getJewelleryShopDetail } from "../../actions/jewelleryActions";
import { Box, Text } from "../../components";
import { Feather as Icon } from "@expo/vector-icons";

interface ShopDetailProps {
  route: any;
  getShopDetail: (id: number) => void;
  shop: any;
  navigation: any;
}
const { width: wWidth, height: wHeight } = Dimensions.get("window");

const ShopDetail = ({
  navigation,
  route,
  getShopDetail,
  shop,
}: ShopDetailProps) => {
  const { id, title } = route.params;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: title,
    });
  }, [title]);

  useEffect(() => {
    getShopDetail(id);
  }, [id]);
  const { shopDetailLoading, shopDetailData, shopDetailError } = shop;
  const {
    galleries,
    email,
    vendor,
    phoneNumber,
    type,
    productName,
    updatedDate,
    address,
    creationDate,
  } = shopDetailData;
  return (
    <Box flex={1}>
      <ScrollView>
        {shopDetailLoading ? (
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
                      <Box key={item.pgId} height={wWidth + 100} width={wWidth}>
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
                  {productName}
                </Text>
                <Text marginVertical="s">
                  <Icon name="map-pin" size={20} />{" "}
                  <Text variant="cardSubTitle" color="primaryText">
                    {address ? address : null}
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
    shop: state.jewellery,
  };
}
const mapDispatchToProps = (dispatch: any) => ({
  getShopDetail: (id: number) => dispatch(getJewelleryShopDetail(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopDetail);
