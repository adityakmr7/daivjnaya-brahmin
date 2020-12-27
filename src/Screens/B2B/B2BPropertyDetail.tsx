import React, { useEffect, useLayoutEffect } from "react";
import { ActivityIndicator, Dimensions, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { getB2bPropertyDetail } from "../../actions/b2bActions";
import { Box, Text } from "../../components";
import { Feather as Icon } from "@expo/vector-icons";
interface B2BPropertyDetailProps {
  route: any;
  getPropertyDetail: (id: number) => void;
  property: any;
  navigation: any;
}
const { width: wWidth, height: wHeight } = Dimensions.get("window");
const B2BPropertyDetail = ({
  route,
  getPropertyDetail,
  property,
  navigation,
}: B2BPropertyDetailProps) => {
  const { id, title } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: title,
    });
  }, [title]);
  useEffect(() => {
    getPropertyDetail(id);
  }, [id]);
  const {
    propertyDetailLoading,
    propertyDetailData,
    propertyDetailError,
  } = property;
  const {
    galleries,
    address,
    creationDate,
    email,
    owner,
    phoneNumber,
    propertyName,
    updatedDate,
    type,
  } = propertyDetailData;

  //   creationDate: 1608459064000
  // designation: "hdjdkccn"
  // email: "adiaty@gmail.com"
  // fullName: "aditya kumar"
  // phoneNumber: "9985225252"
  // place: "fjfmfncncn"
  // poId: 1
  // profilePic: null
  // updatedDate: 1608459064000

  return (
    <Box flex={1}>
      <ScrollView>
        {propertyDetailLoading ? (
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
            <Box>
              <Box marginHorizontal="s">
                <Text variant="cardSubTitle" color="primaryText">
                  {type}
                </Text>
                <Text
                  marginVertical="s"
                  variant="cardTitle"
                  color="primaryText"
                >
                  {propertyName}
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
              {owner ? (
                <Box marginHorizontal="s" marginVertical="s">
                  <Text variant="cardTitle" color="primaryText">
                    Owner
                  </Text>
                  <Box
                    marginVertical="s"
                    width={wWidth}
                    height={wWidth * 0.2}
                    flexDirection="row"
                    alignItems="center"
                  >
                    <Box width={"20%"} height={"100%"}>
                      {owner._links !== undefined ? (
                        <Image
                          style={{ width: "100%", height: "100%" }}
                          source={{ uri: owner._links.profilePic.href }}
                        />
                      ) : null}
                    </Box>
                    <Box marginHorizontal="s">
                      <Text>{owner.fullName}</Text>
                      <Text>{owner.designation}</Text>
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
    property: state.b2b,
  };
}
const mapDispatchToProps = (dispatch: any) => ({
  getPropertyDetail: (id: number) => dispatch(getB2bPropertyDetail(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(B2BPropertyDetail);
