import React, { useEffect } from "react";
import { Image } from "react-native";
import { connect } from "react-redux";
import { Box, Text } from "../../components";
import { getB2bProductDetail } from "../../actions/b2bActions";
import { ActivityIndicator, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

interface B2BDetailProps {
  route: any;
  getDetail: (id: number) => void;
  product: any;
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

const B2BDetail = ({ route, getDetail, product }: B2BDetailProps) => {
  const { id } = route.params;
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
                <Text variant="cardTitle" color="primaryText">
                  {productName}
                </Text>
                <Text>Address : {address ? address : null}</Text>
                <Text>Email : {email ? email : null}</Text>
                <Text>Phone : {phoneNumber ? phoneNumber : null}</Text>
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