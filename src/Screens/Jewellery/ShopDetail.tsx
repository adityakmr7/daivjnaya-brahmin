import React, { useEffect, useLayoutEffect } from "react";
import { connect } from "react-redux";
import { getJewelleryShopDetail } from "../../actions/jewelleryActions";
import { Box, Text } from "../../components";

interface ShopDetailProps {
  route: any;
  getShopDetail: (id: number) => void;
  shop: any;
  navigation: any;
}
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
  return (
    <Box>
      <Text>ShopDetail</Text>
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
