import React, { useEffect } from "react";
import { Dimensions, Image } from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { getHubByHid } from "../../actions/hubActions";
import { Box, Text } from "../../components";
import { Feather as Icon } from "@expo/vector-icons";

const { height: wHeight, width: wWidth } = Dimensions.get("window");
interface CommunityHubMemberDetailProps {
  getHubMember: (hId: number) => void;
  memberDetail: {
    about: string;
    address: {
      addressLine1: string;
      addressLine2: string;
      city: string;
      country: string;
      createdDate: number;
      haId: number;
      lastModifiedDate: number;
      latitude: string;
      longitude: number;
      pincode: null | number;
      state: string;
    };

    createdDate: number;
    email: string;
    facilities: string;
    hId: number;
    hubName: string;
    lastModifiedDate: number;
    memberCount: number;
    phoneNumber: string;
    yourName: string;
    links: { href: string };
  };
}
const CommunityHubMemberDetail = ({
  route,
  getHubMember,
  memberDetail,
}: CommunityHubMemberDetailProps) => {
  const { hId } = route.params;
  useEffect(() => {
    getHubMember(hId);
  }, [hId]);
  const {
    address,
    about,
    createdDate,
    email,
    facilities,
    hId: id,
    hubName,
    lastModifiedDate,
    memberCount,
    phoneNumber,
    yourName,
    links, // this might change
  } = memberDetail;
  return (
    <Box flex={1}>
      <ScrollView>
        {links ? (
          <Box>
            <Image
              style={{
                height: wWidth,
                width: wWidth,
                borderBottomRightRadius: 10,
                borderBottomLeftRadius: 10,
              }}
              source={{ uri: links.href }}
            />
          </Box>
        ) : (
          <Box>
            <Box
              backgroundColor="grey"
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                height: wWidth,
                width: wWidth,
                borderBottomRightRadius: 10,
                borderBottomLeftRadius: 10,
              }}
            >
              <Text>No Image Available</Text>
            </Box>
          </Box>
        )}
        <Box marginTop="l" marginHorizontal="xxl">
          {/* <Text variant="sectionTitle">{house.title}</Text> */}
          <Box flexDirection="row" marginVertical="s">
            <Icon name="map-pin" size={15} />
            <Text paddingHorizontal="s">
              {address && address.addressLine1 ? address.addressLine1 : ""}
            </Text>
          </Box>
          <Box flexDirection="row" marginVertical="s">
            <Icon name="mail" size={15} />
            <Text paddingHorizontal="s">{email ? email : ""}</Text>
          </Box>
          <Box flexDirection="row" marginVertical="s">
            <Icon name="phone-call" size={15} />
            <Text paddingHorizontal="s">{phoneNumber ? phoneNumber : ""}</Text>
          </Box>
        </Box>
        <Box marginVertical="s" marginHorizontal="xxl">
          <Text variant="sectionTitle">{hubName ? hubName : ""}</Text>
        </Box>

        {[1, 2, 3].map((_, i) => {
          return (
            <Box
              marginVertical="s"
              key={i}
              flexDirection="row"
              marginHorizontal="xxl"
            >
              <Box>
                {/* <Image
                  style={{
                    borderRadius: 10,
                    height: wWidth / 4,
                    width: wWidth / 4,
                  }}
                  source={house.image}
                /> */}
              </Box>

              <Box>
                {/* <Image
                  style={{
                    borderRadius: 10,
                    height: wWidth / 4,
                    width: wWidth / 4,
                  }}
                  source={house.image}
                /> */}
              </Box>
              <Box paddingHorizontal="l">
                <Text color="primaryText" variant="cardSubTitle">
                  Full Name
                </Text>
                <Text marginVertical="s" variant="cardText" color="primaryText">
                  Designation
                </Text>
                {/* <RectButton
                  onPress={() => navigation.navigate("CommunityMember")}
                >
                  <Text color="selectColor">View details</Text>
                </RectButton> */}
              </Box>
              <Box height={3} backgroundColor="mainBackground" />
            </Box>
          );
        })}
      </ScrollView>
    </Box>
  );
};

function mapStateToProps(state: any) {
  return {
    memberDetail: state.hub.hubMemberDetail,
  };
}

const mapDispatchToProps = (dispatch: any) => ({
  getHubMember: (hId: number) => dispatch(getHubByHid(hId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommunityHubMemberDetail);
