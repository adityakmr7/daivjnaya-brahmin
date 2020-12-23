import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getJewelleryWorkerDetail } from "../../actions/jewelleryActions";
import { Box, Text } from "../../components";

interface ShopDetailProps {
  route: any;
  getWorkerDetail: (id: number) => void;
  shop: any;
}
const WorkerDetail = ({ route, getWorkerDetail, shop }: ShopDetailProps) => {
  const { id, title } = route.params;
  useEffect(() => {
    getWorkerDetail(id);
  }, [id]);
  const { workerDetailLoading, workerDetailData, workerDetailError } = shop;
  return (
    <Box>
      <Text>WorkerDetail</Text>
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
