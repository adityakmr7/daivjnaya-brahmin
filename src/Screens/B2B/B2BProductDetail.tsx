import React, { useEffect, useLayoutEffect } from "react";
import { Image } from "react-native";
import { connect } from "react-redux";
import { Box, Text } from "../../components";
import { getB2bProductDetail } from "../../actions/b2bActions";
import { ActivityIndicator, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Feather as Icon } from "@expo/vector-icons";
interface B2BDetailProps {
  route: any;
  getDetail: (id: number) => void;
  product: any;
  navigation: any;
}
const { width: wWidth, height: wHeight } = Dimensions.get("window");
// vendor
// creationDate: 1608451535000
// designation: "Sales Manager"
// email: "ocean@gmail.com"
// fullName: "Shiva Revankar"
// phoneNumber: "983412341"
// place: "Karwar"
// profilePic: null
// pvId: 1
// updatedDate: 1608451535000

const B2BDetail = ({
  route,
  navigation,
  getDetail,
  product,
}: B2BDetailProps) => {
  const { id, title } = route.params;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: title,
    });
  }, [title]);
  const {
    productDetailLoading,
    productDetailData,
    productDetailError,
  } = product;
  useEffect(() => {
    getDetail(id);
  }, [id]);
  const {
    galleries,
    email,
    vendor,
    phoneNumber,
    productName,
    updatedDate,
    address,
    creationDate,
  } = productDetailData;
  console.log("#######", productDetailData);
  return (
    <Box flex={1}>
      <ScrollView>
        {productDetailLoading ? (
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
    product: state.b2b,
  };
}
const mapDispatchToProps = (dispatch: any) => ({
  getDetail: (id: number) => dispatch(getB2bProductDetail(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(B2BDetail);
