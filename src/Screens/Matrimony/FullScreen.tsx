import React, { useEffect, useLayoutEffect, useState } from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { getMatrimonyProfileById } from "../../actions/matrimonyActions";
import { Box, Text } from "../../components";
import { MatrimonyStackNavigationProps } from "./MatrimonyRoutes";

const { width: wWidth, height: wHeight } = Dimensions.get("window");
const FullScreen = ({
  navigation,
  route,
  getBrideDetail,
  matrimonyDetail,
}: MatrimonyStackNavigationProps<"FullScreen">) => {
  const { id, gender } = route.params;
  useEffect(() => {
    getBrideDetail(id);
  }, [id]);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: matrimonyDetail.firstName,
      headerStyle: {
        elevation: 0,
      },
    });
  }, [navigation]);
  const { matrimonyDetailProfile } = matrimonyDetail;
  const { images } = matrimonyDetailProfile;

  return (
    <Box flex={1}>
      {images &&
      images[0] &&
      images[0]._links &&
      images[0]._links.image &&
      images[0]._links.image.href ? (
        <Image
          style={{
            height: wHeight,
            width: wWidth,
            ...StyleSheet.absoluteFillObject,
          }}
          source={{ uri: images[0]._links.image.href }}
        />
      ) : (
        <Box flex={1} justifyContent="center" alignItems="center">
          <Text>No Images Here</Text>
        </Box>
      )}
    </Box>
  );
};

function mapStateToProps(state: any) {
  return {
    matrimonyDetail: state.matrimony,
  };
}

const mapDispatchToProps = (dispatch: any) => ({
  getBrideDetail: (pId: number) => dispatch(getMatrimonyProfileById(pId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FullScreen);
