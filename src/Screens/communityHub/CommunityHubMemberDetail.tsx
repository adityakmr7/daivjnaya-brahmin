import React, { useEffect } from "react";
import { ActivityIndicator, Dimensions, Image } from "react-native";
import { FlatList, RectButton, ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { getHubByHid } from "../../actions/hubActions";
import { Box, Text } from "../../components";
import { Feather as Icon } from "@expo/vector-icons";
import { useIsFocused } from "@react-navigation/native";

const { height: wHeight, width: wWidth } = Dimensions.get("window");
interface CommunityHubMemberDetailProps {
  getHubMember: (hId: number) => void;
  route: any;
  memberDetail: {
    hubMemberDetail: {
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
      hubGalleries: [];
    };
    hubMemberDetailLoading: boolean;
    hubMemberDetailError: string;
  };
}
const CommunityHubMemberDetail = ({
  route,
  getHubMember,
  memberDetail,
}: CommunityHubMemberDetailProps) => {
  const { hId } = route.params;
  const isFocused = useIsFocused();
  const {
    hubMemberDetail,
    hubMemberDetailLoading,
    hubMemberDetailError,
  } = memberDetail;
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
    hubGalleries,
  } = hubMemberDetail;
  console.log("memberDetail", hubMemberDetail);

  const renderImage = ({ item }: { item: any }) => {
    return (
      <Box width={wWidth}>
        <Image
          style={{ width: wWidth, height: wWidth }}
          source={{ uri: item._links.self.href }}
        />
      </Box>
    );
  };

  return (
    <Box flex={1}>
      {hubMemberDetailLoading ? (
        <Box flex={1} justifyContent="center" alignItems="center">
          <ActivityIndicator />
        </Box>
      ) : (
        <ScrollView>
          {hubGalleries && hubGalleries.length > 0 ? (
            <Box width={wWidth}>
              <FlatList
                horizontal={true}
                data={hubGalleries}
                renderItem={renderImage}
                keyExtractor={(item) => item.hgId}
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
              <Text paddingHorizontal="s">
                {phoneNumber ? phoneNumber : ""}
              </Text>
            </Box>
          </Box>
          <Box marginVertical="s" marginHorizontal="xxl">
            <Text variant="sectionTitle">{hubName ? hubName : ""}</Text>
          </Box>
        </ScrollView>
      )}
    </Box>
  );
};

function mapStateToProps(state: any) {
  return {
    memberDetail: state.hub,
  };
}

const mapDispatchToProps = (dispatch: any) => ({
  getHubMember: (hId: number) => dispatch(getHubByHid(hId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommunityHubMemberDetail);
