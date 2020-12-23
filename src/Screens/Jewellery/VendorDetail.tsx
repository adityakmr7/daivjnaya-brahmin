import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getJewelleryWorkerDetail } from "../../actions/jewelleryActions";
import { Box, Text } from "../../components";

interface ShopDetailProps {
  route: any;
  getVendorDetail: (id: number) => void;
  vendor: any;
}
const VendorDetail = ({ route, getVendorDetail, vendor }: ShopDetailProps) => {
  const { id, title } = route.params;
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
