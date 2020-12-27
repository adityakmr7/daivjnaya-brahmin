import React, { useEffect, useLayoutEffect } from "react";
import { connect } from "react-redux";
import { getJewelleryWorkerDetail } from "../../actions/jewelleryActions";
import { Box, Text } from "../../components";

interface ShopDetailProps {
  route: any;
  getVendorDetail: (id: number) => void;
  vendor: any;
  navigation: any;
}
const VendorDetail = ({
  navigation,
  route,
  getVendorDetail,
  vendor,
}: ShopDetailProps) => {
  const { id, title } = route.params;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: title,
    });
  }, [title]);

  useEffect(() => {
    getVendorDetail(id);
  }, [id]);
  const { vendorDetailLoading, vendorDetailData, vendorDetailError } = vendor;
  return (
    <Box>
      <Text>VendorDetail</Text>
    </Box>
  );
};
function mapStateToProps(state: any) {
  return {
    vendor: state.jewellery,
  };
}
const mapDispatchToProps = (dispatch: any) => ({
  getVendorDetail: (id: number) => dispatch(getJewelleryWorkerDetail(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VendorDetail);
