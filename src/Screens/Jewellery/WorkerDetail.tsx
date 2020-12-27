import React, { useEffect, useLayoutEffect } from "react";
import { ActivityIndicator, Dimensions, Image, ScrollView } from "react-native";
import { connect } from "react-redux";
import { getJewelleryWorkerDetail } from "../../actions/jewelleryActions";
import { Box, Text } from "../../components";
import { Feather as Icon } from "@expo/vector-icons";

interface ShopDetailProps {
  route: any;
  getWorkerDetail: (id: number) => void;
  worker: any;
  navigation: any;
}
const { width: wWidth, height: wHeight } = Dimensions.get("window");

const WorkerDetail = ({
  navigation,
  route,
  getWorkerDetail,
  worker,
}: ShopDetailProps) => {
  const { id, title } = route.params;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: title,
    });
  }, [title]);
  useEffect(() => {
    getWorkerDetail(id);
  }, [id]);
  const { workerDetailLoading, workerDetailData, workerDetailError } = worker;
  const {
    galleries,
    email,
    vendor,
    phoneNumber,
    type,
    fullName,
    updatedDate,
    address,
    creationDate,
    addressLine1,
  } = workerDetailData;

  //   about: "jdnfnfnf"
  // acceptTMC: true
  // addressLine1: "nxnfnfnf"
  // addressLine2: "nxnfnfnf"
  // city: "ndndndnd"
  // country: "jdndndnfn"
  // creationDate: 1609049250000
  // email: "adityakmr088@gmail.com"
  // facilities: "dnfnfncn"
  // fullName: "jdndmd djdmfn"
  // galleries: (3) [{…}, {…}, {…}]
  // getCallback: true
  // jId: 4
  // otherInfo: "fnfnfnfn"
  // phoneNumber: "9931255285"
  // pincode: "851101"
  // price: "256"
  // professionName: "dnfnfnffjfn"
  // state: "bihar"
  // updatedDate: 1609049250000
  // website: "www.indiamart.com"
  return (
    <Box flex={1}>
      <ScrollView>
        {workerDetailLoading ? (
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
    worker: state.jewellery,
  };
}
const mapDispatchToProps = (dispatch: any) => ({
  getWorkerDetail: (id: number) => dispatch(getJewelleryWorkerDetail(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WorkerDetail);
