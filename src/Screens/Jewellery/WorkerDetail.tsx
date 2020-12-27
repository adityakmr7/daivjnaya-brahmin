import React, { useEffect, useLayoutEffect } from "react";
import { connect } from "react-redux";
import { getJewelleryWorkerDetail } from "../../actions/jewelleryActions";
import { Box, Text } from "../../components";

interface ShopDetailProps {
  route: any;
  getWorkerDetail: (id: number) => void;
  worker: any;
  navigation: any;
}
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
