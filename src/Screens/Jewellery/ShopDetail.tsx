import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getJewelleryShopDetail } from "../../actions/jewelleryActions";
import { Box, Text } from "../../components";

interface ShopDetailProps {
  route: any;
  getShopDetail: (id: number) => void;
  shop: any;
}
const ShopDetail = ({ route, getShopDetail, shop }: ShopDetailProps) => {
  const { id, title } = route.params;
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
