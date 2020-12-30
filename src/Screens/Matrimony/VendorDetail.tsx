import React, { useEffect, useLayoutEffect } from "react";
import { Box, Text } from "../../components";
import { MatrimonyStackNavigationProps } from "./MatrimonyRoutes";
import { Feather as Icon } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import Detail from "./components/Detail";
import { useIsFocused } from "@react-navigation/native";
import { connect } from "react-redux";
import { getMatrimonyVendorDetail } from "../../actions/matrimonyActions";
import { ActivityIndicator, Dimensions, Image } from "react-native";

interface vendorDetailProps {
  navigation: any;
  route: any;
  matrimonyState: any;
  getVendorDetail: (id: number) => void;
}
const { width: wWidth, height: wHeight } = Dimensions.get("window");
const VendorDetail = ({
  navigation,
  route,
  matrimonyState,
  getVendorDetail,
}: vendorDetailProps) => {
  const isFocused = useIsFocused();
  const { id, title } = route.params;

  useEffect(() => {
    navigation.setOptions({
      headerTitle: title,

      headerTitleStyle: {
        // display: "none",
      },
    });
  }, [isFocused, title]);
  useEffect(() => {
    getVendorDetail(id);
  }, [id]);
  const {
    matrimonyVendorDetailLoading,
    matrimonyVendorDetailData,
    matrimonyVendorDetailError,
  } = matrimonyState;
  const {
    address1,
    address2,
    galleries,
    businessName,
    category,
    about,
    email,
    country,
    city,
    owners,
    fullName,
    phoneNumber,
    place,
    _links,
  } = matrimonyVendorDetailData;
  return (
    <Box flex={1}>
      <ScrollView>
        {matrimonyVendorDetailLoading ? (
          <Box>
            <ActivityIndicator />
          </Box>
        ) : (
          <Box flex={1}>
            {galleries && galleries.length > 0 ? (
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
                  {category}
                </Text>
                <Text
                  marginVertical="s"
                  variant="cardTitle"
                  color="primaryText"
                >
                  {businessName}
                </Text>
                <Text marginVertical="s">
                  <Icon name="map-pin" size={20} />{" "}
                  <Text variant="cardSubTitle" color="primaryText">
                    {address1 ? address1 : null}
                  </Text>
                </Text>
                <Text marginVertical="s">
                  <Icon name="mail" size={20} /> Email :
                  <Text variant="cardSubTitle" color="primaryText">
                    {email ? email : null}
                  </Text>
                </Text>
                <Box>
                  <Text>About:</Text>
                  <Text variant="cardSubTitle" color="primaryText">
                    {about ? about : null}
                  </Text>
                </Box>

                <Text marginVertical="s">
                  <Icon name="phone" size={20} /> Phone :
                  <Text variant="cardSubTitle" color="primaryText">
                    {phoneNumber ? phoneNumber : null}
                  </Text>
                </Text>
              </Box>
              {owners && owners.length > 0 ? (
                <Box marginVertical="s">
                  <Text variant="cardTitle" color="primaryText">
                    Vendor
                  </Text>

                  {owners.map((item: any, index: number) => {
                    return (
                      <Box
                        key={index}
                        marginVertical="s"
                        width={wWidth}
                        height={wWidth * 0.2}
                        flexDirection="row"
                        alignItems="center"
                      >
                        <Box width={"20%"} height={"100%"}>
                          {item._links !== undefined ? (
                            <Image
                              style={{ width: "100%", height: "100%" }}
                              source={{ uri: item._links.profilePic.href }}
                            />
                          ) : null}
                        </Box>
                        <Box marginHorizontal="s">
                          <Text>{item.fullName}</Text>
                          <Text>{item.designation}</Text>
                        </Box>
                      </Box>
                    );
                  })}
                </Box>
              ) : (
                <Text>Nothing In Here</Text>
              )}
            </Box>
          </Box>
        )}
      </ScrollView>
    </Box>
  );
};

function mapStateToProps(state: any) {
  return {
    matrimonyState: state.matrimony,
  };
}
const mapDispatchToProps = (dispatch: any) => ({
  getVendorDetail: (id: number) => dispatch(getMatrimonyVendorDetail(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(VendorDetail);
